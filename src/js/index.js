import '../css/style.css';
import { Project } from './dataSource/model/projectModel';
import { Todo } from './dataSource/model/todoModel';
import { pushProject, getProjects, getProjectAt, replaceProject } from './repository/repository';
import { projectListNameToElementMapper } from './view/viewmapper';
import { getCurrentProjectIndex } from './repository/repository';

/***
 * TODO - 31 Oct 2023
 * 
 * add button to create new todo + form dialog
 * add button to create new project + form dialog
 * add button to delete todo
 * add button to delete project
 * 
 * 
 */

const project = new Project("dummy1", []);
const project2 = new Project("dummy2", []);
const project3 = new Project("dummy3", []);

project.generateRandomNotes(3);
project2.generateRandomNotes(5);
project3.generateRandomNotes(6);

pushProject(project);
pushProject(project2);
pushProject(project3);

projectListNameToElementMapper(getProjects());

const createProjectButton = document.querySelector(".new-project-button");
const createTodoButton = document.querySelector(".new-todo-button");

createTodoButton.addEventListener("click", (e) => {
    const currentProject = getProjectAt(getCurrentProjectIndex());

    currentProject.pushTodo(new Todo(
        "hell", "man", "09/09/1999", 3, "chicken", false
    ));

    replaceProject(getCurrentProjectIndex(), currentProject);
    projectListNameToElementMapper(getProjects());
});