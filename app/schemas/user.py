# app/schemas/user.py
from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str
    region: str
    industry: str
    company_size: str
    email: EmailStr = None
    telegram_chat_id: str = None

class User(UserBase):
    id: int
    region: str
    industry: str
    company_size: str
    email: EmailStr = None
    telegram_chat_id: str = None

    class Config:
        orm_mode = True
