import './style.css';

const tasks = [
  { description: 'complete to do 1 ', index: 1, completed: false },
  { description: 'complete to do 2 ', index: 2, completed: false },
  { description: 'complete to do 3 ', index: 3, completed: false },
  { description: 'complete to do 4 ', index: 4, completed: false },
];
function addItemUI(task) {
  const list = document.querySelector('.list');
  // Inside List create a div for list item
  const listItem = document.createElement('div');
  listItem.classList.add('list-item');
  list.appendChild(listItem);
  // Inside list item create a div label
  const divlabel = document.createElement('div');
  divlabel.classList.add('list-label');
  listItem.appendChild(divlabel);
  // Inside list item create a div manipulate
  const divman = document.createElement('div');
  divman.classList.add('div-man');
  listItem.appendChild(divman);
  // Inside div label create a Input checkBox
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('name', `item${task.index}`);
  checkBox.setAttribute('id', `item${task.index}`);
  divlabel.appendChild(checkBox);
  // Inside div label create a label
  const labelItem = document.createElement('label');
  labelItem.setAttribute('for', `item${task.index}`);
  labelItem.textContent = `${task.description}`;
  divlabel.appendChild(labelItem);
  // Inside div manipulate create Delet button
  const deletBtn = document.createElement('span');
  deletBtn.classList.add('material-icons');
  deletBtn.textContent = 'edit';
  divman.appendChild(deletBtn);
  // Inside div manipulate create Edit button
  const editBtn = document.createElement('span');
  editBtn.classList.add('material-icons');
  editBtn.textContent = 'delete';
  divman.appendChild(editBtn);
}
function diplayTask() {
  tasks.forEach((task) => {
    addItemUI(task);
  });
}
document.addEventListener('DOMContentLoaded', diplayTask);
