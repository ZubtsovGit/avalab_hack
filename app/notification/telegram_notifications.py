# app/notification/telegram_notifications.py

import requests
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

def send_telegram_notification(chat_id: str, message: str):
    bot_token = settings.TELEGRAM_BOT_TOKEN
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"

    payload = {
        "chat_id": chat_id,
        "text": message
    }

    try:
        response = requests.post(url, data=payload)
        if response.status_code == 200:
            logger.info(f"Message sent to Telegram chat {chat_id}")
        else:
            logger.error(f"Failed to send message to Telegram chat {chat_id}: {response.text}")
    except Exception as e:
        logger.error(f"Error sending Telegram message to {chat_id}: {e}")
