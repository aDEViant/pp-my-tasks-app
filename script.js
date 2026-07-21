// const addButton = document.querySelector("#addTaskButton");
// const buttonGroups = document.querySelector(".listItemButtonGroups");
// const item = document.querySelector("li");
// const taskText = document.querySelector("span");
// const listItemButtonGroups = document.querySelector(".listItemButtonGroups");
// const deleteTask = document.querySelector("#deleteTask");

const form = document.querySelector("#tasksForm");
const userInput = document.querySelector("#user_input");
const taskList = document.querySelector(".taskListItems");
const counter = document.querySelector(".counterNumber");
const clearButton = document.querySelector("#clearAllButton");
const filterInput = document.querySelector("#user_filter");

const tasks = [];

function render() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    // Create List Item
    const li = document.createElement("li");
    li.className = "item";

    // Create Task Text
    const span = document.createElement("span");
    span.className = "taskText";
    span.textContent = task;

    // Create button Group
    const div = document.createElement("div");
    div.className = "listItemButtonGroups";

    // Create tick button
    const tickButton = document.createElement("button");
    tickButton.className = "formButton";
    tickButton.textContent = "&#10003";

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "formButton";
    deleteButton.textContent = "&times";

    // Delete functionality
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      render();
    });

    // Assemble
    div.appendChild(tickButton);
    div.appendChild(deleteButton);
    li.appendChild(span);
    li.appendChild(div);
    taskList.appendchild(li);

    // Update conter
    counter.textContent = tasks.length;
  });
}

// Add Task
function addTask() {
  const textTask = userInput.value.trim();

  if (textTask === "") {
    alert("Please add something");
    return;
  }

  tasks.push(textTask);
  userInput.value = "";
  render();
}

// Clear All
function clearAll() {
  if (tasks.length === 0) return;
  if (confirm("Are you sure you want to delete all tasks")) {
    tasks = [];
    render();
  }
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

clearButton.addEventListener("click", clearAll);
