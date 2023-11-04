import { getCurrentProjectIndex, setCurrentProjectIndex } from '../repository/repository';
import { pushProject, getProjects, getProjectAt, replaceProject, removeProjectAt } from '../repository/repository';
import { Project } from '../dataSource/model/projectModel';
import { Todo } from '../dataSource/model/todoModel';
import { updateViewState } from './viewmapper';

/*
 * Handle dialog creation
 * 
*/

function createBackdrop() {
    const body = document.querySelector("body");
    const backdrop = document.createElement("div");
    backdrop.classList.add("dialog-background");

    body.prepend(backdrop);
}

function removeBackdrop() {
    const backdrop = document.querySelector(".dialog-background");
    backdrop.remove();
}

function onDialogOpen(dialog) {
    dialog.classList.add("fade-in");
    createBackdrop();
}

function onDialogClose(dialog) {
    dialog.classList.remove("fade-in");
    dialog.style.animation = 'none';
    dialog.offsetHeight;
    dialog.classList.add("fade-out");
    setTimeout(() => {
        dialog.close();
        dialog.remove();
        removeBackdrop();
    }, 100);
}


//-----------Create todo form dialogs---------------
export function createTodoFormDialog() {
    const formDialog = document.createElement("dialog");
    formDialog.classList.add("form-dialog");
    formDialog.open = true;

    formDialog.appendChild(createTodoForm());
    onDialogOpen(formDialog);

    return formDialog;
}

function createTodoForm() {
    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("form", "post");
    form.classList.add("todo-form");

    const content = createTodoFormContent();
    const buttons = createTodoFormButtons();

    form.append(content, buttons);

    return form;
}

function createTodoFormContent() {
    const container = document.createElement("div");
    container.classList.add("todo-dialog-content");

    const mainInfo = createMainInfoFieldSet();
    const additionalInfo = createAdditionalInfoFieldSet();
    container.append(mainInfo, additionalInfo);

    return container;
}

function createMainInfoFieldSet() {
    const fieldset = document.createElement("fieldset");

    const legend = document.createElement("legend");
    legend.textContent = "Main information";

    const content = document.createElement("div");
    content.classList.add("main-info-field");

    const todoTitleLabel = document.createElement("label");
    todoTitleLabel.setAttribute("for", "todo-title");
    todoTitleLabel.innerHTML = "<div>Title</div>";

    const todoTitleInput = document.createElement("input");
    todoTitleInput.setAttribute("type", "text");
    todoTitleInput.setAttribute("name", "todo-title");
    todoTitleInput.setAttribute("id", "todo-title");
    todoTitleInput.setAttribute("placeholder", "todo title...");
    todoTitleInput.required = true;

    const desLabel = document.createElement("label");
    desLabel.setAttribute("for", "todo-description");
    desLabel.innerHTML = "<div>Description</div>";

    const desTextArea = document.createElement("textarea");
    desTextArea.setAttribute("name", "todo-description");
    desTextArea.setAttribute("id", "todo-description");
    desTextArea.setAttribute("cols", "50");
    desTextArea.setAttribute("rows", "10");
    desTextArea.required = true;
    desTextArea.textContent = "Enter your description here...";

    content.append(todoTitleLabel, todoTitleInput, desLabel, desTextArea);

    fieldset.append(legend, content);

    return fieldset;
}

function createAdditionalInfoFieldSet() {
    const fieldset = document.createElement("fieldset");

    const legend = document.createElement("legend");
    legend.textContent = "Additional information";

    const content = document.createElement("div");
    content.classList.add("additional-info-field");

    const memoLabel = document.createElement("label");
    memoLabel.setAttribute("for", "todo-memo");
    memoLabel.innerHTML = "<div>Memo</div>";

    const memoTextArea = document.createElement("textarea");
    memoTextArea.setAttribute("name", "todo-memo");
    memoTextArea.setAttribute("id", "todo-memo");
    memoTextArea.setAttribute("cols", "50");
    memoTextArea.setAttribute("rows", "5");
    memoTextArea.required = true;
    memoTextArea.textContent = "enter memo here...";

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "todo-due-date");
    dateLabel.innerHTML = "<div>Due Date</div>";

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "todo-due-date");
    dueDateInput.setAttribute("id", "todo-due-date");
    dueDateInput.required = true;

    const radioButtons = createTodoRadioButtons();

    content.append(memoLabel, memoTextArea, dateLabel, dueDateInput, radioButtons);

    fieldset.append(legend, content);

    return fieldset;

}

