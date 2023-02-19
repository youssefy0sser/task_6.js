let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .add");
let tasksContainer = document.querySelector(".content");
let tasksCount = document.querySelector(".count span");
let tasksCompleted = document.querySelector(".completed span");

theAddButton.onclick = function () {
  if (theInput.value === "") {
    console.log("No Value");
  } else {
    let noTasksMsg = document.querySelector(".empty-tasks-message");

    if (document.body.contains(document.querySelector(".empty-tasks-message"))) {
      noTasksMsg.remove();
    }

    let mainSpan = document.createElement("span");

    let deleteElement = document.createElement("span");

    let text = document.createTextNode(theInput.value);

    let deleteText = document.createTextNode("Delete");
    mainSpan.appendChild(text);

    mainSpan.className = "task-box";

    deleteElement.appendChild(deleteText);

    deleteElement.className = "delete";

    mainSpan.appendChild(deleteElement);

    tasksContainer.appendChild(mainSpan);

    theInput.value = "";

    theInput.focus();

    calculateTasks();
  }
};

document.addEventListener("click", function (d) {
  if (d.target.className == "delete") {
    d.target.parentNode.remove();

    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }

  if (d.target.classList.contains("task-box")) {
    d.target.classList.toggle("finished");
  }

  calculateTasks();
});

function NoTasks() {
  let msgSpan = document.createElement("span");

  let msgText = document.createTextNode("No Tasks To Show");

  msgSpan.appendChild(msgText);

  msgSpan.className = "empty-tasks-message";

  tasksContainer.appendChild(msgSpan);
}

function calculateTasks() {
  tasksCount.innerHTML = document.querySelectorAll(
    ".content .task-box"
  ).length;
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".content .finished"
  ).length;
}