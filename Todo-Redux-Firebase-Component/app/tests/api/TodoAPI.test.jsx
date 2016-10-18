import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
      localStorage.removeItem('tasks');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTasks', () => {
    var tasks = [
      { id: 83, text: "Complete task", completed: true },
      { id: 72, text: "Some uncompleted task", completed: false },
      { id: 94, text: "Also uncompleted task", completed: false },
      { id: 99, text: "Another complete task", completed: true },
    ];

    it('should return all items if showCompleted is true', () => {
      let filteredTasks = TodoAPI.filterTasks(tasks, true, '');

      expect(filteredTasks.length).toBe(4);
    });

    it('should return uncompleted items if showCompleted is false', () => {
      let filteredTasks = TodoAPI.filterTasks(tasks, false, '');

      expect(filteredTasks.length).toBe(2);
    });

    it('should return all uncompleted items if searchText is empty', () => {
      let filteredTasks = TodoAPI.filterTasks(tasks, false, '');

      expect(filteredTasks.length).toBe(2);
    });

    it('should sort uncompleted tasks to the top', () => {
      let filteredTasks = TodoAPI.filterTasks(tasks, true, '');

      expect(filteredTasks.length).toBe(4);
      expect(filteredTasks[0].completed).toBe(false);
      expect(filteredTasks[1].completed).toBe(false);
      expect(filteredTasks[2].completed).toBe(true);
    });

    it('should return matching items if searchText has text', () => {
      let filteredTasks = TodoAPI.filterTasks(tasks, false, 'lso');

      expect(filteredTasks.length).toBe(1);
    });

    it('should ignore case on searchText', () => {
      let filteredTasks = TodoAPI.filterTasks(tasks, false, 'LsO');

      expect(filteredTasks.length).toBe(1);
    });
  });
});
