# React Course

The code from The Complete React Web App Developer course from
[Udemy](https://www.udemy.com/the-complete-react-web-app-developer-course).

The completed Weather app is available at
[Weather Oracle](http://weather-oracle.herokuapp.com).

The completed Clocks app is available at
[Reactive Clocks](http://reactive-clocks.herokuapp.com).

The Work in Progress Todo app is available at
[Reactive Agenda](http://reactive-agenda.herokuapp.com).

## Status

So far, Working through section 10 - Redux, started re-factoring Todo App.

## Git Commits

I have committed about three times as much as Andrew advises, more or less at the end of
each lecture that adds code anywhere.

## Directories

I have successively started new directories during the course, in this order (I think)

* Hello-React
* First-Component
* Nested-Components
* First-Webpack
* React-Boilerplate
* React-Weather       - First version of Weather App, before Foundation styling
* Weather-Foundation  - Final version of Weather App
* React-Boilerplate-2
* React-Clocks        - Final version of Clocks App
* React-Boilerplate-3
* React-Todo          - Todo App, using localStorage
* playground          - short asides from lectures
* First-Redux
* Todo-Redux          - WIP Todo App, using Redux

### Important Notes for Todo App

I have made a few modifications compared with Andrew's version.

#### import vs require

I have used import where possible, e.g.

```
var React = require('react');
```

becomes

```
import React from 'react';
```

#### todo vs task

My code for the Todo App uses the word 'task' in almost all places where Andrew is using 'todo'.
I have also made some of my other components and classes different from his.

These include

* TodoApp.state.todos -> TodoApp.state.tasks
* Todo -> TodoTask
* AddTodo -> TodoForm
* TodoAPI.getTodos / setTodos -> TodoAPI.getTasks / setTasks

#### moment-examples.js

Because my playground directory is in the root of the repository, it won't work where it is.
Copy `moment-examples.js` into the React-Todo directory and run it from there.

#### Timestamps

The timestamp for creation or completion is displayed as '...ago' if it is less than a fortnight
in the past. See [fromNow() documentation](http://momentjs.com/docs/#/displaying/fromnow/).

So, for example it is now 18:22 on 18 May 2016, so these timestamps would be displayed as

* 2016/05/18 14:30 -> '4 hours ago'
* 2016/05/17 14:30 -> 'a day ago'
* 2016/05/11 14:30 -> '7 days ago'

...and so on.

This is something that I have written myself in the past in
[PHP](https://github.com/JulianNicholls/RSS-Viewer/blob/master/humantime.php)
and
[Ruby](https://github.com/JulianNicholls/ruby-rss-reader/blob/master/humantime.rb)

### Git client

I have used Git at the command-line for almost 10 years, as shown in the course videos.
Over that time, I have tried many different graphical shells for Git, without finding
one that was easier and nicer to use than the command-line (in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent Git shell and
would advise using it to everyone.

## Questions

If you have any questions about this repository, or any others of mine, please don't hesitate
to contact me.