function createTodoRadioButtons() {
    const fieldset = document.createElement("fieldset");

    const legend = document.createElement("legend");
    legend.textContent = "Task priority";

    const priorityLowLabel = document.createElement("label");
    priorityLowLabel.setAttribute("for", "todo-priority-low");
    priorityLowLabel.innerHTML = "<div>Low</div>";

    const priorityLowInput = document.createElement("input");
    priorityLowInput.setAttribute("type", "radio");
    priorityLowInput.setAttribute("name", "todo-priority");
    priorityLowInput.setAttribute("id", "todo-priority-low");
    priorityLowInput.setAttribute("value", "1");
    priorityLowInput.checked = true;
    priorityLowInput.required = true;

    const priorityMedLabel = document.createElement("label");
    priorityMedLabel.setAttribute("for", "todo-priority-medium");
    priorityMedLabel.innerHTML = "<div>Medium</div>";

    const priorityMedInput = document.createElement("input");
    priorityMedInput.setAttribute("type", "radio");
    priorityMedInput.setAttribute("name", "todo-priority");
    priorityMedInput.setAttribute("id", "todo-priority-medium");
    priorityMedInput.setAttribute("value", "2");

    const priorityHighLabel = document.createElement("label");
    priorityHighLabel.setAttribute("for", "todo-priority-high");
    priorityHighLabel.innerHTML = "<div>High</div>";

    const priorityHighInput = document.createElement("input");
    priorityHighInput.setAttribute("type", "radio");
    priorityHighInput.setAttribute("name", "todo-priority");
    priorityHighInput.setAttribute("id", "todo-priority-high");
    priorityHighInput.setAttribute("value", "3");

    fieldset.append(legend, priorityLowLabel, priorityLowInput, priorityMedLabel, priorityMedInput, priorityHighLabel, priorityHighInput);

    return fieldset;
}

function createTodoFormButtons() {
    const container = document.createElement("div");
    container.classList.add("form-buttons");

    const submitButton = document.createElement("button");
    submitButton.classList.add("primary-button");
    submitButton.textContent = "Create/Edit Todo";
    submitButton.addEventListener("click", (e) => {
        const form = document.querySelector(".todo-form");
        const dialog = document.querySelector(".form-dialog");
        if (!form.checkValidity()) {
            form.reportValidity();
        } else {
            e.preventDefault();
            const title = form["todo-title"].value;
            const description = form["todo-description"].value;
            const dueDate = form["todo-due-date"].value;
            const priority = Number(form["todo-priority"].value);
            const memo = form["todo-memo"].value;

            dialogCreateNewTodo(new Todo(
                title,
                description,
                dueDate,
                priority,
                memo,
                false
            ));

            onDialogClose(dialog);
        }
    });

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("secondary-button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", (e) => {
        const dialog = document.querySelector(".form-dialog");
        onDialogClose(dialog);
    });

    container.append(submitButton, closeButton);

    return container;
}


//-----------view Todo dialogs---------------
export function createTodoViewDialog() {
    //TODO
}


//-----------Create project dialogs---------------
export function createProjectFormDialog() {
    const formDialog = document.createElement("dialog");
    formDialog.classList.add("form-dialog");
    formDialog.open = true;

    formDialog.appendChild(createProjectForm());
    formDialog.classList.add("slide-in");
    onDialogOpen(formDialog);

    return formDialog;
}

function createProjectForm() {
    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("form", "post");
    form.classList.add("project-form");

    const content = createProjectFormContent();
    const buttons = createProjectFormButtons();

    form.append(content, buttons);

    return form;
}

function createProjectFormContent() {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("project-form-content");

    const legend = document.createElement("legend");
    legend.textContent = "Project information";

    const projectNameLabel = document.createElement("label");
    projectNameLabel.setAttribute("for", "project-name");
    projectNameLabel.innerHTML = "<div>Project name</div>";

    const projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("type", "text");
    projectNameInput.setAttribute("name", "project-name");
    projectNameInput.setAttribute("id", "project-name");
    projectNameInput.setAttribute("placeholder", "project Name...");
    projectNameInput.required = true;

    fieldset.append(legend, projectNameLabel, projectNameInput);

    return fieldset;

}

function createProjectFormButtons() {
    const container = document.createElement("div");
    container.classList.add("form-buttons");

    const submitButton = document.createElement("button");
    submitButton.classList.add("primary-button");
    submitButton.textContent = "Create/Edit Project";
    submitButton.addEventListener("click", (e) => {
        const form = document.querySelector(".project-form");
        const dialog = document.querySelector(".form-dialog");
        if (!form.checkValidity()) {
            form.reportValidity();
        } else {
            e.preventDefault();
            dialogCreateNewProject(form["project-name"].value);
            onDialogClose(dialog);
        }
    });

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("secondary-button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", (e) => {
        const dialog = document.querySelector(".form-dialog");
        onDialogClose(dialog);
    });

    container.append(submitButton, closeButton);

    return container;
}



//-----------database Logics---------------

function dialogCreateNewProject(projectName) {
    console.log(projectName);
    const newProject = new Project(projectName, []);
    pushProject(newProject);
    updateViewState();
}

/**
 * 
 * @param {Todo} todo 
 */
function dialogCreateNewTodo(todo) {
    console.log(todo);
    const currentProject = Object.assign({}, getProjectAt(getCurrentProjectIndex()));
    const isAvailable = getCurrentProjectIndex() > -1;

    if (isAvailable) {
        currentProject.pushTodo(todo);
        replaceProject(getCurrentProjectIndex(), currentProject);
        updateViewState();
    }
}
