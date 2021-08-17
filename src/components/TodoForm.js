import React from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      text: todo ? todo.text : '',
      description: todo ? todo.description : '',
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <div className='form-text'>
          <label htmlFor='text'>Text:</label>
          <input
            {...register('text', { required: true })}
            className='form-control'
            type='text'
            name='text'
            id='text'
          />
        </div>
        <br />
        <div className='form-description'>
          <label htmlFor='description'>Description:</label>
          <input
            {...register('description', { required: true })}
            className='form-control'
            type='description'
            name='description'
            id='description'
          />
        </div>
        <br />
        <div className='form-button-container'>
          <button type='submit' className='form-button'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
