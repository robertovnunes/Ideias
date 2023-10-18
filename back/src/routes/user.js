const router = require('express').Router();

const User = require('../models/user');

router.get('/', (req, res) => {
    res.send({
        "username": "teste",
        "password": "123456"
    });
});

router.post('/', async (req, res) => {
    const {name, email, username, roles, password} = req.body;
    const user = {
        name,
        email,
        username,
        roles,
        password
    };
    try {
        await User.create(user);
        res.status(201).json({message: "User created successfully", user});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;