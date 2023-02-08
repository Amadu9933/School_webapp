#!/usr/bin/python

import uuid
from datetime import datetime


class BaseModel:
    '''
    def __init__(self, id, created_at, updated_at):
        self.id = str(uuid.uuid4())
        created_at = datetime.now()
        updated_at = datetime.now()'''
    
    __init__(self, *args, **kwargs):
        if kwargs:
            for key, item in kwargs.items():
                if key != "__class__":
                    setattr(self, key, value)
                    
        if key in ["created_at", "updated_at"]:
            setattr(self, key, datetime.strptime(value, '%Y-%m-%dT%H:%M:%S.%f'))

        else:
            self.id = self.id = str(uuid.uuid4())
            self.created_at = datetime.now()
            self.updated_at = datetime.now()
            

    
    def __str__(self):
        return "[{}] ({}) {}".format(self.__class__.__name__, self.id, self.__dict__)

    save(self):
        created_at = datetime.datetime.now()


    to_dict(self):
        myDict = self.__dict__.copy()
        myDict["__class__"] = self.__class__.__name__
        myDict["created_at"] = self.created_at.isoformat()
        myDict["updated_at"] = self.updated_at.isoformat()
        return dictionary