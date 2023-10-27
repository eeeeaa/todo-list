import { Project } from "../js/dataSource/model/projectModel";

test('generate random todos successfully', () => {
    const project = new Project("subject", []);
    project.generateRandomNotes(5);
    expect(project.getTodoList().length).toBe(5);
});