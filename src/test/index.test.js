import clearAllcomplete from '../__mocks__/index.js';
import getDataLS from '../__mocks__/localstorage.js';

describe('tests for clear the data from local storage', () => {
  test('clear All complete data from local storage', () => {
    const tasks = [
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'task 2',
        completed: false,
        index: 2,
      },
      {
        description: 'task 3',
        completed: false,
        index: 3,
      },
      {
        description: 'task 4',
        completed: false,
        index: 4,
      },
    ];

    clearAllcomplete(tasks);
    expect(getDataLS()).toEqual([]);
  });
});