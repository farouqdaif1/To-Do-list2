// get the data from local storage
import StorageMock from './storage.js';

const storage = new StorageMock();

export default function getDataLS() {
  let tasks;
  if (storage.getItem('tasks') === undefined) {
    tasks = [];
  } else {
    tasks = storage.getItem('tasks');
  }
  return tasks;
}
export function indexValue() {
  const task = getDataLS();

  if (task.length === 1) {
    task[0].index = 1;
    storage.setItem('tasks', task);
  } else {
    task.sort((a, b) => a.index - b.indexض);
    for (let i = 0; i < task.length; i += 1) {
      task[i].index = i + 1;
    }
    storage.setItem('tasks', task);
  }
}
// add data to local storage
export function addTaskLS(task) {
  const data = getDataLS();
  data.push(task);

  storage.setItem('tasks', data);
}
// remove local storage
export function remove(id) {
  const data = getDataLS();
  data.forEach((element, x) => {
    if (id === `delete${element.index}`) {
      data.splice(x, 1);
      storage.setItem('tasks', data);
    }
  });
}