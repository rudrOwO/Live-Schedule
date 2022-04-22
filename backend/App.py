from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

user = {
    "data": [
        {
            "name": "1/6/2019",
            "email": "23",
            "password": "16",
        },


    ]
}


@app.route("/user", methods=['GET', 'POST'])
def method():
    global user
    response = jsonify([user])

    return response


@app.route("/", methods=['GET', 'POST'])
def hello_world():

    return render_template('index.html')


if __name__ == '__main__':
    app.debug = True
    app.run(port=4000)
