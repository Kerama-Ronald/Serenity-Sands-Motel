#!/usr/bin/env python3

from flask import Flask,jsonify,request, make_response
from flask_migrate import Migrate

from models import db,User, Food, Gym, Room
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
cors = CORS(app)
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

@app.route('/users/<int:id>')
def user_by_id(id):
    user = User.query.filter_by(id=id).first()

    user_dict = user.to_dict()

    response = make_response(
        jsonify(user_dict),
        200
    )
    response.headers["Content-Type"] ="application/json"

    return response

@app.route ('/users', methods = ['POST','DELETE','PATCH'])
def post_users():
    if request.method == 'POST':
        new_user = User(
            name=request.form.get("name"),
            email=request.form.get("email"),
            telephone=request.form.get("telephone")
        )
        db.sessiom.add(new_user)
        db.session.commit()

        user_dict =new_user.to_dict()

        response= make_response(
            jsonify(user_dict),
            201
            

        )
        return response
    

@app.route('/rooms')
def rooms():

    rooms =[]
    for room in Room.query.all():
        room_dict = {
            "id": room.id,
            "number": room.number,
        }
        rooms.append(room_dict)
    response = make_response(
        jsonify(rooms),
        200
    )
    return response



###room data###
@app.route ('/rooms', methods = ['POST','DELETE','PATCH'])
def post_rooms():
    if request.method == 'POST':
        new_room = Room(
            number=request.form.get("number")

        )
        db.session.add(new_room)
        db.session.commit()

        room_dict = new_room.to_dict()

        response = make_response(
            jsonify(room_dict),
            201
        )
        return response
    
@app.route('/rooms/<int:id>', methods =['PATCH','DELETE'])
def room_by_id(id):
    room = Room.query.filter_by(id=id).first()

    if room == None:
        response_body= {
            "message": "This room does not exist in our database. Please try again."
        }
        response = make_response(jsonify(response_body), 404)

        return response
    
    else:
        if request.method == 'PATCH':
            room = Room.query.filter_by(id=id).first()

            for attr in request.form:
                setattr (room, attr, request.form.get(attr)) 

            db.session.add(room)
            db.session.commit()

            room_dict= room.to_dict(),

            response = make_response(
                jsonify(room_dict),
                200
            )

            return response
        
        elif request.method == 'DELETE':
            db.session.delete(room)
            db.session.commit()

            response_body ={
                "delete_successful": True,
                "message": "Room deleted."   
            }
            response = make_response(
                jsonify(response_body),
                200
            )

            return response
    

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