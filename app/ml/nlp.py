# app/ml/nlp.py
import spacy
import logging

nlp = spacy.load('ru_core_news_md')
logger = logging.getLogger(__name__)

def preprocess_text(text):
    # Простая обработка текста без упрощения
    try:
        doc = nlp(text)
        processed_text = ' '.join([token.lemma_ for token in doc])
        logger.info("Текст успешно обработан с помощью spaCy")
        return processed_text
    except Exception as e:
        logger.error("Ошибка при обработке текста: %s", e)
        return text  # Возврат оригинального текста в случае ошибки