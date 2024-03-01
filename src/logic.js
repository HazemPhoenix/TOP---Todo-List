class Project {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

class Todo {
  constructor(title, description, dueDate, priority = 1, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  increasePriority() {
    this.priority++;
  }

  decreasePriority() {
    this.priority--;
  }
}

export { Todo, Project };
