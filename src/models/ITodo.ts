import mongoose from "mongoose";

export default interface ITodo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  date?: Date;
  status?: "CREATED" | "EXECUTE" | "FINISHED" | undefined;
}

export enum ETodoStatus {
  CREATED = "CREATED",
  EXECUTE = "EXECUTE",
  FINISHED = "FINISHED",
}
