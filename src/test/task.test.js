import Task from '../__mocks__/task.js';

describe('tests for test class ', () => {
  test('statu change  data at local storage', () => {
    const description = 'task 1';
    const completed = true;
    const index = 1;
    const x = new Task(description, index, completed);
    expect(x.completed).toBe(true);
  });
});
