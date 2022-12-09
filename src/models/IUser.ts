import mongoose from 'mongoose';

export default interface IUser {
    _id?: mongoose.Types.ObjectId;
    names: string;
    lastName: string;
    email: string;
    password: string;
    role: mongoose.Types.ObjectId;
    isDeleted: Boolean;
}
