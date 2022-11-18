import User from "../database/user";
import IUser from "../models/IUser";

export default class UserService {
  public static createUser(user: IUser): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await User.create(user);
        resolve("Usuario creado correctamente");
      } catch (error: any) {
        reject(error);
      }
    });
  }

  public static getUsers(): Promise<IUser[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const listUsers = await User.find({ isDeleted: false });
        resolve(listUsers);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  //FindById
  public static findUserById(id: Object): Promise<IUser | null> {
    return new Promise(async (resolve, reject) => {
      try {
        const UserById = await User.findById({ _id: id }, { isDeleted: false }).lean();
        resolve(UserById);
      } catch (error: any) {
        reject(error);
      }
    })
  }

  //Eliminar un registro
  public static deleteUser(id: Object): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await User.updateOne({ _id: id }, { isDeleted: true });
        resolve(`Usuario con el id ${id} eliminado correctamente`);
      } catch (error) {
        reject(error);
      }
    })
  }

  // Actualizar Usuario
  public static editUser(id: Object, user: IUser): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await User.updateOne({ _id: id }, user);
        resolve('Usuario actualizada correctamente.');
      } catch (error) {
        reject(error);
      }
    })
  }
}
