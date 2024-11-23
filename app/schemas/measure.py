# app/schemas/measure.py
from pydantic import BaseModel

class MeasureBase(BaseModel):
    title: str
    description: str
    link: str
    region: str
    industry: str
    company_size: str

class MeasureCreate(MeasureBase):
    pass

class Measure(MeasureBase):
    id: int

    class Config:
        orm_mode = True
