import { Project } from "../dataSource/model/projectModel";
import { Todo } from "../dataSource/model/todoModel";
import { setStorage, getStorage,clearStorage } from "../dataSource/localDataSource";

/**
 * TODO: map raw json data to Project and Todo
 * 
 * 
 */

const PROJECT_KEY = "projects";
const CURRENT_PROJECT_KEY = "currentProjectIndex";