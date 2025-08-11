import requests #pip install requests


import time

def measure_load_time(url):
    try:
        start_time = time.time()
        response = requests.get(url) #- An HTTP request is sent using the GET method to the specified URL.
        end_time = time.time()
        load_time = end_time - start_time
        print(f'Loaded {url} in {load_time:.3f} seconds (Status COde: {response.status_code})')
        return load_time
    except requests.exceptions.RequestException as e:
        print(f'Error loading {url}: {e}')
        return None
    
    # Test with multiple websites
websites = [
    "https://www.google.com",
    "https://www.ynet.co.il",
    "https://www.imdb.com",
    "https://www.microsoft.com",
    "https://www.wikipedia.org"
]

for site in websites:
    measure_load_time(site)

# Loaded https://www.google.com in 1.241 seconds (Status COde: 200)
# Loaded https://www.ynet.co.il in 0.738 seconds (Status COde: 200)
# Loaded https://www.imdb.com in 0.271 seconds (Status COde: 403)
# Loaded https://www.microsoft.com in 0.530 seconds (Status COde: 200)
# Loaded https://www.wikipedia.org in 0.323 seconds (Status COde: 200)