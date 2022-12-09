import mongoose from "mongoose";

export default interface ITodo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  date?: Date;
  status?: string;
}

export enum ETodoStatus {
  CREATED = "CREATED",
  EXECUTE = "EXECUTE",
  FINISHED = "FINISHED",
}
