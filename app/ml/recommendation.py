# app/ml/recommendation.py
import pickle
import os
import logging
try:
    import numpy as np
except Exception:  # pragma: no cover - optional dependency
    np = None

try:
    from sklearn.preprocessing import OneHotEncoder
except Exception:  # pragma: no cover - optional dependency
    OneHotEncoder = None
from sqlalchemy.orm import Session
from app.db.models.measure import Measure
from app.db.models.user import User

try:
    import pandas as pd
except Exception:  # pragma: no cover - optional dependency
    pd = None

logger = logging.getLogger(__name__)
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'models', 'recommendation_model.pkl')
ENCODER_PATH = os.path.join(os.path.dirname(__file__), 'models', 'encoder.pkl')

model = None
encoder = None
if np is not None and os.path.exists(MODEL_PATH) and os.path.exists(ENCODER_PATH):
    try:
        with open(MODEL_PATH, 'rb') as f:
            model = pickle.load(f)
        with open(ENCODER_PATH, 'rb') as f:
            encoder = pickle.load(f)
    except Exception as e:  # pragma: no cover - model loading is optional
        logger.warning("Failed to load recommendation model: %s", e)

def get_recommendations(user: User, db: Session):
    """Return recommended measures for a user."""
    if model is None or np is None:
        logger.warning("Recommendation model is not available")
        return []

    features = extract_features(user)
    probabilities = model.predict_proba(features)[0]
    top_indices = np.argsort(probabilities)[::-1][:10]
    measure_ids = model.classes_[top_indices]
    measures = get_measures_from_predictions(measure_ids, db)
    logger.info("Рекомендации успешно сгенерированы для пользователя %s", user.username)
    return measures

class _SimpleFeatures:
    """Fallback container used when pandas is unavailable."""

    def __init__(self, row: dict):
        self._row = row

    @property
    def shape(self):
        return (1, len(self._row))


def extract_features(user):
    """Extract user features for the recommendation model."""
    features = {
        'region': user.region,
        'industry': user.industry,
        'company_size': user.company_size,
        'okved': getattr(user, 'okved', None),
        'employees_number': getattr(user, 'employees_number', None),
    }
    if pd is not None:
        return pd.DataFrame([features])
    return _SimpleFeatures(features)

def get_measures_from_predictions(predictions, db: Session):
    measures = []
    for pred in predictions:
        measure = db.query(Measure).filter(Measure.id == pred).first()
        if measure:
            measures.append(measure)
    return measures
