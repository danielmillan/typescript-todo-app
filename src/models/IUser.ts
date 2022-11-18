import mongoose from 'mongoose';

export default interface IUser {
    _id?: mongoose.Types.ObjectId;
    names: string;
    lastName: string;
    email: string;
    password: string;
    isDeleted: Boolean;
}
