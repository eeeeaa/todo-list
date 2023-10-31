import { setStorage, getStorage,clearStorage } from "../dataSource/localDataSource";
import { Project } from "../dataSource/model/projectModel";

const PROJECT_KEY = "projects";
const CURRENT_PROJECT_KEY = "currentProjectIndex";
let projectList = [];
let currentProjectIndex = 0;

function setCurrentProjectIndex(index) {
    currentProjectIndex = index;
}

function getCurrentProjectIndex() {
    return currentProjectIndex;
}

function fetchProjectsFromDataSource(){
    const localProjects = getStorage()[PROJECT_KEY];
    const localIndex = getStorage()[CURRENT_PROJECT_KEY];
    if(localProjects != undefined){
        projectList = JSON.parse(localProjects);
    }
    if(localIndex != undefined){
        setCurrentProjectIndex(Number(localIndex));
    }
}

function getProjects() {
    return projectList;
}

function setProjects(projects){
    projectList = projects;
    setStorage(PROJECT_KEY, JSON.stringify(projectList));
    setStorage(CURRENT_PROJECT_KEY, JSON.stringify(getCurrentProjectIndex()));
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