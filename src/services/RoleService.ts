import IRole from "../models/IRole";
import Role from "../database/roles";

export default class RoleService {
  public static createRole(role: IRole): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(role);
        await Role.create(role);
        resolve('Role creado correctamente')
      } catch (error) {
        reject(error);
      }
    })
  }

  public static getRoles(): Promise<IRole[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const listUsers = await Role.find({ isDeleted: false });
        resolve(listUsers);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  public static deleteRole(id: Object): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await Role.updateOne({ _id: id }, { isDeleted: true });
        resolve(`Role con el id ${id} eliminado correctamente`);
      } catch (error) {
        reject(error);
      }
    })
  }

  public static editUser(id: Object, role: IRole): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await Role.updateOne({ _id: id }, role);
        resolve('Role actualizado correctamente.');
      } catch (error) {
        reject(error);
      }
    })
  }
}