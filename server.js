const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnect = require('./db/dbConnect');
const UserData = require('./db/userModel');

dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(express.json());

const startServer = async () => {
    try {
        await dbConnect();

        let family = [
            {"id": 1, "name": "Gagan Chauhan"},
            {"id": 2, "name": "Sanjeev Chauhan"},
            {"id": 3, "name": "Neetu Chauhan"},
            {"id": 4, "name": "Ananya Chauhan"},
        ];

        app.get('/', (req, res) => {
            res.send("Hello, Welcome To RESTFULL API");
        });

        app.get('/family', (req, res) => {
            res.json(family);
        });

        const user1 = new UserData({
            email: "gagan123@gmail.com",
            password: "password"
        });

        await user1.save();
        console.log("User data is inserted");

        app.listen(PORT, () => {
            console.log(`Server is started on PORT: ${PORT}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

startServer();
