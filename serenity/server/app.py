#!/usr/bin/env python3

from flask import Flask,jsonify,request, make_response
from flask_migrate import Migrate

from models import db,User, Food, Gym, Room

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return 'Welcome to Serenity Sands Motel'



if __name__ == '__main__':
    app.run(port=5555)