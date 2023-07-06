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
   
    
    gyms = []

    for i in range(15):
        g = Gym(
            category = rc(categories),
            price = randint(20,50),)
        gyms.append(g)

        db.session.add_all(gyms)


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
        for i in range (1):
            r = Room(
                user = u,
                number = randint(1,20),
                description = fake.sentence(),
                gym= rc(gyms),
            )
            rooms.append(r)

    db.session.add_all(rooms)

    for g in gyms:
        r = rc(rooms)
        g.room = r
        rooms.remove(r)
    db.session.commit()
    

    

    foods = []
    

    for i in range(30):
        f = Food(
            meal =rc(meals),
            price = randint(50, 100),
            
                  )
        foods.append(f)

    db.session.add_all(foods)
    db.session.commit()