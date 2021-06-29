const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/userDB', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection is successful!'));

//Users Schema
const UsersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number
        },
        address: {
            type: String
        },
        role: {
            type: String
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    }
);

exports.users = mongoose.model('users', UsersSchema);