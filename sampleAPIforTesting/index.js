const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const data = {
    data: [{
        id: 1,
        name: "Item 1"
    }, {
        id: 3,
        name: "Item 3"
    }, {
        id: 2,
        name: "Item 2",
    }, {
        id: 4,
        name: "Item 4"
    }]
}

app.get('/api/get-data', (req, res) => {
    res.send(data);
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));