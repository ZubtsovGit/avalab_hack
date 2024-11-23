# app/ml/recommendation.py
import pickle
import os
import logging
import numpy as np
from sklearn.preprocessing import OneHotEncoder
from sqlalchemy.orm import Session
from app.db.models.measure import Measure
from app.db.models.user import User

logger = logging.getLogger(__name__)
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'models', 'recommendation_model.pkl')
ENCODER_PATH = os.path.join(os.path.dirname(__file__), 'models', 'encoder.pkl')

with open(MODEL_PATH, 'rb') as f:
    model = pickle.load(f)

with open(ENCODER_PATH, 'rb') as f:
    encoder = pickle.load(f)

def get_recommendations(user: User, db: Session):
    features = extract_features(user)
    probabilities = model.predict_proba(features)[0]
    top_indices = np.argsort(probabilities)[::-1][:10]
    measure_ids = model.classes_[top_indices]
    measures = get_measures_from_predictions(measure_ids, db)
    logger.info("Рекомендации успешно сгенерированы для пользователя %s", user.username)
    return measures

def extract_features(user):
    features = {
        'region': user.region,
        'industry': user.industry,
        'company_size': user.company_size,
        'okved': user.okved,
        'employees_number': user.employees_number,
    }
    return pd.DataFrame([features])

def get_measures_from_predictions(predictions, db: Session):
    measures = []
    for pred in predictions:
        measure = db.query(Measure).filter(Measure.id == pred).first()
        if measure:
            measures.append(measure)
    return measures
