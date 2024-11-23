# scripts/notify_users.py

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import logging
from app.db.session import SessionLocal
from app.db.models.measure import Measure
from app.db.models.user import User
from app.notification.email_notifications import send_email_notification
from app.notification.telegram_notifications import send_telegram_notification

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def main():
    db = SessionLocal()
    try:
        # Загрузка предыдущего количества мер из файла
        last_measure_count_file = 'data/last_measure_count.txt'
        if os.path.exists(last_measure_count_file):
            with open(last_measure_count_file, 'r') as f:
                last_measure_count = int(f.read())
        else:
            last_measure_count = None

        current_measure_count = db.query(Measure).count()
        logger.info(f"Текущее количество мер: {current_measure_count}")

        if last_measure_count is not None and current_measure_count != last_measure_count:
            # Количество мер изменилось
            logger.info("Количество мер изменилось, отправка уведомлений")
            # Получение всех пользователей
            users = db.query(User).all()
            for user in users:
                message = "Количество мер поддержки изменилось. Пожалуйста, проверьте новые меры поддержки."
                subject = "Обновление мер поддержки"
                if user.email:
                    send_email_notification(user.email, subject, message)
                if user.telegram_chat_id:
                    send_telegram_notification(user.telegram_chat_id, message)
        else:
            logger.info("Изменений в количестве мер не обнаружено")

        # Обновление last_measure_count
        with open(last_measure_count_file, 'w') as f:
            f.write(str(current_measure_count))
    except Exception as e:
        logger.error(f"Ошибка в скрипте уведомлений: {e}")
    finally:
        db.close()

if __name__ == '__main__':
    main()
