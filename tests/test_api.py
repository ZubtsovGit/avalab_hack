# tests/test_api.py
from fastapi.testclient import TestClient
from app.main import app

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
