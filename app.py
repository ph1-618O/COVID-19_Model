from models import create_classes
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
from config import database_uri


# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

engine = create_engine(database_uri)
connection = engine.connect()

# 3. Define what to do when a user hits the index route
@app.route("/")
def home():    
    message = "Welcome to my 'Home' page!"   
    return render_template("index.html", message = message)

@app.route("/jan_states_all")
def jan_states_all():
    jan_covid_data = pd.read_sql("SELECT * FROM jan_states_all", con = connection)
    jan_covid_dict= jan_covid_data.to_dict(orient="records")
    return jsonify(jan_covid_dict)

@app.route("/feb_states_all")
def feb_states_all():
    feb_covid_data = pd.read_sql("SELECT * FROM feb_states_all", con = connection)
    feb_covid_dict=feb_covid_data.to_dict(orient="records")
    return jsonify(feb_covid_dict)

@app.route("/mar_states_all")
def mar_states_all():
    mar_covid_data = pd.read_sql("SELECT * FROM mar_states_all", con = connection)
    mar_covid_dict= mar_covid_data.to_dict(orient="records")
    return jsonify(mar_covid_dict)
    

@app.route("/apr_states_all")
def apr_states_all():
    apr_covid_data = pd.read_sql("SELECT * FROM apr_states_all", con = connection)
    apr_covid_dict= apr_covid_data.to_dict(orient="records")
    return jsonify(apr_covid_dict)

@app.route("/may_states_all")
def may_states_all():
    may_covid_data = pd.read_sql("SELECT * FROM may_states_all", con = connection)
    may_covid_dict= may_covid_data.to_dict(orient="records")
    return jsonify(may_covid_dict)
    

@app.route("/jun_states_all")
def jun_states_all():
    jun_covid_data = pd.read_sql("SELECT * FROM jun_states_all", con = connection)
    jun_covid_dict= jun_covid_data.to_dict(orient="records")
    return jsonify(jun_covid_dict)

@app.route("/jul_states_all")
def jul_states_all():
    jul_covid_data = pd.read_sql("SELECT * FROM jul_states_all", con = connection)
    jul_covid_dict= jul_covid_data.to_dict(orient="records")
    return jsonify(jul_covid_dict)

@app.route("/aug_states_all")
def aug_states_all():
    aug_covid_data = pd.read_sql("SELECT * FROM aug_states_all", con = connection)
    aug_covid_dict= aug_covid_data.to_dict(orient="records")
    return jsonify(aug_covid_dict)

@app.route("/sept_states_all")
def sept_states_all():
    sept_covid_data = pd.read_sql("SELECT * FROM sept_states_all", con = connection)
    sept_covid_dict= sept_covid_data.to_dict(orient="records")
    return jsonify(sept_covid_dict)

@app.route("/oct_states_all")
def oct_states_all():
    oct_covid_data = pd.read_sql("SELECT * FROM oct_states_all", con = connection)
    oct_covid_dict= oct_covid_data.to_dict(orient="records")
    return jsonify(oct_covid_dict)

@app.route("/nov_states_all")
def nov_states_all():
    nov_covid_data = pd.read_sql("SELECT * FROM nov_states_all", con = connection)
    nov_covid_dict= nov_covid_data.to_dict(orient="records")
    return jsonify(nov_covid_dict)

@app.route("/dec_states_all")
def dec_states_all():
    dec_covid_data = pd.read_sql("SELECT * FROM dec_states_all", con = connection)
    dec_covid_dict= dec_covid_data.to_dict(orient="records")
    return jsonify(dec_covid_dict)

if __name__ == "__main__":
    app.run(debug=True)