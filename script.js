window.onload = function() {
  let taskList, task, addTaskButton, taskForm;
  task = document.getElementById("toDoTask");
  taskForm = document.getElementById("taskForm");
  addTaskButton = document.getElementById("addTask");
  taskList = document.getElementById("taskList");
  id = 1;

  addTaskButton.addEventListener("click", addTaskToList);

  taskList.addEventListener("click", strikeOffTask);

  function addTaskToList() {
    if (task.value === "") {
      alert("Enter a task");
    } else {
      var text = task.value;
      //var item = `<li id ="li-${id}"> ${text} <input id ="box-${id}" class ="checkboxes" type ="checkbox"> </li>`;
      taskListItem = document.createElement("li"); //using JS to create a html element "li" (list item)
      taskListItem.setAttribute("class", "list-group-item ");

      //checkbox
      taskCheckbox = document.createElement("input");
      taskCheckbox.setAttribute("type", "checkbox");

      //task value
      taskValue = document.createTextNode(task.value);

      //add the elements to the task list
      taskListItem.appendChild(taskCheckbox);
      taskListItem.appendChild(taskValue);
      taskList.appendChild(taskListItem);
      id++;
      taskForm.reset();
    }
  }

  function strikeOffTask(event) {
    const checkElement = event.target;
    if (checkElement.type === "checkbox") {
      var style = checkElement.parentNode.style.textDecoration;
      if (style === "") {
        checkElement.parentNode.style.textDecoration = "line-through";
      } else {
        checkElement.parentNode.style.textDecoration = "";
      }
    }
  }
};
