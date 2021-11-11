describe('tests', () => {
  test('add the task at local storage', () => {
    // Arrange
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
    // Mock function
    const mockAddLS = jest.fn((tasks, descrp) => {
      const tElement = {
        description: descrp,
        complete: false,
        index: tasks.length + 1,
      };
      tasks.push(tElement);
      return tasks.length;
    });
    // Act
    expect(mockAddLS(tasks, 'New descrp')).toBe(3);
  });
  test('delet the task at local storage', () => {
    // Arrange
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
    // Mock function
    const mockDeletTask = jest.fn((tasks, index) => {
      tasks.splice(index, 1);
      return tasks.length;
    });
    // Act
    expect(mockDeletTask(tasks, 0)).toBe(1);
  });
  test('edit text at local storage', () => {
    // Arrange

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
    // Mock function

    const editText = jest.fn((tasksIn, index, input) => {
      tasksIn[index].description = input;
      return tasks;
    });
    const index = 1;
    const input = 'testx';
    // Act

    expect(editText(tasks, index, input)[1].description).toBe(input);
  });
  test('Clear complete task at local storage', () => {
    // Arrange

    const tasks = [
      {
        description: 'task 1',
        complete: false,
        index: 1,
      },
      {
        description: 'task 2',
        complete: true,
        index: 2,
      },
      {
        description: 'task 3',
        complete: true,
        index: 3,
      },
      {
        description: 'task 4',
        complete: true,
        index: 4,
      },
      {
        description: 'task 5',
        complete: false,
        index: 5,
      },
    ];
    // Mock function

    const remover = [2, 3, 4];
    const cleartasks = jest.fn((tasksIn, Remove) => {
      Remove.forEach((element) => {
        tasksIn = tasksIn.filter((item) => item.index !== element);
      });
      return tasksIn.length;
    });
    // Act

    expect(cleartasks(tasks, remover)).toBe(2);
  });
});
