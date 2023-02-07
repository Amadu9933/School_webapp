#!/usr/bin/python3
from datetime import datetime

import uuid

class BaseModel ():
    def __init__(self, id, created_at, updated_at):
        self.created_at = datetime.now()
        self.updated_at = datetime.now()
        self.id = str(uuid.uuid4())

    def __init__(self):
        return f"[{self.__class__.__name__}] ({sef.format}) {self.__dict__}"
    
    def save(self):
        return self.updated_at = datetime.now()

    def to_dict(self):
        def to_dict(self):
        d = self.__dict__.copy()
        d['__class__'] = self.__class__.__name__
        d['created_at'] = self.created_at.isoformat()
        d['updated_at'] = self.updated_at.isoformat()
        return d
    

    