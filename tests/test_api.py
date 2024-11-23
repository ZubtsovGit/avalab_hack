# tests/test_api.py
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.main import app
from app.db.base import Base
from app.api.dependencies import get_db

SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine
)

Base.metadata.create_all(bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_read_measures():
    response = client.get("/measures/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_register_and_login():
    # Тест регистрации
    response = client.post("/users/register", json={
        "username": "testuser",
        "password": "testpass",
        "region": "Москва",
        "industry": "IT",
        "company_size": "Малый бизнес"
    })
    assert response.status_code == 200

    # Тест входа
    response = client.post("/users/token", data={
        "username": "testuser",
        "password": "testpass"
    })
    assert response.status_code == 200
    assert "access_token" in response.json()
