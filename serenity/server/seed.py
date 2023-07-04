from random import randint , choice as rc

from faker import Faker

from app import app
from models import db,User, Food, Gym, Room

meals = ['Breakfast', 'Lunch', 'Dinner']

categories = ['V.I.P', 'V.V.I.P','Regular']

fake = Faker()

with app.app_context():

    User.query.delete()
    Food.query.delete()
    Gym.query.delete()
    Room.query.delete()
   

    users = []
    for i in range(50):
        u = User(
            name=fake.name(),
            telephone =  fake.phone_number(),
            email = fake.email(), )
        users.append(u)

    db.session.add_all(users)

    rooms =[]
    for u in users:
        for i in range(20):
            r = Room(
            user= u,
            description = fake.sentence(),)
        rooms.append(r)

    db.session.add_all(rooms)

    

    foods = []
    

    for i in range(30):
        f = Food(
            meal =rc(meals),
            price = randint(50, 100),
                  )
        foods.append(f)

    db.session.add_all(foods)


    gyms = []

    for i in range(15):
        g = Gym(
            category = rc(categories),
            price = randint(20,50),)
        gyms.append(g)

        db.session.add_all(gyms)

    rooms=[]
    


    db.session.commit()