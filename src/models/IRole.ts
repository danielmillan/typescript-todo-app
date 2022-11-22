import mongoose from "mongoose";

export default interface IRole{
    _id?: mongoose.Types.ObjectId;
    name?: string;
    permisions : Array<ERolePermisions>;
}
export enum ERolePermisions{
    CREATE = "CREATE", 
    EDIT = "EDIT", 
    DELETE = "DELETE", 
    SEARCH = "SEARCH",
}