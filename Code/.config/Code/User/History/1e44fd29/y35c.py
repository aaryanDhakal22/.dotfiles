import requests as req

headers = {'authorization': "mooa8ny0mm9y1vw3963sqflkeu1hlpvvewmo5ojt",'user-agent': "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Mobile Safari/537.36"}

response = req.get("https://api.json-generator.com/templates/bJlLKc5wiAQ9/data",headers=headers)

print(response.status_code)