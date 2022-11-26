from flask import Flask
import json 
from myTempDB import *  
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return json.dumps(dictionary)