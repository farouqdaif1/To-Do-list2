// get the data from local storage
export default function getDataLS() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}
// add data to local storage
export function addTaskLS(task) {
  const data = getDataLS();
  data.push(task);
  localStorage.setItem('tasks', JSON.stringify(data));
}
// add checked to Local storage
export function statueUdpdateLS(e) {
  const task = e.target;
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
        const label = task.parentElement;
        label.style.textDecoration = 'line-through';
        document.querySelector(`#${task.id}`).checked = true;
        document.querySelector(`#${label.id}`).style.textDecoration = 'line-through';
      } else {
        const label = task.parentElement;
        label.style.textDecoration = 'none';
        task.checked = false;
      }
    }
  });
}

// export function statueUdpdateUI(task) {
//     const data = getTasks();
//     data.forEach((element) => {
//       if (task.id === `item${element.index}`) {
//         if (element.completed) {
//           const label = task.parentElement.id;
//           document.querySelector(`#${label}`).style.textDecoration = 'line-through';
//           document.querySelector(`#${task.id}`).checked = true;
//         } else {
//           const label = task.parentElement.id;
//           document.querySelector(`#${label}`).style.textDecoration = 'none';
//           document.querySelector(`#${task.id}`).checked = false;
//         }
//       }
//     });