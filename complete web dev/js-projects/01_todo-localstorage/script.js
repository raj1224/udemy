// document.addEventListener("DOMContentLoaded", () => {
//   const todoInput = document.getElementById("todo-input");
//   const addTaskButton = document.getElementById("add-task-btn");
//   const todoList = document.getElementById("todo-list");

//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   tasks.forEach((task) => renderTask(task));

//   addTaskButton.addEventListener("click", () => {
//     const taskText = todoInput.value.trim();
//     if (taskText === "") return;

//     const newTask = {
//       id: Date.now(),
//       text: taskText,
//       completed: false,
//     };
//     tasks.push(newTask);
//     saveTasks();
//     renderTask(newTask);
//     todoInput.value = ""; //clear input
//     console.log(tasks);
//   });

//   function renderTask(task) {
//     const li = document.createElement("li");
//     li.setAttribute("data-id", task.id);
//     if (task.completed) li.classList.add("completed");
//     li.innerHTML = `
//     <span>${task.text}</span>
//     <button>delete</button>
//     `;
//     li.addEventListener("click", (e) => {
//       if (e.target.tagName === "BUTTON") return;
//       task.completed = !task.completed;
//       li.classList.toggle("completed");
//       saveTasks();
//     });

//     li.querySelector("button").addEventListener("click", (e) => {
//       e.stopPropagation(); //prevent toggle from firing
//       tasks = tasks.filter((t) => t.id === task.id);
//       li.remove();
//       saveTasks();
//     });

//     todoList.appendChild(li);
//   }

//   function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }
// });

document.addEventListener('DOMContentLoaded',()=>{

  const input=document.querySelector('#todo-input')
const button=document.querySelector('button')
const list=document.querySelector('#todo-list')
const deleteTask=document.querySelector('#')

const tasks=JSON.parse(localStorage.getItem('tasks'))||[];

tasks.forEach(task => createTask(task));



button.addEventListener('click',()=>{
    const textContent=input.value.trim()
    if(textContent==='') return;
    console.log(textContent);
    const newTask= {
      id:Date.now(),
      text:textContent,
      completed:false
    }
    tasks.push(newTask);
    saveContent(tasks)
    input.value='';
    console.log(tasks);
    
})

function createTask(task){
  const li= document.createElement('li');
  li.setAttribute("data_id",task.id)
  li.innerHTML=`
  <span>
    <li>${task.text}</li>
  </span><button>delete</button>
  `;
  list.appendChild(li)
}
})

function saveContent(tasks){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

