import getDataLS from './localstorage.js';

// add checked to Local storage
export default function statueUdpdateLS(task) {
  const data = getDataLS();
  data.forEach((element, i) => {
    if (task.id === `item${element.index}`) {
      if (task.checked) {
        data[i].completed = true;
        localStorage.setItem('tasks', JSON.stringify(data));
      } else {
        data[i].completed = false;
        localStorage.setItem('tasks', JSON.stringify(data));
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
