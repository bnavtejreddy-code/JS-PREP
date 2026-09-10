from math_utils import add, subtract, multiply, divide
print("Addition:", add(10, 5))
print("Subtraction:", subtract(10, 5))
print("Multiplication:", multiply(10, 5))
try:
    print("Division:", divide(10, 0))
except ValueError as e:
    print("Error:", e)
print("Division:", divide(10, 5))


#json handling
import json
students = [
    {"name": "Alice", "age": 20, "major": "Computer Science"},
    {"name": "Bob", "age": 22, "major": "Mathematics"},
    {"name": "Charlie", "age": 21, "major": "Physics"}
]

with open("sudent.json","w") as f:
    json.dump(students,f,indent=4)

with open("student.json","r") as f:
    data = json.load(f)
    print(data)

students_json = json.dumps(students, indent=4)

students_list = json.loads(students_json)

students[0]["age"] = 21
with open("sudent.json","w") as f:
    json.dump(students,f,indent=4)

