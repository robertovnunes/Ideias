const router = require('express').Router();

const user = require('../models/user');

router.get('/', (req, res) => {
    res.send({"username": "teste",
                    "password": "123456"});
});


module.exports = router;