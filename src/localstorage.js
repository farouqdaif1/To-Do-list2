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
export function indexValue() {
  const task = getDataLS();

  if (task.length === 1) {
    task[0].index = 1;
    localStorage.setItem('tasks', JSON.stringify(task));
  } else {
    task.sort((a, b) => a.index - b.index);
    for (let i = 0; i < task.length; i += 1) {
      task[i].index = i + 1;
    }
    localStorage.setItem('tasks', JSON.stringify(task));
  }
}
// add data to local storage
export function addTaskLS(task) {
  const data = getDataLS();
  data.push(task);
  localStorage.setItem('tasks', JSON.stringify(data));
}
// remove local storage
export function remove(id) {
  const data = getDataLS();
  data.forEach((element, x) => {
    if (id === `delete${element.index}`) {
      data.splice(x, 1);
      localStorage.setItem('tasks', JSON.stringify(data));
    }
  });
}