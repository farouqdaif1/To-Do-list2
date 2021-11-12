import statueUdpdateLS from '../__mocks__/interactive.js';

describe('tests for local storage for statue change', () => {
  test('statu change  data at local storage', () => {
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
    ];
    const task = { checked: true, id: 'item1' };

    statueUdpdateLS(task, tasks);
    expect(tasks[0].completed).toBe(true);
  });
});