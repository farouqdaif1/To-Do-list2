import { JSDOM } from 'jsdom';
import addItemUI, { clear, diplayTask } from '../__mocks__/uImanpulate.js';

const dom = new JSDOM(`<!DOCTYPE html><body><input type="text" name="add-task" id="add-item"  ><div class="list"></div></body>`);// eslint-disable-line

global.document = dom.window.document;
global.window = dom.window;
const list = document.querySelector('.list');
const task = {
  description: 'Eat',
  completed: false,
  index: 0,
};
const data = [
  {
    description: 'Wake Up',
    completed: false,
    index: 1,
  },
  {
    description: 'Sleep',
    completed: false,
    index: 2,
  },
];

describe('tests for UI ', () => {
  describe('Test for Ui', () => {
    test('Add item to list', () => {
      addItemUI(task);
      expect(list.childElementCount).toBe(1);
    });
  });

  test('display the local storage in  UI', () => {
    diplayTask(data);
    expect(list.childElementCount).toBe(3);
  });

  test('clear the input field ', () => {
    const input = document.querySelector('#add-item');
    input.value = 'farouq';
    clear();
    expect(input.value).toBe('');
  });
});
