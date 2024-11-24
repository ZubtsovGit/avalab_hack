# scripts/parse_data.py

import os
import time
import csv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

DATA_DIR = 'data/raw'

class BusinessSupportParser:
    def __init__(self, filters):
        self.filters = filters
        self.driver = self._init_driver()
        self.card_id = 1
        self.columns = [
            "id", "support", "typeDataOfPeriod", "typeOfSupport",
            "typeOfBusiness", "typeOfActivity", "regionOfSupport", "whereToGet"
        ]
        self.output_file = os.path.join(DATA_DIR, "business_support_details.csv")
        os.makedirs(DATA_DIR, exist_ok=True)
    
    def _init_driver(self):
        options = Options()
        # options.add_argument("--headless")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
        return driver

    def parse(self):
        with open(self.output_file, mode="w", encoding="utf-8", newline="") as file:
            writer = csv.DictWriter(file, fieldnames=self.columns)
            writer.writeheader()
            for filter_url in self.filters:
                self._parse_filter(filter_url, writer)
        self.driver.quit()
        print(f"Data successfully saved to {self.output_file}")

    def _parse_filter(self, filter_url, writer):
        self.driver.get(filter_url)
        time.sleep(3)
        type_of_business = self._determine_business_type(filter_url)
        while True:
            self._parse_cards(writer, type_of_business)
            if not self._go_to_next_page():
                break

    def _determine_business_type(self, filter_url):
        if "business=ip" in filter_url:
            return "Индивидуальные предприниматели"
        elif "business=self" in filter_url:
            return "Самозанятые"
        elif "business=fiz" in filter_url:
            return "Физические лица"
        else:
            return "Неизвестно"

    def _parse_cards(self, writer, type_of_business):
        time.sleep(2)
        cards = self.driver.find_elements(By.CLASS_NAME, "rs-card")
        cards_service = self.driver.find_elements(By.CLASS_NAME, "rs-card.proactive")
        if not cards and not cards_service:
            print("No cards found on this page.")
            return
        self._parse_service_cards(cards_service, writer, type_of_business)
        self._parse_regular_cards(cards, writer, type_of_business)

    def _parse_service_cards(self, cards_service, writer, type_of_business):
        for card_s in cards_service:
            try:
                support = card_s.find_element(By.CLASS_NAME, "rs-card__description").text.strip()
                type_of_support = card_s.find_element(By.CLASS_NAME, "badges-cont").text.strip()
                data = {
                    "id": self.card_id,
                    "typeDataOfPeriod": "Неизвестно",
                    "support": support,
                    "typeOfSupport": type_of_support,
                    "typeOfBusiness": type_of_business,
                    "typeOfActivity": "Неизвестно",
                    "regionOfSupport": "Краснодарский край",
                    "whereToGet": "https://xn--l1agf.xn--p1ai/services/support/filter/"
                }
                writer.writerow(data)
                self.card_id += 1
            except Exception as e:
                print(f"Error processing service card: {e}")

    def _parse_regular_cards(self, cards, writer, type_of_business):
        for card in cards:
            try:
                support = card.find_element(By.CLASS_NAME, "rs-card__description").text.strip()
                type_data_of_period = self._get_card_period(card)
                type_of_support = card.find_element(By.CLASS_NAME, "badges-cont").text.strip()
                self.driver.execute_script("arguments[0].click();", card.find_element(By.CLASS_NAME, "rs-card__requirements-btn"))
                time.sleep(1)
                popup = self.driver.find_element(By.CLASS_NAME, "popup.requirement-popup.active")
                if popup.find_element(By.CLASS_NAME, "popup__descr").text:
                    support += ". " + popup.find_element(By.CLASS_NAME, "popup__descr").text.strip()
                conditions = popup.find_elements(By.CLASS_NAME, "requirement-popup__condition")
                type_of_activity = conditions[1].find_element(By.CLASS_NAME, "requirement-popup__condition-value").text.strip() if len(conditions) > 1 else "Неизвестно"
                data = {
                    "id": self.card_id,
                    "typeDataOfPeriod": type_data_of_period,
                    "support": support,
                    "typeOfSupport": type_of_support,
                    "typeOfBusiness": type_of_business,
                    "typeOfActivity": type_of_activity,
                    "regionOfSupport": "Краснодарский край",
                    "whereToGet": "https://xn--l1agf.xn--p1ai/services/support/filter/"
                }
                writer.writerow(data)
                self.card_id += 1
                popup.find_element(By.CLASS_NAME, "popup__close-icon").click()
                time.sleep(1)
            except Exception as e:
                print(f"Error processing regular card: {e}")
                continue

    def _get_card_period(self, card):
        try:
            return card.find_element(By.CLASS_NAME, "rs-card__status.bad_color.status_finished").text.strip()
        except:
            return card.find_element(By.CLASS_NAME, "rs-card__status").text.strip()

    def _go_to_next_page(self):
        try:
            next_button = self.driver.find_element(By.CLASS_NAME, "pagination__control.pagination__control_next")
            if "disabled" in next_button.get_attribute("class"):
                return False
            self.driver.execute_script("arguments[0].click();", next_button)
            time.sleep(2)
            return True
        except Exception:
            return False

if __name__ == "__main__":
    filters = [
        "https://xn--l1agf.xn--p1ai/services/support/filter/?business=ip&region=74",
        "https://xn--l1agf.xn--p1ai/services/support/filter/?business=self&region=74",
        "https://xn--l1agf.xn--p1ai/services/support/filter/?business=fiz&region=74",
    ]
    parser = BusinessSupportParser(filters)
    parser.parse()
