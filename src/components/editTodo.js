import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm.js';

const EditTodo = () => {
  const [todo, setTodo] = useState();

  useEffect(() => {
    setTodo({
      text: 'foo',
    });
  }, []);

  const onSubmit = (data) => {
    alert(JSON.stringtify(data));
  };

  return todo ? (
    <div className='container'>
      <div className='mt-3'>
        <h1>Edit Todo Item</h1>
        <TodoForm todo={todo} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default EditTodo;
