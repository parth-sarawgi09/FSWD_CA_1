const express = require('express');
const app = express();
const port = 5000

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to signup page");
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});

