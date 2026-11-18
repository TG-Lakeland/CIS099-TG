const button = document.getElementById("addButton");
const inputField = document.getElementById("taskInput");
const priority = document.getElementById("priorityInput");
const messageElement = document.getElementById("message");
const taskList = document.getElementById("taskList");
const high = document.querySelector(".priority-high");
let taskName = inputField.value;
let listType = taskList.value;

button.addEventListener("click", doSomething)
function doSomething(){
taskName = inputField.value;
listType = taskList.value;
}
button.addEventListener("click", error)
function error() {
if (taskName === "") {
  messageElement.innerText = "please enter a task";
  return;
  }};
button.addEventListener("click", function() {
 const newTask = document.createElement("li");
    newTask.textContent = taskName;
    taskList.appendChild(newTask);
  newTask.classList.add("task");
    if (priority === "high") {
        newTask.classList.add("high");



}});