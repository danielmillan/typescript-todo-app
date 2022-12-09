// crear un esquema de usuarios
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        names: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true,
            },
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: mongoose.ObjectId,
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    {
        collection: 'users',
        versionKey: false,
    }
);

const User = mongoose.model('User', UserSchema);

export default User;
