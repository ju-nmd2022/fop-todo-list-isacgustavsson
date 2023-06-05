document.addEventListener("DOMContentLoaded", function () {
  // Retrieve tasks from local storage if available
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const body = document.querySelector("body");
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Display tasks from local storage
  displayTasks();

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      // Add task to tasks array
      tasks.push({
        text: taskText,
        completed: false,
      });

      // Save tasks to local storage
      saveTasks();

      // Clear input field
      taskInput.value = "";

      // Display updated tasks
      displayTasks();
    }
  });

  function displayTasks() {
    // Clear the task list
    taskList.innerHTML = "";

    // Display each task
    tasks.forEach(function (task, index) {
      const taskItem = document.createElement("li");
      taskItem.innerText = task.text;

      if (task.completed) {
        taskItem.classList.add("completed");
      }

      // Add click event to mark task as completed
      taskItem.addEventListener("click", function () {
        task.completed = !task.completed;

        // Save tasks to local storage
        saveTasks();

        // Display updated tasks
        displayTasks();
      });

      // Add button to delete task
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", function () {
        // Remove task from tasks array
        tasks.splice(index, 1);

        // Save tasks to local storage
        saveTasks();

        // Display updated tasks
        displayTasks();
      });

      // Append task item to task list
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
      body.appendChild(taskList);
    });
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
