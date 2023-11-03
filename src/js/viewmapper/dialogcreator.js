export function createTodoFormDialog() {
    const formDialog = document.createElement("dialog");
    formDialog.classList.add("form-dialog");
    formDialog.open = true;

    formDialog.appendChild(createTodoForm());

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

    content.append(todoTitleLabel,todoTitleInput,desLabel,desTextArea);

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

    content.append(memoLabel,memoTextArea,dateLabel,dueDateInput,radioButtons);

    fieldset.append(legend,content);

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
        if(!form.checkValidity()){
            form.reportValidity();
        }else{
            e.preventDefault();
            //TODO
        }
    });

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("secondary-button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", (e) => {
        const dialog = document.querySelector(".form-dialog");
        dialog.close();
        dialog.remove();
    });

    container.append(submitButton, closeButton);

    return container;
}

export function createTodoViewDialog() {
    //TODO
}

export function createProjectFormDialog() {
    //TODO
}