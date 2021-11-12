import getDataLS, { indexValue } from './localstorage.js';
import StorageMock from './storage.js';

const storage = new StorageMock();

export default function clearAllcomplete(data = getDataLS()) {
  data = data.filter((task) => !task.completed);
  storage.setItem('tasks', data);
  indexValue();
}
