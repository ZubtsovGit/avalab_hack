# app/main.py
from fastapi import FastAPI
from prometheus_fastapi_instrumentator import Instrumentator
from app.api.routers import measures, users
from app.core.config import settings
from app.db.session import engine
from app.db.base import Base
from starlette.middleware.cors import CORSMiddleware


# Создание таблиц базы данных
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.PROJECT_NAME, version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Инструментирование для Prometheus
Instrumentator().instrument(app).expose(app)

# Подключение маршрутизаторов
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(measures.router, prefix="/measures", tags=["measures"])
