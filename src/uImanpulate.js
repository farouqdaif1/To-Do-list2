import getDataLS, { addTaskLS } from './localstorage.js';

export default function addItemUI(task) {
  const list = document.querySelector('.list');
  // Inside List create a div for list item
  const listItem = document.createElement('div');
  listItem.classList.add('list-item');
  list.appendChild(listItem);
  // Inside list item create a div label
  const divlabel = document.createElement('div');
  divlabel.classList.add('list-label');
  divlabel.setAttribute('id', `box${task.index}`);
  listItem.appendChild(divlabel);
  // Inside list item create a div manipulate
  const divman = document.createElement('div');
  divman.classList.add('div-man');
  listItem.appendChild(divman);
  // Inside div label create a Input checkBox
  const checkBox = document.createElement('input');
  checkBox.classList.add('check');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('name', `item${task.index}`);
  checkBox.setAttribute('id', `item${task.index}`);
  checkBox.checked = task.completed;
  divlabel.appendChild(checkBox);
  // Inside div label create a label
  const labelItem = document.createElement('p');
  labelItem.classList.add(`para-${task.index}`);
  labelItem.textContent = `${task.description}`;
  divlabel.appendChild(labelItem);
  // Inside div manipulate create Delet button
  const editBtn = document.createElement('span');
  editBtn.classList.add('material-icons');
  editBtn.classList.add('edit');
  editBtn.setAttribute('id', `edit${task.index}`);
  editBtn.textContent = 'edit';
  editBtn.style.cursor = 'pointer';
  divman.appendChild(editBtn);
  // Inside div manipulate create Edit button
  const deletBtn = document.createElement('span');
  deletBtn.classList.add('material-icons');
  deletBtn.classList.add('delete');
  deletBtn.setAttribute('id', `delete${task.index}`);
  deletBtn.textContent = 'delete';
  deletBtn.style.cursor = 'pointer';
  divman.appendChild(deletBtn);
  // Update the UI when page load
  const editPara = document.createElement('input');
  editPara.value = task.description;
  editPara.classList.add('none');
  editPara.classList.add('new');
  editPara.setAttribute('type', 'text');

  divlabel.appendChild(editPara);
  if (task.completed) {
    document.querySelector(`#item${task.index}`).checked = true;
    document.querySelector(`#item${task.index}`).parentElement.classList.add('complete');
  } else {
    document.querySelector(`#item${task.index}`).parentElement.classList.remove('complete');
    document.querySelector(`#item${task.index}`).checked = false;
  }
}

export function diplayTask() {
  const sorteddata = getDataLS();
  if (sorteddata.length === 0) {
    sorteddata.forEach((task, i) => {
      addItemUI(task, i);
      addTaskLS(task);
    });
  } else {
    sorteddata.forEach((x, i) => {
      addItemUI(x, i);
    });
  }
}
export function clear() {
  document.querySelector('#add-item').value = '';
}
