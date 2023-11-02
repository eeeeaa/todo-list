export class RawData {

    /**
     * 
     * @param {string} projectName 
     * @param {Array<RawTodoData>} todoList 
     */
    constructor(projectName, rawTodoList) {
        this.projectName = projectName;
        this.rawTodoList = rawTodoList;
    }
}

export class RawTodoData {

     /**
     * 
     * @param {string} title 
     * @param {string} description 
     * @param {string} dueDate 
     * @param {Number} priority 
     * @param {string} memo 
     * @param {boolean} isChecked 
     */
     constructor(title, description, dueDate, priority, memo, isChecked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.memo = memo;
        this.isChecked = isChecked;
    }
}