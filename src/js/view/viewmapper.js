import { Project } from '../dataSource/model/projectModel';
import { Todo } from '../dataSource/model/todoModel';
import { getCurrentProjectIndex, setCurrentProjectIndex } from '../repository/repository';

const projectContainer = document.querySelector(".project-container");
const todoContainer = document.querySelector(".todo-container");

/**
 * 
 * @param {Array<Project>} projectList 
 */
export function projectListNameToElementMapper(projectList, isClear = true) {
    if(isClear){
        clearProjectContainer();
    }

    for (let i = 0; i < projectList.length; i++) {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.setAttribute("data-index", i);

        const projectItemContent = document.createElement("div");
        projectItemContent.textContent = projectList[i].projectName;

        projectItem.appendChild(projectItemContent);

        projectItem.addEventListener("click", (e) => {
            todoListToElementMapper(projectList[i], isClear);
            setCurrentProjectIndex(i);
        });

        projectContainer.appendChild(projectItem);
    }
}

/**
 * 
 * @param {Project} project 
 */
function todoListToElementMapper(project, isClear = true) {
    if(isClear){
        clearTodoContainer();
    }
    const todoList = project.getTodoList();

    for (let i = 0; i < todoList.length; i++) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.setAttribute("data-index", i);

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = todoList[i].title;

        const todoCheckbox = document.createElement("input");
        todoCheckbox.setAttribute("type","checkbox");
        todoCheckbox.setAttribute("name","checkbox");
        todoCheckbox.setAttribute("id", "checkbox");
        todoCheckbox.checked = todoList[i].isChecked;

        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoCheckbox);

        todoContainer.appendChild(todoItem);
    }
}

function clearProjectContainer() {
    projectContainer.innerHTML = "";
}

function clearTodoContainer() {
    todoContainer.innerHTML = "";
}