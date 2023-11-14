const express = require('express')
const app = express();
const dotenv = require('dotenv')
const dbConnect = require('./db/dbConnect')

dotenv.config();

const PORT = process.env.PORT || 8080;

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

dbConnect();

app.listen(PORT, ()=>{
    console.log(`Server is started on PORT: ${PORT}`);
})