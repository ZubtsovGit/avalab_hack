# app/db/models/user.py
from sqlalchemy import Column, Integer, String
from app.db.base import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(150), unique=True, index=True, nullable=False)
    hashed_password = Column(String(128), nullable=False)
    region = Column(String(100))
    industry = Column(String(100))
    company_size = Column(String(50))
    email = Column(String(150), unique=True, index=True, nullable=True)
    telegram_chat_id = Column(String(100), nullable=True)
    inn = Column(String(12), unique=True, index=True, nullable=True)
    company_name = Column(String(255), nullable=True)
    okved = Column(String(10), nullable=True)
    employees_number = Column(Integer, nullable=True)