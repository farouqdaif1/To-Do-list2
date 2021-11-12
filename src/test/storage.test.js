import StorageMock from '../__mocks__/storage.js';

describe('Storage test', () => {
  const storage = new StorageMock();
  storage.setItem('list', []);
  const data = [];

  test('Add one item into storage', () => {
    const task1 = { completed: false, description: 'Complete milestone 1 & 2 by 10am', index: 1 };
    data.push(task1);
    storage.setItem('list', data);
    expect(storage.getItem('list').length).toBe(1);
  });

  test('Add second item into storage', () => {
    const task2 = { completed: false, description: 'Go for break', index: 2 };
    data.push(task2);
    storage.setItem('list', data);
    expect(storage.getItem('list').length).toBe(2);
  });
});