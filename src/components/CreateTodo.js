import React from 'react';
import TodoForm from './TodoForm.js';

const CreateTodo = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className='container'>
      <div className='mt-3'>
        <h1>Create Todo Item</h1>
        <TodoForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default CreateTodo;
