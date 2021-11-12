import getDataLS, { addTaskLS, remove, indexValue } from '../__mocks__/localstorage.js';

describe('tests for local storage', () => {
  test('get data from local storage', () => {
    expect(getDataLS().length).toBe(0);
  });
  test('add data to local storage', () => {
    const task = {
      description: 'task 1',
      complete: false,
      index: 1,
    };
    addTaskLS(task);
    expect(getDataLS().length).toBe(1);
  });
  test('add another data to local storage', () => {
    const task = {
      description: 'task 2',
      complete: false,
      index: 2,
    };
    addTaskLS(task);
    expect(getDataLS().length).toBe(2);
  });
  test('add another data to local storage', () => {
    const task = {
      description: 'task 3',
      complete: false,
      index: 3,
    };
    addTaskLS(task);
    expect(getDataLS().length).toBe(3);
  });
  test('remove data from local storage', () => {
    // mock the id
    const index = 'delete2';
    remove(index);
    expect(getDataLS().length).toBe(2);
  });
  test('Reindex data at local storage', () => {
    indexValue();
    expect(getDataLS()[1].index).toBe(2);
  });
});