import { JSDOM } from 'jsdom';
import statueUdpdateLS, { statueUdpdateUI } from '../__mocks__/interactive.js';

const dom = new JSDOM(`<!DOCTYPE html><body><div class="d1"><input class="check" type="checkbox" name="item2" id="item2"></div><div class="list"></div></body>`);// eslint-disable-line

global.document = dom.window.document;
global.window = dom.window;

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
  test('statu change  data at UI', () => {
    const task = document.querySelector('.check');
    const div1 = document.querySelector('.d1');
    // const y = div1;
    // console.log(y);
    const tasks = [
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'task 2',
        completed: true,
        index: 2,
      },
      {
        description: 'task 3',
        completed: false,
        index: 3,
      },
    ];
    statueUdpdateUI(task, tasks);
    expect(div1.getAttribute('style')).toBe(('text-decoration: line-through;'));
  });
});
