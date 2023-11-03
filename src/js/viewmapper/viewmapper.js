import { Project } from '../dataSource/model/projectModel';
import { Todo } from '../dataSource/model/todoModel';
import { createTodoFormDialog } from './dialogcreator';
import { getCurrentProjectIndex, setCurrentProjectIndex } from '../repository/repository';
import { pushProject, getProjects, getProjectAt, replaceProject, removeProjectAt } from '../repository/repository';

const projectContainer = document.querySelector(".project-container");
const todoContainer = document.querySelector(".todo-container");

const mainContent = document.querySelector("#main-content");

export function initializeView() {
    setupGlobalListeners();
    updateViewState();
}

function updateViewState() {
    updateCreateTodoButtonViewState();
    projectListNameToElementMapper(getProjects());
}

function updateCreateTodoButtonViewState() {
    const createTodoButton = document.querySelector(".new-todo-button");
    if(getProjects().length > 0) {
        createTodoButton.style.display = "flex";
    } else {
        createTodoButton.style.display = "none";
    }
}

function setupGlobalListeners() {
    const createProjectButton = document.querySelector(".new-project-button");
    const createTodoButton = document.querySelector(".new-todo-button");

    createProjectButton.addEventListener("click", (e) => {
        const newProject = new Project("test");
        newProject.generateRandomNotes(3);
        pushProject(newProject);
        updateViewState();
    })

    createTodoButton.addEventListener("click", (e) => {
        /* const currentProject = Object.assign({}, getProjectAt(getCurrentProjectIndex()));
        const isAvailable = getCurrentProjectIndex() > -1;

        if (isAvailable) {
            currentProject.pushTodo(new Todo("Hello", "World", "08/08/1999", 2, "Lol", false));

            replaceProject(getCurrentProjectIndex(), currentProject);
            updateViewState();
        } */

        mainContent.prepend(createTodoFormDialog());
    });
}

function handleCurrentIndexShiftOnRemove(index, arrayLength) {
    const currentIndex = getCurrentProjectIndex();
    if (arrayLength > 0 && getCurrentProjectIndex() === index) {
        setCurrentProjectIndex(0);
    } else if (getProjects().length <= 0) {
        setCurrentProjectIndex(-1);
        clearTodoContainer();
    } else if (currentIndex > index) {
        setCurrentProjectIndex(currentIndex - 1);
    }
}

/**
 * 
 * @param {Array<Project>} projectList 
 */
export function projectListNameToElementMapper(projectList) {
    //console.log(`project count: ${projectList.length}`);
    clearProjectContainer();

    if (projectList.length <= 0) {
        return;
    }

    for (let i = 0; i < projectList.length; i++) {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.setAttribute("data-index", i);

        const projectDeleteIcon = document.createElement("div");
        projectDeleteIcon.classList.add("project-delete-icon");
        projectDeleteIcon.addEventListener("click", (e) => {
            const isAvailable = getProjects().length > 0;

            if (isAvailable) {
                removeProjectAt(i);

                handleCurrentIndexShiftOnRemove(i, getProjects().length);
                updateViewState();
            }
            e.stopPropagation();
        });

        const projectItemContent = document.createElement("div");
        projectItemContent.classList.add("project-title");
        projectItemContent.textContent = projectList[i].projectName;

        projectItem.appendChild(projectDeleteIcon);
        projectItem.appendChild(projectItemContent);

        if (getCurrentProjectIndex() === i) {
            todoListToElementMapper(projectList[i]);
        }

        projectItem.addEventListener("click", (e) => {
            todoListToElementMapper(projectList[i]);
            setCurrentProjectIndex(i);
        });

        projectContainer.appendChild(projectItem);
    }
}

/**
 * 
 * @param {Project} project 
 */
function todoListToElementMapper(project) {
    const todoList = project.getTodoList();
    clearTodoContainer();

    if (todoList.length <= 0) {
        return;
    }

    for (let i = 0; i < todoList.length; i++) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.setAttribute("data-index", i);

        const todoDeleteIcon = document.createElement("div");
        todoDeleteIcon.classList.add("todo-delete-icon");
        todoDeleteIcon.addEventListener("click", (e) => {
            const currentProject = Object.assign({}, getProjectAt(getCurrentProjectIndex()));
            const isAvailable = currentProject.getTodoList().length > 0;

            if (isAvailable) {
                currentProject.removeTodoAt(i);

                replaceProject(getCurrentProjectIndex(), currentProject);
                updateViewState();
            }
            e.stopPropagation();
        });

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = todoList[i].title;

        const todoCheckbox = document.createElement("input");
        todoCheckbox.setAttribute("type", "checkbox");
        todoCheckbox.setAttribute("name", "checkbox");
        todoCheckbox.setAttribute("id", "checkbox");
        todoCheckbox.checked = todoList[i].isChecked;
        todoCheckbox.addEventListener("change", (e) => {
            const currentProject = Object.assign({}, getProjectAt(getCurrentProjectIndex()));
            const isAvailable = getCurrentProjectIndex() > -1;

            if (isAvailable) {
                const tempTodo = currentProject.getTodoList().slice()[i];
                tempTodo.isChecked = e.target.checked;
                currentProject.replaceTodo(i, tempTodo);

                replaceProject(getCurrentProjectIndex(), currentProject);
                updateViewState();
            }
        });

        todoItem.appendChild(todoDeleteIcon);
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