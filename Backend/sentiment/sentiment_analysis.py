from flask import Flask, request, jsonify
import json
import requests
import time

# with open('Reviews.json', 'r') as file:
#     data = json.load(file)

# reviews = " ".join([review["comment"] for review in data])

app = Flask(__name__)

API_URL = "https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment"
headers = {
    "Authorization": "Bearer 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"
}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    if response.status_code == 503 and "estimated_time" in response.json():
        wait_time = response.json()["estimated_time"]
        print(f"Model loading. Waiting for {wait_time:.2f} seconds...")
        time.sleep(wait_time + 1)
        return query(payload)  # Retry after delay
    elif response.status_code != 200:
        raise Exception(f"Request failed: {response.status_code} {response.text}")
    return response.json()

@app.route("/api/sentiment", methods=["POST"])
def sentiment():
    try:
        # Expecting: { "reviews": ["Review1", "Review2", ...] }
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
    app.run(debug=True)
