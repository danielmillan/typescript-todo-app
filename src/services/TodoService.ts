import Todo from "../database/todos";
import ITodo from "../models/ITodo";

export default class TodoService {
  //------------------>no tengo muy claro como definir el tipo que espera el Promise      
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

  //FindById
  public static findTodoById(id:Object): Promise<string>{
    return new Promise(async(resolve, reject) => {
        try {
            const TodoById = await Todo.findById({_id: id});
            //console.log(TodoById);
            resolve(`${TodoById}`);
        } catch (error: any) {
            reject(error);
        }
    })
}
//Eliminar un registro
public static deleteTodo(id:Object): Promise<string>{
    return new Promise(async(resolve, reject) => {
        try {
            const TodoDeleteById = await Todo.findByIdAndDelete({_id: id});
            console.log(TodoDeleteById);
            resolve(`Tarea  con ${id} eliminada correctamente`);
        } catch (error) {
            reject(error);
        }
    })
}

// Actualizar Tarea
public static editTodo(id: Object, todo:ITodo): Promise<ITodo>{
    return new Promise(async (resolve, reject) => {
        try {
            const editTodo = await Todo.updateOne({_id: id}, todo);
            console.log(editTodo);
            resolve(todo);
        } catch (error) {
            reject (error);
        }
})
}

//UpdateStatus
public static updateStatus(id: Object, todo:ITodo): Promise<ITodo>{
    return new Promise(async (resolve, reject) => {
        try {
            const editStatus = await Todo.updateOne({_id: id}, todo);
            console.log(editStatus);
            resolve(todo);
        } catch (error) {
            reject (error);
        }
})
}
}
