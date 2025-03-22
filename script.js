const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTask");
const todoList = document.querySelector("#todo-list");

addTaskButton.addEventListener("click",()=>{
  const taskText = taskInput.value.trim();

  if(taskText==""){
    return alert("Please enter a task!");
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  taskSpan.addEventListener("click",()=>{
    taskSpan.classList.toggle("completed");
  })

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.className = "button"
  deletebtn.addEventListener("click",()=>{
    todoList.removeChild(li);
  })
  li.appendChild(taskSpan);
  li.appendChild(deletebtn);
  todoList.appendChild(li);

  taskInput.value = "";
})