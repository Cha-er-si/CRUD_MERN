import React from 'react';
import TodoForm from './TodoForm.js';
import { createTodos } from '../api.js';
import { useHistory } from 'react-router-dom';

const CreateTodo = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createTodos(data);
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
