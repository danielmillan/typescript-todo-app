import Todo from "../database/todos";
import ITodo from "../models/ITodo";

export default class TodoService {
  public static createTodo(todo: ITodo): Promise<String> {
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
        const listTodos = await Todo.find();
        resolve(listTodos);
      } catch (error: any) {
        reject(error);
      }
    });
  }

  // crear metodos para eliminar, actualizar, cambiar estado de una tarea y buscar por un id
}
