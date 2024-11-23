# scripts/etl.py
import json
import os
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.db.models.measure import Measure
from app.ml.nlp import simplify_text

RAW_DATA_PATH = 'data/raw/measures.json'

def load_measures():
    with open(RAW_DATA_PATH, 'r', encoding='utf-8') as f:
        measures = json.load(f)

    db: Session = SessionLocal()
    for measure_data in measures:
        simplified_description = simplify_text(measure_data['description'])
        measure = Measure(
            title=measure_data['title'],
            description=simplified_description,
            link=measure_data['link'],
            region=measure_data['region'],
            industry=measure_data['industry'],
            company_size=measure_data['company_size']
        )
        db.add(measure)
    db.commit()
    db.close()

if __name__ == '__main__':
    load_measures()
