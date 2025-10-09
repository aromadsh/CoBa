from flask import Flask, request, jsonify
from flask_cors import CORS
from kobert_chat import get_kobert_response

app = Flask(__name__)
CORS(app)  # ← CORS 허용!

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "")
    reply = get_kobert_response(user_input)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
