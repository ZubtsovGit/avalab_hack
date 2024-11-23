from fastapi import APIRouter, Request, Depends
from authlib.integrations.starlette_client import OAuth
from starlette.responses import RedirectResponse
from app.core.config import settings
from app.db.session import get_db
from app.db.models.user import User as UserModel
from app.services.fns_api import get_company_data_by_inn

router = APIRouter()

oauth = OAuth()

oauth.register(
    name='gosuslugi',
    client_id=settings.GOSUSLUGI_CLIENT_ID,
    client_secret=settings.GOSUSLUGI_CLIENT_SECRET,
    access_token_url=settings.GOSUSLUGI_ACCESS_TOKEN_URL,
    authorize_url=settings.GOSUSLUGI_AUTHORIZE_URL,
    api_base_url=settings.GOSUSLUGI_API_BASE_URL,
    client_kwargs={'scope': 'openid', 'token_endpoint_auth_method': 'client_secret_post'}
)

@router.get('/auth/gosuslugi')
async def auth_gosuslugi(request: Request):
    redirect_uri = request.url_for('auth_gosuslugi_callback')
    return await oauth.gosuslugi.authorize_redirect(request, redirect_uri)

@router.get('/auth/gosuslugi/callback')
async def auth_gosuslugi_callback(request: Request, db: Session = Depends(get_db)):
    token = await oauth.gosuslugi.authorize_access_token(request)
    user_info = await oauth.gosuslugi.parse_id_token(request, token)
    inn = user_info.get('inn')
    if not inn:
        return RedirectResponse(url='/login')
    # Поиск или создание пользователя
    user = db.query(UserModel).filter(UserModel.inn == inn).first()
    if not user:
        user = UserModel(
            username=inn,
            inn=inn,
            # Заполните остальные поля по необходимости
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    # Генерация JWT токена и редирект пользователя
    # ...
    company_data = get_company_data_by_inn(inn)
    if company_data:
        user.company_name = company_data.get('НаимПолнЮЛ')
        main_activity = company_data.get('ОснВидДеят', {})
        user.okved = main_activity.get('Код')
        employees_info = company_data.get('ОткрСведения', {})
        user.employees_number = employees_info.get('КолРаб')
        db.commit()
