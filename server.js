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

        // *******************************************************************
        // Create new user in database :)

        const user1 = new UserData({
            email: "abc123@gmail.com",
            password: "helloabc2003"
        });

        // await user1.save();
        // console.log("User data is inserted");

        // *******************************************************************

        // *******************************************************************
        // find users with given credential in database :)

        // await UserData.find({email: "abc123@gmail.com"})
        //     .then((users)=>{
        //         console.log("Users with this credential in database are: ", users);
        //     })
        //     .catch((err)=>{
        //         console.error(err);
        //     })

        // find all users in database :)

        // await UserData.find()
        //     .then((users)=>{
        //         console.log("All users in database are: ", users);
        //     })
        //     .catch((err)=>{
        //         console.error(err);
        //     })

        // *******************************************************************

        // *******************************************************************
        // updateOne user in database :)

        // await UserData.updateOne({email: "gagan123@gmail.com"}, {password: "hellogagan"})
        //     .then(()=>{
        //         console.log("password updated");
        //     })
        //     .catch((err)=>{
        //         console.error(err);
        //     })

        // *******************************************************************

        // *******************************************************************
        // deleteOne user in database :)

        // await UserData.deleteOne({email: "gagan123@gmail.com"})
        //     .then(()=>{
        //         console.log("user deleted");
        //     })
        //     .catch((err)=>{
        //         console.error(err);
        //     })

        // *******************************************************************

        app.listen(PORT, () => {
            console.log(`Server is started on PORT: ${PORT}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

startServer();
