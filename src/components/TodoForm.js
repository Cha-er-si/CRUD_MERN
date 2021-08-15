import React from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : '' },
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
