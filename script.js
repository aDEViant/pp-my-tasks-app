const form = document.querySelector("#tasksForm");
const userInput = document.querySelector("#user_input");
const addButton = document.querySelector("#addTaskButton");
const userFilter = document.querySelector("#user_filter");
const buttonGroups = document.querySelector(".listItemButtonGroups");
const clearButton = document.querySelector("#clearAllButton");
const taskList = document.querySelector(".taskListItems");

function addTask() {
  const taskText = userInput.value.trim();

  if (taskText === "") {
    alert("Please add something.");
  } else {
    createTaskItem(taskText);
    userInput.value = "";
  }
}

function createTaskItem(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
