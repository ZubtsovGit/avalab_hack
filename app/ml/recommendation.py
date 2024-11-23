# app/ml/recommendation.py
import pickle
import os
import logging
from sqlalchemy.orm import Session
from app.db.models.measure import Measure
from app.db.models.user import User

logger = logging.getLogger(__name__)
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'models', 'recommendation_model.pkl')

with open(MODEL_PATH, 'rb') as f:
    model = pickle.load(f)

def get_recommendations(user: User, db: Session):
    # Подготовка признаков для модели
    features = extract_features(user)
    # Получение прогнозов
    predictions = model.predict(features)
    # Получение соответствующих мер поддержки
    measures = get_measures_from_predictions(predictions, db)
    logger.info("Рекомендации успешно сгенерированы для пользователя %s", user.username)
    return measures

def extract_features(user: User):
    # Преобразование пользовательских данных в формат признаков
    # Здесь необходимо реализовать кодировку категориальных признаков
    return [[
        encode_region(user.region),
        encode_industry(user.industry),
        encode_company_size(user.company_size)
    ]]

def encode_region(region):
    # Пример кодирования региона
    region_mapping = {'Москва': 0, 'Санкт-Петербург': 1, ...}
    return region_mapping.get(region, -1)

def encode_industry(industry):
    # Пример кодирования отрасли
    industry_mapping = {'IT': 0, 'Сельское хозяйство': 1, ...}
    return industry_mapping.get(industry, -1)

def encode_company_size(size):
    size_mapping = {'Малый бизнес': 0, 'Средний бизнес': 1, ...}
    return size_mapping.get(size, -1)

def get_measures_from_predictions(predictions, db: Session):
    measures = []
    for pred in predictions:
        measure = db.query(Measure).filter(Measure.id == pred).first()
        if measure:
            measures.append(measure)
    return measures
