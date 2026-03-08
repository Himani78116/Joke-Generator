from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
import urllib3
import json
import random

load_dotenv()

app = FastAPI()

# CORS middleware (allows React to call this)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/jokes")
async def get_jokes():
    api_key = os.getenv('HUMOR_API_KEY')
    url = f'https://api.humorapi.com/jokes/search?api-key={api_key}&number=6&include-tags=dark,relationship'
    headers = {'content-type': 'application/json'}

    http = urllib3.PoolManager()
    req = http.request('GET', url, headers=headers)
    data = json.loads(req.data.decode('UTF-8'))

    jokes = data['jokes']
    return jokes  # FastAPI auto-converts to JSON

@app.get("/api/joke/random")
async def get_random_joke():
    api_key = os.getenv('HUMOR_API_KEY')
    url = f'https://api.humorapi.com/jokes/search?api-key={api_key}&number=6&include-tags=dark,relationship'
    headers = {'content-type': 'application/json'}

    http = urllib3.PoolManager()
    req = http.request('GET', url, headers=headers)
    data = json.loads(req.data.decode('UTF-8'))

    jokes = data['jokes']
    random_joke = random.choice(jokes)
    return random_joke