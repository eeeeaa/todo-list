import { Project } from "../dataSource/model/projectModel";


let projectList = [];
let currentProjectIndex = -1;

function setCurrentProjectIndex(index) {
    currentProjectIndex = index;
    //console.log(`current index: ${currentProjectIndex}`);
}

function getCurrentProjectIndex() {
    //console.log(`current index: ${currentProjectIndex}`);
    return currentProjectIndex;
}

function getProjects() {
    //TODO fetch data from storage
    return projectList;
}

function setProjects(projects){
    projectList = projects;
    //TODO: store data to storage
}

/**
 * 
 * @param {Project} project 
 */
function pushProject(project) {
    const projects = getProjects();
    projects.push(project);
    setProjects(projects);
}

function popProject() {
    const projects = getProjects();
    let removed = projects.pop();
    setProjects(projects);
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
    setProjects(projects);
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
    setProjects(projects);
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
    getProjects,
    setCurrentProjectIndex,
    getCurrentProjectIndex
}