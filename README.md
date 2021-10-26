# React Course

**BEWARE This code is from a course last updated in 2016, so it reflects the state of React at that time, i.e. no Hooks, no Context.**

The code from The Complete React Web App Developer course from
[Udemy](https://www.udemy.com/the-complete-react-web-app-developer-course).

The completed Weather app is available at
[Weather Oracle](http://weather-oracle.herokuapp.com).

The completed Clocks app is available at
[Reactive Clocks](http://reactive-clocks.herokuapp.com).

The completed Todo app is available at
[Reactive Agenda](http://reactive-agenda.herokuapp.com).

## Status

I have completed the course, including the new section added in October 2016.

## Git Commits

I have committed about three times as much as Andrew advises, more or less
at the end of each lecture that adds code anywhere. It is a good habit to
get into.

## Directories

I have successively started new directories during the course, in this order
(I think)

* Hello-React
* First-Component
* Nested-Components
* First-Webpack
* React-Boilerplate
* React-Weather         - First version of Weather App, before Foundation styling
* Weather-Foundation    - Final version of Weather App
* React-Boilerplate-2
* React-Clocks          - Final version of Clocks App
* React-Boilerplate-3
* React-Todo            - Todo App, using localStorage
* playground            - short asides from lectures
* First-Redux
* Todo-Redux            - Todo App, using Redux
* Todo-Redux-Firebase   - Todo App, using Redux and Firebase
* es6-classes
* Todo-Redux-Firebase-Component - Final Todo App, with Redux and Firebase, using React Components

### Important Notes for Todo App

I have made a few modifications compared with Andrew's version.

#### import vs require

I have used `import` much earlier than Andrew. Almost all of the `require`s are
already `import`s by the time of lecture 120 where he changes some `require`s
to `import`s in order to differentiate between the default exports and the
explicitly exported unconnected components.

```
Simple example:

var React = require('react');

becomes

import React from 'react';
```

#### import { ... } vs import * as

I tend to import only what is needed from files where more than one item
is exported, as long as there are only a few, e.g.

```
import { startLoadTasks, login, logout } from 'actions';

rather than

import * as actions from 'actions';
```

This also has the advantage that the names don't need to be prefixed with
`actions.` when used later on in the file.

#### todo vs task

My code for the Todo App uses the word 'task' in almost all places where Andrew
is using 'todo'. I have also made some of my other component, class, and action
names different from his.

These include

* TodoApp.state.todos -> TodoApp.state.tasks
* Todo -> TodoTask
* AddTodo -> TodoForm
* TodoAPI.getTodos / setTodos -> TodoAPI.getTasks / setTasks
* startAddTodos -> startLoadTasks

#### priority

My tasks include a priority, which defaults to normal, and is shown as a range
of colours. Green is used for the lowest priority through to Red for highest.
The tasks are sorted into priority order for display, from highest down to lowest.

This means that there is an extra selection field in my TodoForm.

#### Timestamps

The timestamp for creation or completion is displayed as '...ago' if it is less
than a fortnight in the past.
See [Moment fromNow() documentation](http://momentjs.com/docs/#/displaying/fromnow/).

So, for example it is now 18:22 on 18 May 2016, so these timestamps would be
displayed as

* 2016/05/18 14:30 -> '4 hours ago'
* 2016/05/17 14:30 -> 'a day ago'
* 2016/05/11 14:30 -> '7 days ago'

...and so on.

This is something that I have written myself in the past in
[PHP](https://github.com/JulianNicholls/RSS-Viewer/blob/master/humantime.php)
and
[Ruby](https://github.com/JulianNicholls/ruby-rss-reader/blob/master/humantime.rb)

#### Removal of tasks

I have added removal of completed tasks. A red X is displayed when completed
tasks are hovered over. When it is clicked, the corresponding task is deleted.

### moment-examples.js and Firebase index.js

Because my playground directory is in the root of the repository, these asides
won't work from where they are.

Copy `moment-examples.js` into the `React-Todo` directory and run it from there.
Copy `index.js` into the `Todo-Redux` directory and run it from there.

### Git client

I have used Git at the command-line for almost 10 years, as shown in the course
videos. Over that time, I have tried many different graphical shells for Git,
without finding one that was easier and nicer to use than the command-line
(in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent
Git shell and would advise using it to everyone.

## Questions

If you have any questions about this repository, or any others of mine, please
don't hesitate to contact me.
