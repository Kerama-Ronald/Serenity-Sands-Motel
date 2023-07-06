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


###users data###
@app.route('/users')
def users():
    users= []
    
    
    for user in User.query.all():
        user_dict=({
            'id': user.id,
            'name': user.name,
            'telephone': user.telephone,
            'email': user.email
        })
        users.append(user_dict)
    response= make_response(
        jsonify(users),
        200
    )
    return response




###room data###
@app.route('/rooms')
def get_rooms():
    rooms = Room.query.all()
    room_data = []
    for room in rooms:
        room_data.append({
            'id': room.id,
            'number': room.number,
            'description': room.description,
            'user_id': room.user_id,
            'gym_id': room.gym_id
        })
    return jsonify(room_data)

###food data###
@app.route('/foods')
def get_foods():
    foods = Food.query.all()
    food_data = []
    for food in foods:
        food_data.append({
            'id': food.id,
            'meal': food.meal,
            'price': food.price,
            'room_id': food.room_id
        })
    return jsonify(food_data)

###gym data###
@app.route('/gyms')
def get_gyms():
    gyms = Gym.query.all()
    gym_data = []
    for gym in gyms:
        gym_data.append({
            'id': gym.id,
            'category': gym.category,
            'price': gym.price
        })
    return jsonify(gym_data)




if __name__ == '__main__':
    app.run(port=5555)