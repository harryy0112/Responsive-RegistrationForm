import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='Name'
            placeholder='Enter Name'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Roll Number</label>
          <input
            className='form-input'
            type='number'
            name='number'
            placeholder='Enter University roll'
            autoComplete='off'
            overflow-y='auto'
            value={values.number}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Student No.</label>
          <input
            className='form-input'
            type='number'
            name='number'
            placeholder='Enter Student no.'
            autoComplete='off'
            value={values.number}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Branch</label>
          <input
            className='form-input'
            type='text'
            name='text'
            placeholder='Branch'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Section</label>
          <input
            className='form-input'
            type='text'
            name='section'
            placeholder='Enter Section'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter Email'
            autoComplete='off'
            value={values.email}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>HackerRank Username</label>
          <input
            className='form-input'
            type='text'
            name='HackerRank'
            placeholder='Enter username'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
