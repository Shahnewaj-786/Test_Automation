import json

directory = "F:\\Projects\\Test Automation\\Road to SDET (Advance Automation)\\Python\\fileRead\\User_info.json"

with open(directory, 'r') as json_file:
    read_json = json.load(json_file)

    print(read_json['id'], read_json['name'], read_json['address'])

    read_json['id'] = input("Enter a new id: ")
    read_json['name'] = input("Enter a new name: ")
    read_json['address'] = input("Enter a new address: ")

    output_directory = open(directory, 'w')
    json.dump(read_json , output_directory)