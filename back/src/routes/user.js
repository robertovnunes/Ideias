const router = require('express').Router();

const User = require('../models/user');

router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        console.log("GET /user OK 200");
        res.status(200).json(users);
    } catch (e){
        res.status(500).json({message: "Internal server error"});
    }
});

router.get('/:username', async (req, res) => {
    try{
        let user = await User.findOne({username: req.params.username});
        if(!user){
            user = await User.findOne({email: req.params.username});
            if (!user) {
                console.log("GET /user/"+req.params.username.toString()+" ERROR 422");
                res.status(422).json({message: "User not found"});
                return;
            }
        }
        console.log("GET /user/"+req.params.username.toString()+" OK 200");
        res.status(200).json({message: "User found", data: user});
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        res.status(200).json(user);
        console.log("GET /user/"+id+" OK 200");
    }catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
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
    console.log("POST /user");
    try {
        await User.create(user);
        res.status(201).json({message: "User created successfully", user});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Internal server error"});
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const {name, email, username, roles, password} = req.body;
    const user = {
        name,
        email,
        username,
        roles,
        password
    };
    console.log("PATCH /user/"+id);
    try {
        const updUser =  await User.findByIdAndUpdate(id, user);

        if (updUser.matchedCount === 0) {
            res.status(422).json({message: "User not found"});
            return;
        }
        res.status(200).json({message: "User updated successfully", user});
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log("DELETE /user/"+id);
    try {
        const delUser = await User.findByIdAndDelete(id);
        if(!delUser){
            res.status(422).json({message: "User not found"});
            return;
        }
        res.status(200).json({message: "User deleted successfully"});
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;