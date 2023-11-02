import { Project } from "../dataSource/model/projectModel";
import { RawData, RawTodoData } from "./model/rawDataModel";
import { setStorage, getStorage } from "../dataSource/localDataSource";
import { Todo } from "../dataSource/model/todoModel";

/**
 * TODO: map raw json data to Project and Todo
 * 
 * 
 */

const PROJECT_KEY = "projects";
const CURRENT_PROJECT_KEY = "currentProjectIndex";

export function getProjectListFromLocalStorage() {
    //get raw data from local storage
    const rawData = JSON.parse(getStorage()[PROJECT_KEY] || "[]");
    //convert to project list
    const projectList = rawDataToProjectListMapper(rawData);
    //return project list
    return projectList;
}

export function storeProjectListInLocalStorage(projectList) {
    //convert project list to raw data
    const rawData = projectListToRawDataMapper(projectList);

    //store in local storage
    setStorage(PROJECT_KEY, JSON.stringify(rawData));
}

export function getCurrentProjectIndexInLocalStorage() {
    const index = Number(getStorage()[CURRENT_PROJECT_KEY] || "-1");
    return index;
}

export function storeCurrentProjectIndexInLocalStorage(index) {
    setStorage(CURRENT_PROJECT_KEY, index);
}

/**
 * 
 * @param {Array<Project>} projectList 
 */
function projectListToRawDataMapper(projectList) {
    const rawData = [];

    for(let i = 0; i < projectList.length; i++){
        const dataObj = new RawData(
            projectList[i].projectName,
            todoListToRawTodoDataMapper(projectList[i].getTodoList())
        );

        rawData.push(dataObj);
    }

    return rawData;
}

/**
 * 
 * @param {Array<Todo>} todoList 
 */
function todoListToRawTodoDataMapper(todoList) {
    const rawList = [];

    for(let i = 0; i < todoList.length; i++){
        const data = new RawTodoData(
            todoList[i].title,
            todoList[i].description,
            todoList[i].dueDate,
            todoList[i].priority,
            todoList[i].memo,
            todoList[i].isChecked
        )

        rawList.push(data);
    }

    return rawList;
}

/**
 * 
 * @param {Array<RawData>} rawData 
 */
function rawDataToProjectListMapper(rawData) {
    const projectList = [];

    for(let i = 0; i < rawData.length; i++) {
        const project = new Project(
            rawData[i].projectName,
            rawTodoListToTodoListMapper(rawData[i].rawTodoList)
        );

        projectList.push(project);
    }

    return projectList;
}

/**
 * 
 * @param {Array<RawTodoData>} rawTodoList 
 * @returns 
 */
function rawTodoListToTodoListMapper(rawTodoList) {
    const todoList = [];

    for(let i = 0; i < rawTodoList.length; i++) {
        const todo = new Todo(
            rawTodoList[i].title,
            rawTodoList[i].description,
            rawTodoList[i].dueDate,
            rawTodoList[i].priority,
            rawTodoList[i].memo,
            rawTodoList[i].isChecked
        )

        todoList.push(todo);
    }

    return todoList;
}
