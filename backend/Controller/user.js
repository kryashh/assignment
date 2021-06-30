const schema = require('../Model/Schema');

exports.login = async (req, res) => {

    try {
        const user = await schema.users.find({ username: req.body.username, password: req.body.password },
            { P_id: 0, __v: 0 })
        console.log(user);
        if (user.length > 0) {
            res.status(200).json({
                status: "Success",
                data: {
                    username: user[0].username,
                    phoneNumber: user[0].phoneNumber,
                    address: user[0].address
                }
            });
        } else {
            res.status(400).json({
                status: "Error",
                message: "Username or password is incorrect!"
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.users = async (req, res) => {

    try {
        const user = await schema.users.find({},
            { _id: 0, __v: 0, password: 0 })
        console.log(user);
        if (user.length > 0) {
            res.status(200).json({
                status: "Success",
                data: user
            });
        } else {
            res.status(400).json({
                status: "Error",
                message: "Could not get the users!"
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.addUser = async (req, res) => {
    try {
        const user = await schema.users.create({
            username: req.body.username, password: req.body.password,
            phoneNumber: req.body.phoneNumber, address: req.body.address
        })
        console.log("User ",user);
        if (user) {
            res.status(200).json({
                status: "Success",
                data: {
                    username: user[0].username,
                    phoneNumber: user[0].phoneNumber,
                    address: user[0].address
                }
            });
        } else {
            res.status(400).json({
                status: "Error",
                message: "Could not create users"
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}