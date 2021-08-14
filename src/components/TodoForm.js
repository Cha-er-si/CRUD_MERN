import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : '' },
  });
  const history = useHistory();

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
    history.push('/');
  });

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor='text'>Text:</label>
        <input
          {...register('text', { required: true })}
          className='form-control'
          type='text'
          name='text'
          id='text'
        />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
