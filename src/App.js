import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import TodoList from './components/todoList.js';
import editTodo from './components/editTodo.js';
import CreateTodo from './components/createTodo.js';

function App() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='navbar-items'>
          <li className='navbar-item'>
            <Link className='navbar-item-link' to='/'>
              TODOS
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-item-link' to='/create'>
              CREATE TODO
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={TodoList} />
        <Route path='/edit/:id' component={editTodo} />
        <Route path='/create' component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
