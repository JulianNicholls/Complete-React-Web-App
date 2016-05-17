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
  }
};
