# app/core/config.py
import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Support Measures API"
    SQLALCHEMY_DATABASE_URI: str = os.getenv("DATABASE_URL", "postgresql://user:password@db:5432/dbname")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # Настройки электронной почты
    SMTP_SERVER: str = os.getenv("SMTP_SERVER", "smtp.gmail.com")
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", 587))
    SMTP_USERNAME: str = os.getenv("SMTP_USERNAME", "")
    SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "")
    FROM_EMAIL: str = os.getenv("FROM_EMAIL", "")

        # Настройки Telegram
    TELEGRAM_BOT_TOKEN: str = os.getenv("TELEGRAM_BOT_TOKEN", "")

    # Добавьте новые настройки
    GOSUSLUGI_CLIENT_ID = os.getenv("GOSUSLUGI_CLIENT_ID")
    GOSUSLUGI_CLIENT_SECRET = os.getenv("GOSUSLUGI_CLIENT_SECRET")
    GOSUSLUGI_AUTHORIZE_URL = "https://esia.gosuslugi.ru/aas/oauth2/ac"
    GOSUSLUGI_ACCESS_TOKEN_URL = "https://esia.gosuslugi.ru/aas/oauth2/te"
    GOSUSLUGI_API_BASE_URL = "https://esia.gosuslugi.ru/rs/"


settings = Settings()
