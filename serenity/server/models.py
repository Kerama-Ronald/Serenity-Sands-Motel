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

    serialize_rules = ('-rooms.user',)
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    telephone = db.Column(db.String(10))
    email = db.Column(db.String)
    rooms = db.relationship ('Room', backref= 'user')

    def __repr__(self):
        return f'<User {self.id},{self. name},{self.telephone}, {self.email}'


class Room(db.Model,SerializerMixin):
    __tablename__ = 'rooms'

    serialize_rules = ('-user.rooms', '-gym.rooms',)

    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    description = db.Column(db.String)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'))
    gym_id = db.Column(db.Integer, db.ForeignKey('gyms.id'))
    foods = db.relationship ('Food', backref ='room')
    
    def __repr__(self):
        return f'<Room{self.id}, {self.number}, {self.description}>'


class Food(db.Model, SerializerMixin):
    __tablename__ = 'foods'

    serialize_rules = ('-room.foods',)

    id = db.Column(db.Integer, primary_key=True)
    meal = db.Column(db.String)
    price = db.Column(db.Integer)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'))

    def __repr__(self):
        return f'<Food {self.id}, {self.category}, {self.price}, {self.room_id}>'
    

class Gym(db.Model, SerializerMixin):
    __tablename__ = 'gyms'

    serialize_rules = ('-rooms.gym',)
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String)
    price = db.Column(db.Integer)
    rooms = db.relationship ('Room', backref ='gym')


    def __repr__(self):
        return f'<Gym {self.id}, {self.category},{self.price}>'
    
