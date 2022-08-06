import requests as req

headers = {'Authorization': "mooa8ny0mm9y1vw3963sqflkeu1hlpvvewmo5ojt"}

response = req.get("https://api.json-generator.com/templates/bJlLKc5wiAQ9/data",headers=headers)

print(response.status_code)