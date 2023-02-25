#!/bin/python3.10
import cgitb
import json

cgitb.enable()

print("content-type:application/json\r\n")

data = {'sender': 'Alice', 'receiver': 'Bob', 'message': 'We did it!'}

print(json.dumps(data))
