import requests

url = "http://localhost:8080/api/get-data"

response = requests.request("GET", url)

if response.status_code == 200:
    # request was successful
    data = response.json()['data']
    # sorting data by id
    data = sorted(data, key = lambda i: i['id'])
    print("ID","NAME")
    for item in data:
        print(item["id"],item["name"])

else:
    "Something went wrong while making get request"
