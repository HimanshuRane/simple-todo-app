const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function createTaskElement(taskText) {
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = taskText;

  checkbox.addEventListener("change", function () {
    text.classList.toggle("completed", checkbox.checked);
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  taskContent.appendChild(checkbox);
  taskContent.appendChild(text);
  listItem.appendChild(taskContent);
  listItem.appendChild(deleteButton);

  return listItem;
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const taskElement = createTaskElement(taskText);
  taskList.appendChild(taskElement);
  taskInput.value = "";
  taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
