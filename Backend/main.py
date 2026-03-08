import os
import random
from dotenv import load_dotenv
import urllib3
import json
import pandas as pd

load_dotenv()

url = 'https://api.humorapi.com/jokes/search?api-key=' + os.getenv('HUMOR_API_KEY') + '&number=6&include-tags=dark,relationship'
headers = {'content-type': 'application/json'}

http = urllib3.PoolManager()
req = http.request('GET', url, headers= headers)

#print(type(req))


#print(req.data)

joke = json.loads(req.data.decode('UTF-8'))
#print(joke)

#print(type(joke))

#print(joke.keys())

newj = joke['jokes']

df = pd.DataFrame(newj)
print(df)

# Access a random joke
random_joke = random.choice(newj)
print("\nRandom joke:")
print(random_joke)