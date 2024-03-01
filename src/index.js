import { Todo, Project } from "./logic";
import { format } from "date-fns";

const title = document.querySelector("#title");
const description = document.querySelector("#desc");
const date = document.querySelector("#date");
const priority = document.querySelector("#prio");
const addTodoBtn = document.querySelector("#addTodoBtn");
const projectName = document.querySelector("#projName");
const createProjectBtn = document.querySelector("#createProjectBtn");

const projects = [];
let currentProject = new Project();

createProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    projects.every((project) => {
      project.name !== projectName.value;
    })
  ) {
    const project = new Project(projectName.value);
    currentProject = project;
    projects.push(project);
  } else {
    const filtered = projects.filter((project) => {
      project.name == projectName.value;
    });
    currentProject = filtered[0];
  }
});

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const todo = new Todo(
    title.value,
    description.value,
    date.value,
    priority.value,
    currentProject
  );
  currentProject.addTodo(todo);
  console.log(todo);
});
