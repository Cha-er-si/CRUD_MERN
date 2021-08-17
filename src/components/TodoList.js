import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../api.js';
import { MdModeEdit } from 'react-icons/md';

const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos();
      setItems(todos);
    };
    fetchItems();
  }, []);

  return (
    <div className='container'>
      <div className='mt-3'>
        <h1 className='todo-title'>TODO LIST</h1>
        <table className='todo-table'>
          <thead className='todo-header'>
            <tr>
              <th className='todo-text'>Text</th>
              <th className='todo-description'>Description</th>
              <th className='todo-action'>Action</th>
            </tr>
          </thead>
          <tbody className='todo-body'>
            {items.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.text}</td>
                <td>{todo.description}</td>
                <td className='todo-action'>
                  <Link to={`/edit/${todo._id}`}>
                    <MdModeEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
