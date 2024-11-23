# app/core/config.py
import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Support Measures API"
    SQLALCHEMY_DATABASE_URI: str = os.getenv("DATABASE_URL", "postgresql://user:password@db:5432/dbname")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()
