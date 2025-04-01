export class TodoList {
    constructor() {
      this.todos = [];
      this.nextId = 1;
    }
  
    add(task) {
      const newTodo = {
        id: this.nextId++,
        task,
        completed: false,
        createdAt: new Date().toISOString()
      };
      this.todos.push(newTodo);
      return newTodo;
    }
  
    getAll() {
      return this.todos;
    }
  
    getById(id) {
      return this.todos.find(todo => todo.id === Number(id));
    }
  
    update(id, updates) {
      const todo = this.getById(id);
      if (todo) {
        Object.assign(todo, updates);
        return true;
      }
      return false;
    }
  
    delete(id) {
      const index = this.todos.findIndex(todo => todo.id === Number(id));
      if (index !== -1) {
        this.todos.splice(index, 1);
        return true;
      }
      return false;
    }
  }