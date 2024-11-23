# app/db/models/measure.py
from sqlalchemy import Column, Integer, String, Text
from app.db.base import Base

class Measure(Base):
    __tablename__ = "measures"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    description = Column(Text)
    simplified_description = Column(Text)  # Новое поле
    link = Column(String(255))
    region = Column(String(100))
    industry = Column(String(100))
    company_size = Column(String(50))
