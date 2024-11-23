# scripts/train_model.py
import mlflow
import pandas as pd
import pickle
import os
import torch
from torch import nn
from torch.utils.data import TensorDataset, DataLoader
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import OneHotEncoder

DATA_PATH = 'data/processed/training_data.csv'
MODEL_DIR = 'app/ml/models'

def optimize_model(model):
    # Квантизация модели
    model_q = torch.quantization.quantize_dynamic(
        model, {nn.Linear}, dtype=torch.qint8
    )
    return model_q

def train_recommendation_model():
    # Загрузка данных
    data = pd.read_csv(DATA_PATH)
    X = data[['region', 'industry', 'company_size']]
    y = data['measure_id']

    # Кодирование категориальных признаков
    encoder = OneHotEncoder(sparse=False)
    X_encoded = encoder.fit_transform(X)

    # Разделение данных
    X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2)

    # Обучение модели
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X_train, y_train)

    # Оценка модели
    accuracy = model.score(X_test, y_test)

    # Логирование с MLflow
    with mlflow.start_run():
        mlflow.log_metric("accuracy", accuracy)
        mlflow.sklearn.log_model(model, "model")

    # Сохранение модели и кодировщика
    os.makedirs(MODEL_DIR, exist_ok=True)
    with open(os.path.join(MODEL_DIR, 'recommendation_model.pkl'), 'wb') as f:
        pickle.dump(model, f)
    with open(os.path.join(MODEL_DIR, 'encoder.pkl'), 'wb') as f:
        pickle.dump(encoder, f)

if __name__ == '__main__':
    train_recommendation_model()
