# app/schemas/user.py
from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str
    region: str
    industry: str
    company_size: str
    email: Optional[EmailStr] = None
    telegram_chat_id: Optional[str] = None
    inn: Optional[str] = None
    company_name: Optional[str] = None
    okved: Optional[str] = None
    employees_number: Optional[int] = None

    class Config:
        orm_mode = True

class User(UserBase):
    id: int
    region: str
    industry: str
    company_size: str
    email: EmailStr = None
    telegram_chat_id: str = None

    class Config:
        orm_mode = True
