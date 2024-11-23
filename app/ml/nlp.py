# app/ml/nlp.py
import spacy
import logging
from simplification.cycle_gan import simplify

nlp = spacy.load('ru_core_news_md')
logger = logging.getLogger(__name__)

def simplify_text(text):
    try:
        simplified_text = simplify(text)
        logger.info("Текст успешно упрощен с помощью модели CycleGAN")
        return simplified_text
    except Exception as e:
        logger.error("Ошибка при упрощении текста: %s", e)
        return text  # Возврат оригинального текста в случае ошибки
