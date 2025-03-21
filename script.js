let para = document.getElementById("para");
let btn = document.querySelector("button");
let tasks = document.querySelector(".tasks");

btn.addEventListener("click", () => {
  let tasksText = para.value.trim();

  if(tasksText!==""){
    let newTask = document.createElement("p");
    newTask.innerHTML = tasksText;
    tasks.appendChild(newTask);
    para.value = "";
  }
});
