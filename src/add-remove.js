import getDataLS from './interactive.js';

export default function editText(taskInput, index) {
  if (taskInput === '') {
    return;
  }
  const task = getDataLS();
  task[index + 1].description = taskInput;
  localStorage.setItem('tasks', JSON.stringify(task));
}
