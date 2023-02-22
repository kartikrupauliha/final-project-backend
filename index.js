const express = require("express");
const cors = require("Cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).send("Server is up and running!!");
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});