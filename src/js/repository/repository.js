import { setStorage, getStorage } from "../dataSource/localDataSource";
import { Project } from "../dataSource/model/projectModel";

const PROJECT_KEY = "projects";

function getProjects() {
    const projects = getStorage()[PROJECT_KEY];
    if(projects == undefined){
        setStorage(PROJECT_KEY, []);
    }
    return getStorage()[PROJECT_KEY];
}

/**
 * 
 * @param {Project} project 
 */
function pushProject(project) {
    const projects = getProjects();
    projects.push(project);
    setStorage(PROJECT_KEY, projects);
}

function popProject() {
    const projects = getProjects();
    let removed = projects.pop();
    setStorage(PROJECT_KEY, projects);
    return removed;
}

/**
 * 
 * @param {Number} index 
 * @returns 
 */
function removeProjectAt(index) {
    const projects = getProjects();
    let removed = projects.splice(index, 1);
    setStorage(PROJECT_KEY, projects);
    return removed;
}

/**
 * 
 * @param {Number} index 
 * @param {Project} project 
 */
function replaceProject(index, project) {
    const projects = getProjects();
    projects[index] = project;
    setStorage(PROJECT_KEY, projects);
}


/**
 * 
 * @param {Number} index 
 * @returns 
 */

function getProjectAt(index) {
    const projects = getProjects();
    return projects[index];
}


function getFirstProject() {
    const projects = getProjects();
    return projects[0];
}

function getLastProject() {
    const projects = getProjects();
    return projects[projects.length - 1];
}

export {
    pushProject,
    popProject,
    removeProjectAt,
    replaceProject,
    getProjectAt,
    getFirstProject,
    getLastProject,
    getProjects
}