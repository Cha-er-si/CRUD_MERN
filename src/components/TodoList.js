import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { text: 'foo', id: 0 },
      { text: 'bar', id: 1 },
      { text: 'buz', id: 2 },
    ]);
  }, []);

  return (
    <div className='container'>
      <div className='mt-3'>
        <h1>Todo List</h1>
        <table className='table table-stripped mt-3'>
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.text}</td>
                <td>
                  <Link to={`/edit/${todo.id}`}>Edit</Link>
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
