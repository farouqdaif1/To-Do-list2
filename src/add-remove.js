import getDataLS from './localstorage.js';

export default function editText(taskInput, index, task = getDataLS()) {
  if (taskInput === '') {
    return;
  }
  task.forEach((element, i) => {
    if (index === `para-${i + 1}`) {
      element.description = taskInput;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(task));
}
