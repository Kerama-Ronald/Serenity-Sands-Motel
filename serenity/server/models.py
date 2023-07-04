from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# add any models you may need.
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    # serialize_rules = ('-foods.room',)
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    # ***PUT CONSTRAINT HERE***
    telephone = db.Column(db.String)
    email = db.Column(db.String)

    def __repr__(self):
        return f'<User {self.id},{self. name},{self.telephone}, {self.email}'


class Room(db.Model,SerializerMixin):
    __tablename__ = 'rooms'

    serialize_rules = ('-foods.room',)

    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    description = db.Column(db.String)

    foods = db.relationship ('Food', backref ='room')
    def __repr__(self):
        return f'<Room{self.id}, {self.number}, {self.description}>'


class Food(db.Model, SerializerMixin):
    __tablename__ = 'foods'

    serialize_rules = ('-foods.pizza',)

    id = db.Column(db.Integer, primary_key=True)
    meal = db.Column(db.String)
    price = db.Column(db.Integer)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'))

    def __repr__(self):
        return f'<Food {self.id}, {self.category}, {self.price}, {self.room_id}>'
    

class Gym(db.Model, SerializerMixin):
    __tablename__ = 'gyms'

    # serialize_rules = ('-foods.pizza',)
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String)
    price = db.Column(db.Integer)

    def __repr__(self):
        return f'<Gym {self.id}, {self.category},{self.price}>'
    
