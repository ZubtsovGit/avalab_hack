# scripts/train_model.py
import mlflow
import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

def train_recommendation_model():
    # Загрузка данных
    data = pd.read_csv('data/processed/training_data.csv')
    X = data.drop('target', axis=1)
    y = data['target']

    # Разделение данных
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # Обучение модели
    model = RandomForestClassifier()
    model.fit(X_train, y_train)

    # Оценка модели
    accuracy = model.score(X_test, y_test)

    # Логирование с MLflow
    with mlflow.start_run():
        mlflow.log_metric("accuracy", accuracy)
        mlflow.sklearn.log_model(model, "model")
        # Сохранение модели
        with open('app/ml/models/recommendation_model.pkl', 'wb') as f:
            pickle.dump(model, f)

if __name__ == '__main__':
    train_recommendation_model()
