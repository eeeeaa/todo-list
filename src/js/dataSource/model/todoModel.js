export class Todo{
    #_dueDate;
    #_priority;
    
    /**
     * 
     * @param {string} title 
     * @param {string} description 
     * @param {string} dueDate 
     * @param {Number} priority 
     * @param {string} memo 
     * @param {boolean} isChecked 
     */
    constructor(title, description, dueDate, priority, memo, isChecked){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.memo = memo;
        this.isChecked = isChecked;
    }

    get dueDate() {
        return this.#_dueDate;
    }
    
    set dueDate(date) {
        if(isNaN(new Date(date))){
            throw new Error(`${date} is not a date!`);
        }
        this.#_dueDate = date; //string
    }

    get priority() {
        return this.#_priority;
    }

    set priority(priorityNum){
        if(priorityNum < 1){
            this.#_priority = 1;
            return;
        }
        if(priorityNum > 3){
            this.#_priority = 3;
            return;
        }
        this.#_priority = priorityNum;
    }
}