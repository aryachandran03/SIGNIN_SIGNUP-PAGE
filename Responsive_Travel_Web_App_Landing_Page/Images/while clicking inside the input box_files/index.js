const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// validation for empty input
const errorMsg = document.createElement("div");
errorMsg.className = "error-text";
errorMsg.textContent = "Task cannot be empty";
errorMsg.style.display = "none";
taskInput.parentElement.after(errorMsg);

addTaskBtn.addEventListener("click", addTask);

// hide the error msg while typing
taskInput.addEventListener("input", () => {
    errorMsg.style.display = "none";
    taskInput.classList.remove("input-error");
});

function addTask() {
    const text = taskInput.value.trim();

    // Validation for empty input
    if (!text) {
        errorMsg.style.display = "block";
        taskInput.classList.add("input-error");
        return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn-action btn-toggle";
    toggleBtn.textContent = "✓";
    toggleBtn.onclick = () => span.classList.toggle("completed");

    const editBtn = document.createElement("button");
    editBtn.className = "btn-action btn-edit";
    editBtn.textContent = "✎";

    // Error message for editing
    const editError = document.createElement("div");
    editError.className = "edit-error-text";
    editError.textContent = "Task cannot be empty";
    editError.style.display = "none";

    editBtn.onclick = () => {
        // ENTER EDIT MODE
        if (editBtn.textContent === "✎") {
            span.contentEditable = true;
            span.focus();
            editBtn.textContent = "💾";
            editError.style.display = "none";
            span.classList.remove("edit-error");
            li.appendChild(editError);
        }
        // SAVE EDIT
        else {
            const updatedText = span.textContent.trim();
            if (!updatedText) {
                editError.style.display = "block";
                span.classList.add("edit-error");
                span.focus();
                return;
            }
            span.contentEditable = false;
            span.classList.remove("edit-error");
            editError.style.display = "none";
            editBtn.textContent = "✎";
        }
    };

    // Remove edit error while typing
    span.addEventListener("input", () => {
        editError.style.display = "none";
        span.classList.remove("edit-error");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-action btn-delete";
    deleteBtn.textContent = "✕";
    deleteBtn.onclick = () => li.remove();

    const btnGroup = document.createElement("div");
    btnGroup.append(toggleBtn, editBtn, deleteBtn);

    li.append(span, btnGroup);
    taskList.appendChild(li);

    // Clear main input
    taskInput.value = "";
}