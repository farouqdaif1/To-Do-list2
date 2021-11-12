import StorageMock from './storage.js';
import getDataLS from './localstorage.js';

const storage = new StorageMock();

export default function editText(taskInput, index, task = getDataLS()) {
  if (taskInput === '') {
    return;
  }
  task.forEach((element, i) => {
    if (index === `para-${i + 1}`) {
      element.description = taskInput;
    }
  });
  storage.setItem('tasks', task);
}