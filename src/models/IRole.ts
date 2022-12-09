import mongoose from "mongoose";

export default interface IRole {
    _id?: mongoose.Types.ObjectId;
    name: string;
    permisions: string[];
    isDeleted?: boolean;
}

export enum ERolePermisions {
    CREATE = "CREATE",
    EDIT = "EDIT",
    DELETE = "DELETE",
    SEARCH = "SEARCH",
}
