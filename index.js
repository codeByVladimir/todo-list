const inputNode = document.querySelector('.todo__input');
const buttonAddTaskNode = document.querySelector('.todo__add-new-task');
const todoListNode = document.querySelector('.todo__list');

let checkNewTaskFromUser = null;
let arrForLocalStorage = [];

document.addEventListener('DOMContentLoaded', () => {
    const returnLocalTask = document.createElement('li');
    returnLocalTask.className = 'todo__list-task';
    returnLocalTask.textContent = fromLocalStorage();
    todoListNode.append(returnLocalTask);
})

buttonAddTaskNode.addEventListener('click', () =>{
    checkNewTaskFromUser = getNewTaskFromUser(inputNode);
    if(!checkNewTaskFromUser){
        return
    }
    renderTaskFromUser(checkNewTaskFromUser);
    arrForLocalStorage.push(checkNewTaskFromUser);
    toLocalStorage(arrForLocalStorage);
    inputNode.value = '';
})

function getNewTaskFromUser(inputNode){
    return inputNode.value;
}

function renderTaskFromUser(task){
    const newTask = document.createElement('li');
    newTask.className = 'todo__list-task';
    newTask.textContent = task;
    todoListNode.append(newTask);
}

function toLocalStorage(arr){
    localStorage.setItem('Tasks', JSON.stringify(arr));
}

function fromLocalStorage(){
    return JSON.parse(localStorage.getItem('Tasks'));
}