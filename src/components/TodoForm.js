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
        <label htmlFor='text'>Text:</label>
        <input
          {...register('text', { required: true })}
          className='form-control'
          type='text'
          name='text'
          id='text'
        />
        <label htmlFor='description'>Description:</label>
        <input
          {...register('description', { required: true })}
          className='form-control'
          type='description'
          name='description'
          id='description'
        />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-primary'>
          Save
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
