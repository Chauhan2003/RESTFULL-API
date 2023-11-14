const express = require('express');
const app = express();

let PORT = 3000;

app.use(express.json());

let family = [
    {"id": 1, "name": "Gagan Chauhan"},
    {"id": 2, "name": "Sanjeev Chauhan"},
    {"id": 3, "name": "Neetu Chauhan"},
    {"id": 4, "name": "Ananya Chauhan"},
];

app.get('/', (req, res)=>{
    res.send("Hello, Welcome To RESTFULL API");
})

app.get('/family', (req, res)=>{
    res.json(family);
})

app.listen(PORT, ()=>{
    console.log(`Server is started on PORT: ${PORT}`);
})