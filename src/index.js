import './style.css';
import statueUdpdateLS, { statueUdpdateUI } from './interactive.js';
import addItemUI, { diplayTask, clear } from './uImanpulate.js';
import Task from './task.js';
import getDataLS, { addTaskLS, indexValue, remove } from './localstorage.js';
import editText from './add-remove.js';

document.addEventListener('DOMContentLoaded', diplayTask);
const list = document.querySelector('.list');
document.querySelector('#enter').addEventListener('click', (e) => {
  if (e.target.classList.contains('add-item')) {
    const Input = document.querySelector('#add-item').value;
    const index = getDataLS().length + 1;
    const task = new Task(Input, index, false);
    addTaskLS(task);
    addItemUI(task);
    clear();
  }
});
list.addEventListener('change', (e) => {
  if (e.target.classList.contains('check')) {
    const task = document.querySelector(`#${e.target.id}`);
    const taskx = e.target;
    statueUdpdateLS(taskx);
    statueUdpdateUI(task);
  }
});
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    remove(e.target.id);
    e.target.parentElement.parentElement.remove();
    window.location.reload();
    indexValue();
  }
});
document.querySelector('.clear-btn').addEventListener('click', () => {
  let data = getDataLS();
  data = data.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(data));
  indexValue();
  window.location.reload();
});
list.addEventListener('click', (e) => {
  const x = e.target.parentElement.previousSibling;
  if (e.target.classList.contains('edit')) {
    x.children[1].classList.add('none');
    x.children[2].classList.remove('none');
    x.children[2].classList.add('new');
    x.children[2].addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        x.children[1].textContent = x.children[2].value;
        x.children[1].classList.remove('none');
        x.children[2].classList.add('none');
        editText(x.children[2].value, x.children[1].classList.value);
      }
    });
  }
});
