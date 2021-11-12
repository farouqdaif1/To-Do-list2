import StorageMock from './storage.js';
import getDataLS from './localstorage.js';

const storage = new StorageMock();
// add checked to Local storage
export default function statueUdpdateLS(task, data = getDataLS()) {
  data.forEach((element, i) => {
    if (task.id === `item${element.index}`) {
      if (task.checked) {
        data[i].completed = true;
        storage.setItem('tasks', data);
      } else {
        data[i].completed = false;
        storage.setItem('tasks', data);
      }
    }
  });
}
// add checked to UI
export function statueUdpdateUI(task) {
  const data = getDataLS();
  data.forEach((element) => {
    if (task.id === `item${element.index}`) {
      if (element.completed) {
        document.querySelector(`#${task.id}`).parentElement.style.textDecoration = 'line-through';
      } else {
        const label = task.parentElement;
        label.style.textDecoration = 'none';
      }
    }
  });
}
