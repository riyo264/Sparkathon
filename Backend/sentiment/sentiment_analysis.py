from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import requests
import time
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

API_URL = "https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment"
headers = {
    "Authorization": f"Bearer {os.getenv('HF_TOKEN')}"
}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    if response.status_code == 503 and "estimated_time" in response.json():
        wait_time = response.json()["estimated_time"]
        print(f"Model loading. Waiting for {wait_time:.2f} seconds...")
        time.sleep(wait_time + 1)
        return query(payload)
    elif response.status_code != 200:
        raise Exception(f"Request failed: {response.status_code} {response.text}")
    return response.json()

@app.route("/api/sentiment", methods=["POST"])
def sentiment():
    if request.method == "OPTIONS":
        return jsonify({}), 200  # CORS preflight

    try:
        reviews = request.json.get("reviews", [])
        if not reviews:
            return jsonify({"error": "No reviews provided"}), 400

        combined = " ".join(reviews)
        result = query({"inputs": combined})

        if isinstance(result, list) and isinstance(result[0], list):
            top_label = max(result[0], key=lambda x: x['score'])['label']
            return jsonify({"sentiment": top_label})
        else:
            return jsonify({"error": "Unexpected Hugging Face response", "details": result}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8000)
