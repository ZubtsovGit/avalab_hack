import requests

FNS_API_URL = "https://api-fns.ru/api/egr"
FNS_API_KEY = settings.FNS_API_KEY  # Добавьте API ключ в настройки

def get_company_data_by_inn(inn):
    params = {
        'req': inn,
        'key': FNS_API_KEY
    }
    response = requests.get(FNS_API_URL, params=params)
    data = response.json()
    if data.get('items'):
        company_info = data['items'][0]['ЮЛ']
        return company_info
    return None
