import React from 'react';
import TodoForm from './TodoForm.js';
import { createTodo } from '../api.js';
import { useHistory } from 'react-router-dom';

const CreateTodo = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createTodo(data);
    history.push('/');
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
