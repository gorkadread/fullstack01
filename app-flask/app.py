import requests
from flask import Flask, jsonify, make_response, request

app = Flask(__name__)


@app.route("/gettransactions")
def gettransactions():
    request_trans = requests.get(
        "https://infra.devskills.app/api/transaction-management/transactions"
    )

    return jsonify(request_trans)


@app.route("/transaction/<string:transaction_id>/<int:transaction_sum>")
def transaction(transaction_id=None, transaction_sum=None):
    if not transaction_id:
        message = jsonify(message="fail")
        return make_response(message, 400)
    elif not transaction_sum:
        message = jsonify(message="fail")
        return make_response(message, 400)
    # Handle if sum is not a value here
    # Here we should send the transaction to the api
    message = jsonify(message="success")
    return make_response(message, 200)


@app.route("/ping")
def hello_world():
    hello = {"ping": "pong", "really": True}
    return jsonify(hello)


if __name__ == "__main__":
    app.run()
