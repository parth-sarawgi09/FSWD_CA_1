const express = require('express');
const app = express();
const port = 5000

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to signup page");
})

app.post('/signup', (req, res) =>{
    const {username, email, password, dateOfBirth} = req.body;

    if(!username){
        return res.status(400).json({error: "Username cannot be empty"})
    }
    if(!email){
        return res.status(400).json({error: "Email cannot be empty"})
    }
    if(password.length < 8 && password.length > 16){
        return res.status(400).json({error: "Password length should be greater than 8 or less then or equal to 16"})
    }
    if(!dateOfBirth){
        return res.status(400).json({error: "Date of birth cannot be empty"})
    }

    res.status(201).json({
        message:"You have successfully signed up",
        users:{username, email, dateOfBirth}
    })


});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});

