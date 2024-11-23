# Dockerfile
FROM python:3.9-slim

WORKDIR /code

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Установка модели spaCy
RUN python -m spacy download ru_core_news_md

# Установка модели simplification
RUN python -m simplification download_model ru

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
