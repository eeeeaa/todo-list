import { Todo } from "./todoModel";

export class Project {
    #_todoList;

    /**
     * 
     * @param {String} projectName 
     * @param {Array<Todo>} todoList 
     */
    constructor(projectName, todoList) {
        this.projectName = projectName;
        this.#_todoList = todoList;
    }

    toString = () => {
        let str = "";
        for (let i = 0; i < this.#_todoList.length; i++) {
            str += `[${this.#_todoList[i].toString()}]`;
        }
        return str;
    }

    getTodoList = () => {
        return this.#_todoList;
    }

    setTodoList = (newList) => {
        this.#_todoList = [];
        for (let i = 0; i < newList.length; i++) {
            if (!(newList[i] instanceof Todo)) {
                throw new Error("this is not a Todo list!");
            }
            this.#_todoList.push(newList[i]);
        }
    }

    clearTodoList = () => {
        this.#_todoList = [];
    }

    replaceTodo = (index, todo) => {
        this.#_todoList[index] = todo;
    }

    /**
     * 
     * @param {Todo} todo 
     */
    pushTodo = (todo) => {
        this.#_todoList.push(todo);
    }

    addTodoToTop = (todo) => {
        this.#_todoList.unshift(todo);
    }

    popTodo = () => {
        return this.#_todoList.pop();
    }

    removeTodoFromTop = () => {
        return this.#_todoList.shift();
    }

    removeTodoAt = (index) => {
        return this.#_todoList.splice(index, 1);
    }

    swapTodo = (firstIndex, secondIndex) => {
        const temp = this.#_todoList[firstIndex];
        this.#_todoList[firstIndex] = this.#_todoList[secondIndex];
        this.#_todoList[secondIndex] = temp;
    }

    sortTodoByPriority = () => {
        this.#_todoList.sort((a, b) => {
            if (a.priority > b.priority) {
                return -1;
            } else if (a.priority < b.priority) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    generateRandomNotes = (quantity) => {
        this.#_todoList = [];
        const genDate = () => {
            return `${Math.round((Math.random() + 1) * 6)}/${Math.round((Math.random() + 1) * 12)}/${Math.round((Math.random() + 1) * 1000)}`;
        }
        for (let i = 0; i < quantity; i++) {
            const todo = new Todo(
                (Math.random() + 1).toString(36).substring(5),
                (Math.random() + 1).toString(36).substring(5),
                genDate(),
                Math.round((Math.random() + 1) * 3),
                (Math.random() + 1).toString(36).substring(5),
                (Math.random() < 0.5) ? true : false
            );

            this.pushTodo(todo);
        }
    }
}