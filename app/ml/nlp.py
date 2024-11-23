# app/ml/nlp.py
import spacy
import logging

nlp = spacy.load('ru_core_news_md')
logger = logging.getLogger(__name__)

def simplify_text(text):
    doc = nlp(text)
    simplified_sentences = []
    for sent in doc.sents:
        simplified_sentence = ' '.join(
            [token.lemma_ for token in sent if not token.is_stop]
        )
        simplified_sentences.append(simplified_sentence)
    simplified_text = ' '.join(simplified_sentences)
    logger.info("Текст успешно упрощен")
    return simplified_text
