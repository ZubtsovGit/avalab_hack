# scripts/crawl_data.py
import requests
from bs4 import BeautifulSoup
import json
import os

DATA_DIR = 'data/raw'

def crawl_measures():
    sources = [
        'мсп.рф',
    ]
    measures = []

    for url in sources:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Пример парсинга, адаптируйте под конкретный источник
        for item in soup.select('.measure-item'):
            title = item.select_one('.title').get_text(strip=True)
            description = item.select_one('.description').get_text(strip=True)
            link = item.select_one('a')['href']
            region = item.select_one('.region').get_text(strip=True)
            industry = item.select_one('.industry').get_text(strip=True)
            company_size = item.select_one('.company-size').get_text(strip=True)

            measures.append({
                'title': title,
                'description': description,
                'link': link,
                'region': region,
                'industry': industry,
                'company_size': company_size
            })

    os.makedirs(DATA_DIR, exist_ok=True)
    with open(os.path.join(DATA_DIR, 'measures.json'), 'w', encoding='utf-8') as f:
        json.dump(measures, f, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    crawl_measures()
