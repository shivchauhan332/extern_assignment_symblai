const request = require('request');

request.get({
    url: "http://localhost:8080/api/get-data",
    json: true
}, (err, response, body) => {
    body.data.sort((a,b)=>{
        return a.id-b.id;
    })
    console.log(body.data)
});