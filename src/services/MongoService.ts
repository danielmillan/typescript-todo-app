import config from "../config";
import mongoose from "mongoose";

export default class MongoService {
  public static async connect() {
    let conn = null;
    if (conn === null) {
      conn = mongoose
        .connect(config.databaseString, {
          serverSelectionTimeoutMS: 5000,
        })
        .then(() => mongoose);
      console.log("database connected");
    }
    return conn;
  }
}
