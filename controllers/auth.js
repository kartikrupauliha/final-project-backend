const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const temporaryData = [{
        name: "Kartik",
        email: "kartik@gmail.com",
        password: "rameshsuresh",
    },
    {
        name: "Kunal",
        email: "kunal@gmail.com",
        password: "rameshsuresh",
    },
    {
        name: "Nikhil",
        email: "Nikhil@gmail.com",
        password: "rameshsuresh",
    },
    {
        name: "Harsh",
        email: "harsh@gmail.com",
        password: "rameshsuresh",
    },
]



exports.signUp = (req, res) => {

    const {
        name,
        email,
        password
    } = req.body;

    const isValid = temporaryData.findIndex((ele) => (ele.email === email));

    if (isValid !== -1) {
        res.status(400).json({
            error: "User already exists.",
        });
    }

    //NOTE Generate token
    const token = jwt.sign({
            email: email,
        },
        process.env.SECRET_KEY
    );


    //NOTE Hash password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: "Internal server error.",
            });
        }
        const user = {
            name,
            email,
            password: hash,
        }

        temporaryData.push(user);

        console.log(temporaryData);
        res.status(200).json({
            message: "User added successfully to database",
            token: token,
        });

    });


    //NOTE send response to user along with the token


    // res.send("sab sahi chala");
};

exports.signIn = (req, res) => {
    //TODO complete signin
};