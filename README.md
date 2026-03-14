# Joke Generator

A simple app that fetches jokes from the Humor API.

## Setup

### Backend
- Install dependencies: `pip install -r Backend/requirements.txt`
- Set up your `.env` file with `HUMOR_API_KEY=your_key_here`
- Run: `uvicorn Backend.app:app --reload`

### Frontend
Navigate to Frontend/
Run npm install to install React, Vite, etc.
Run npm run dev to start the development server (typically on http://localhost:5173)
Note to ensure the backend is running on port 8000 for the API calls.

## Usage
- Start the backend, then open the frontend in a browser.
