import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const CreateTodo = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    history.push('/');
  });

  return (
    <div className='container'>
      <div className='mt-3'>
        <h1>Create Todo Item</h1>
        <form onSubmit={onSubmit}>
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
              Create Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
