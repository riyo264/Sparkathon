import os
import uuid
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from livekit import api

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/getToken")
def get_token():
    name = request.args.get("name", "guest")
    room = request.args.get("room") or f"room-{uuid.uuid4().hex[:10]}"

    token = (
        api.AccessToken(
            os.environ["LIVEKIT_API_KEY"],
            os.environ["LIVEKIT_API_SECRET"],
        )
        .with_identity(name)
        .with_name(name)
        .with_grants(
            api.VideoGrants(
                room_join=True,
                room=room,
            )
        )
    )

    return token.to_jwt()

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5001)),
    )
