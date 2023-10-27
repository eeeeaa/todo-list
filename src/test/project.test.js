import { Project } from "../js/dataSource/model/projectModel";
import { Todo } from "../js/dataSource/model/todoModel";

const testData = (function () {
    const todo = new Todo("Eat Food", "Need to eat food", "02/04/2023", 2, "", false);
    const todo2 = new Todo("Eat Meat", "Need to eat Meat", "03/04/2023", 1, "", false);
    const todo3 = new Todo("Eat Veggie", "Need to eat Veggie", "02/05/2023", 3, "", true);
    const todo4 = new Todo("Sleep", "Need to Sleep", "02/08/2023", 1, "", false);
    const todo5 = new Todo("Excercise", "Need to excercise", "06/03/2023", 2, "", true);

    const testList = [todo, todo2, todo3, todo4, todo5];
    const sortedList = [todo3, todo, todo5, todo2, todo4];
    const swapList = [todo, todo4, todo3, todo2, todo5];

    function getTestList(){
        return testList.slice();
    }

    function getSortedList(){
        return sortedList.slice();
    }

    function getSwapList(){
        return swapList.slice();
    }

    return {
        getTestList,
        getSortedList,
        getSwapList
    }
})();


test('should generate random todos successfully', () => {
    const project = new Project("subject", []);
    project.generateRandomNotes(5);
    expect(project.getTodoList().length).toBe(5);
});

test('should sort list by priority', () => {
    const project = new Project("subject", testData.getTestList());
    project.sortTodoByPriority();

    expect(project.getTodoList()).toEqual(
        testData.getSortedList()
    );
});

test('should be able to swap todos in project', () => {
    const project = new Project("subject", testData.getTestList());
    project.swapTodo(1, 3);
    try {
        expect(project.getTodoList()).toEqual(
            testData.getSwapList()
        );
    } catch (e) {
        throw new Error(`result list is 
        ${project.getTodoList().toString()}
        `);
    }
});