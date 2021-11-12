import editText from '../__mocks__/add-remove.js';

describe('tests for local storage for edit ', () => {
  test('edit  data at local storage', () => {
    const tasks = [
      {
        description: 'task 1',
        complete: false,
        index: 1,
      },
      {
        description: 'task 2',
        complete: false,
        index: 2,
      },
    ];
    const taskInput = 'farouq';
    const index = 'para-2';
    editText(taskInput, index, tasks);
    expect(tasks[1].description).toBe('farouq');
  });
});