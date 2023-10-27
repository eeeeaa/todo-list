import '../css/style.css';
import { Project } from './dataSource/model/projectModel';
import { pushProject, getProjects, popProject } from './repository/repository';

const project = new Project("dummy1", []);
const project2 = new Project("dummy2", []);
const project3 = new Project("dummy3", []);

project.generateRandomNotes(3);
project2.generateRandomNotes(5);
project3.generateRandomNotes(6);

pushProject(project);
pushProject(project2);
pushProject(project3);

console.log(project.getTodoList());
console.log(project2.getTodoList());
console.log(project3.getTodoList());
