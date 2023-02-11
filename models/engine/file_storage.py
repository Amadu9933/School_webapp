#!/usr/bin/python3

import json
from models.base_model import BaseModel
from models.user import User

class FileStorage:
    __file_path = 'file.json'
    __objects = {}

    def all(self):
        return FileStorage.__objects

    def new(self, obj):
        key = type(obj).__name__ + '.' + obj.id
        FileStorage.__objects[key] = obj


def save(self):

    '''I  Used 'w' instead of 'a' '''
    with open(FileStorage.__file_path, 'w') as f:
        sdict = {}
        for key, item in FileStorage.__objects.items():
            sdict[key] = item.to_dict()
        json.dump(sdict, f)

def reload(self):
    try:
        with open(FileStorage.__file_path, 'r') as f:
            sdict = json.load(f)
            for key, item in sdict.items():
                if value['__class__'] == 'BaseModel':
                        FileStorage.__objects[key] = BaseModel(**item)
                    elif value['__class__'] == 'User':
                        FileStorage.__objects[key] = User(**item)
                    elif value['__class__'] == 'Place':
                        FileStorage.__objects[key] = Place(**item)
                    elif value['__class__'] == 'State':
                        FileStorage.__objects[key] = State(**item)
                    elif value['__class__'] == 'City':
                        FileStorage.__objects[key] = City(**item)
                    elif value['__class__'] == 'Amenity':
                        FileStorage.__objects[key] = Amenity(**item)
                    elif value['__class__'] == 'Review':
                        FileStorage.__objects[key] = Review(**item)
                
    except FileNotFoundError:
        pass
