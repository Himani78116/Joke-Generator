from fastapi import FastAPI
from pydantic import BaseModel
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
class CategoryRequest(BaseModel):
    category: str

@app.post("/jokes")
def get_joke(data: CategoryRequest):
    selected_category = data.category

    return {
        "message": f"Category received: {selected_category}"
    }

@app.get("/api/joke/random")
async def get_random_joke(category: str):
    api_key = os.getenv('HUMOR_API_KEY')
    url = f'https://api.humorapi.com/jokes/search?api-key={api_key}&number=6&include-tags={category}'
    headers = {'content-type': 'application/json'}

    http = urllib3.PoolManager()
    req = http.request('GET', url, headers=headers)
    data = json.loads(req.data.decode('UTF-8'))

    jokes = data['jokes']
    random_joke = random.choice(jokes)
    return random_joke

@app.get("/api/memes/random")
async def get_random_meme():
    try:
        api_key = os.getenv('HUMOR_API_KEY')
        url = f'https://api.humorapi.com/memes/search?api-key={api_key}'

        http = urllib3.PoolManager()
        response = http.request('GET', url)
        data = json.loads(response.data.decode('UTF-8'))

        memes = data.get("memes", [])

        if not memes:
            return {"error": "No memes found"}
        
        meme = memes[0]

        return {
            "title": meme.get("description"),
            "image_url": meme.get("url")
        }
    except Exception as e:
        return {"error": str(e)}