var inputField = document.querySelector("#inputText");
var outputList = document.querySelector("ol");
var tasks = [];

// Function to render tasks in the ordered list
function renderTasks() {
    outputList.innerHTML = ""; // Clear previous tasks
    tasks.forEach((task, index) => {
     var listItem = document.createElement("li");
        listItem.innerHTML = `
            ${task}
            <div>
                <button class="edit" onclick="modifyTask(${index})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="delete" onclick="removeTask(${index})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
        outputList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask() {
  var taskValue = inputField.value.trim();
    if (taskValue) {
        tasks.push(taskValue);
        inputField.value = ""; // Clear input field
        renderTasks(); // Re-render tasks
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks(); // Re-render tasks
}

// Function to edit a task
function modifyTask(index) {
   var updatedValue = prompt("Update your task:", tasks[index]);
    if (updatedValue && updatedValue.trim() !== "") {
        tasks[index] = updatedValue;
        renderTasks(); // Re-render tasks
    }
}
