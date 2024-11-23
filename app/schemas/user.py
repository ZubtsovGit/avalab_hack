# app/schemas/user.py
from pydantic import BaseModel

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str
    region: str
    industry: str
    company_size: str

class User(UserBase):
    id: int
    region: str
    industry: str
    company_size: str

    class Config:
        orm_mode = True
