const button = document.querySelector('button');
const deleteTask = document.querySelector('button:last-child')
const addTask = document.querySelector('input');
const tasks = document.querySelector('ul');


button.addEventListener('click', changeColor)
deleteTask.addEventListener('click', deleteTheTask)
console.log(changeColor)
function changeColor() {
    const task = document.createElement('li');
    task.textContent=addTask.value;
    tasks.appendChild(task);

}

function deleteTheTask() {
    const lastTask = document.querySelector('li:last-child');
    tasks.removeChild(lastTask)

}



