import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import pandas as pd
import psycopg2
#from config import database_uri


# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route("/")
def home():    
    message = "Welcome to my 'Home' page!"   
    return render_template("index.html", message = message)

if __name__ == "__main__":
    app.run(debug=True)