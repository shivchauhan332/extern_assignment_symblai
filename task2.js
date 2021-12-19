url = "http://localhost:8080/api/get-data";
fetch(url).then((response) => {
    response.json().then((data) => {
        data.data.sort((a,b) => {
            return a.id - b.id
        })
        console.log(data.data)
    })
})