import $ from 'jQuery';

module.exports = {
  setTasks: function (tasks) {
    if(!$.isArray(tasks)) {
      return;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    return tasks;
  },
  getTasks: function () {
    let strTasks  = localStorage.getItem('tasks'),
        tasks;

    try {
      tasks = JSON.parse(strTasks);

      if($.isArray(tasks)) {
        return tasks
      }
    }
    catch (err) { }

    return [];
  },
  filterTasks: function (tasks, showCompleted, searchText) {
    var filteredTasks = tasks;

    // Filter completed

    if(!showCompleted) {
      filteredTasks = filteredTasks.filter((task) => {
        return !task.completed;
      });
    }

    // Filter by searchText

    if(searchText.length > 0) {
      searchText = searchText.toLowerCase();

      filteredTasks = filteredTasks.filter((task) => {
        return task.text.toLowerCase().indexOf(searchText) !== -1;
      });
    }

    // Sort non-completed first

    filteredTasks.sort((a, b) => {
      let acom = a.completed, bcom = b.completed;

      if(!acom && bcom) {
        return -1;
      }
      else if(acom && !bcom) {
        return 1;
      }

      return 0;
    });

    return filteredTasks;
  }
};
