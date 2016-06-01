import $ from 'jQuery';

module.exports = {
  setTasks(tasks) {
    if(!$.isArray(tasks)) {
      return;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    return tasks;
  },
  getTasks() {
    let strTasks  = localStorage.getItem('tasks')

    try {
      let tasks = JSON.parse(strTasks);

      if($.isArray(tasks)) {
        return tasks
      }
    }
    catch (err) { }

    return [];
  },
  filterTasks(tasks, showCompleted, searchText) {
    var filteredTasks = showCompleted ? tasks : tasks.filter((task) => !task.completed);

    // Filter by searchText

    if(searchText.length > 0) {
      searchText = searchText.toLowerCase();

      filteredTasks = filteredTasks.filter((task) => {
        return task.text.toLowerCase().indexOf(searchText) !== -1;
      });
    }

    // Sort non-completed first, by priority

    filteredTasks.sort((a, b) => {
      let acom = a.completed, bcom = b.completed;

      if(!acom && bcom) {
        return -1;
      }
      else if(acom && !bcom) {
        return 1;
      }

      return a.priority - b.priority;
    });

    return filteredTasks;
  }
};
