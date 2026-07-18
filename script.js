const form = document.querySelector("#tasksForm");
const userInput = document.querySelector("#user_input");
const addButton = document.querySelector("#addTaskButton");
const userFilter = document.querySelector("#user_filter");
const buttonGroups = document.querySelector(".listItemButtonGroups");
const clearButton = document.querySelector("#clearAllButton");
const taskList = document.querySelector(".taskListItems");

const tasks = [];

function render() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskText = userInput.value.trim();

  if (taskText === "") {
    alert("Please add something.");
    return;
  } else {
    tasks.push(taskText);
    userInput.value = "";
    render();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
