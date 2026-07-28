// ===== DOM REFERENCES =====
const form = document.querySelector("#tasksForm");
const userInput = document.querySelector("#user_input");
const taskList = document.querySelector(".taskListItems");
const counter = document.querySelector(".counterNumber");
const clearButton = document.querySelector("#clearAllButton");
const filterInput = document.querySelector("#user_filter");

// ===== STATE =====
let tasks = [];
let filterText = "";

// ===== LOCAL STORAGE =====
function saveToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    tasks = JSON.parse(stored);
  }
}

// ===== RENDER =====
function render() {
  // 1. Clear the list
  taskList.innerHTML = "";

  // 2. Filter tasks
  const filteredTasks = tasks.filter((task) => {
    return task.text.toLowerCase().includes(filterText.toLowerCase());
  });

  // 3. Loop through FILTERED tasks
  filteredTasks.forEach((task) => {
    // Create elements
    const li = document.createElement("li");
    li.className = "item";

    if (task.completed) {
      li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.className = "taskText";
    span.textContent = task.text;

    // Tick Button
    const tickButton = document.createElement("button");
    tickButton.className = "formButton";
    tickButton.textContent = "✓";
    tickButton.addEventListener("click", () => {
      const originalIndex = tasks.indexOf(task);
      tasks[originalIndex].completed = !tasks[originalIndex].completed;
      render();
      saveToStorage();
    });

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.className = "formButton";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      const originalIndex = tasks.indexOf(task);
      tasks.splice(originalIndex, 1);
      render();
      saveToStorage();
    });

    li.appendChild(span);
    li.appendChild(tickButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });

  // 4. Update counter (total tasks)
  counter.textContent = tasks.length;
}

// ===== ADD TASK =====
function addTask() {
  const taskText = userInput.value.trim();

  if (taskText === "") {
    alert("Please add something.");
    return;
  }

  tasks.push({
    text: taskText,
    completed: false,
  });

  userInput.value = "";
  render();
  saveToStorage();
}

// ===== CLEAR ALL =====
function clearAll() {
  if (tasks.length === 0) return;

  if (confirm("Are you sure you want to delete all the tasks?")) {
    tasks = [];
    render();
    saveToStorage();
  }
}

// ===== EVENT LISTENERS =====
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

clearButton.addEventListener("click", clearAll);

filterInput.addEventListener("input", (e) => {
  filterText = e.target.value;
  render();
});

// ===== INITIAL LOAD =====
loadFromStorage();
render();