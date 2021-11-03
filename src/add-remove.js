import getDataLS from './localstorage.js';

export default function editText(taskInput, index) {
  if (taskInput === '') {
    return;
  }
  const task = getDataLS();
  task.forEach((element, i) => {
    if (index === `para-${i + 1}`) {
      element.description = taskInput;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(task));
}
