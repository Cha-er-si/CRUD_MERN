import React from 'react';
import { Router, Switch } from 'react-router';
import logo from './logo.svg';
import '/App.css';
import { todoList } from './components/todoList.js';
import { editTodo } from './components/editTodo.js';
import { createTodo } from './components/createTodo.js';

function App() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='navbar-items'>
          <li>
            <Link to='/'>Todos</Link>
          </li>
          <li>
            <Link to='/create'>Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Router exact path='/' component={todoList} />
        <Router path='/edit/:id' component={editTodo} />
        <Router path='/create' component={createTodo} />
      </Switch>
    </div>
  );
}

export default App;
