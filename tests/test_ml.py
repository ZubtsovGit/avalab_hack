# tests/test_ml.py
from app.ml.recommendation import extract_features
from app.db.models.user import User

def test_extract_features():
    user = User(
        username='testuser',
        region='Москва',
        industry='IT',
        company_size='Малый бизнес'
    )
    features = extract_features(user)
    assert features.shape[1] > 0  # Проверка, что признаки не пустые
