import Todo from "../database/todos";
import ITodo, { ETodoStatus } from "../models/ITodo";

export default class TodoService {
  public static createTodo(todo: ITodo): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await Todo.create(todo);
        resolve("Tarea creada correctamente");
      } catch (error: any) {
        reject(error);
      }
    });
  }

  public static getTodos(): Promise<ITodo[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const listTodos = await Todo.find({ isDeleted: false });
        resolve(listTodos);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  //FindById
  public static findTodoById(id: Object): Promise<ITodo | null> {
    return new Promise(async (resolve, reject) => {
      try {
        const TodoById = await Todo.findById({ _id: id }, { isDeleted: false }).lean();
        resolve(TodoById);
      } catch (error: any) {
        reject(error);
      }
    })
  }

  //Eliminar un registro
  public static deleteTodo(id: Object): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await Todo.updateOne({ _id: id }, { isDeleted: true });
        resolve(`Tarea con el id ${id} eliminada correctamente`);
      } catch (error) {
        reject(error);
      }
    })
  }

  // Actualizar Tarea
  public static editTodo(id: Object, todo: ITodo): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await Todo.updateOne({ _id: id }, todo);
        resolve('Tarea actualizada correctamente.');
      } catch (error) {
        reject(error);
      }
    })
  }

  //UpdateStatus
  public static updateStatus(id: Object, status: ETodoStatus): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await Todo.updateOne({ _id: id }, { status });
        resolve('Tarea actualizada correctamente.');
      } catch (error) {
        reject(error);
      }
    })
  }
}
