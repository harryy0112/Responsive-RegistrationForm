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
          {errors.Name && <p>{errors.Name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Student No.</label>
          <input
            className='form-input'
            type='number'
            name='StudentNo'
            placeholder='Enter Student Number'
            autoComplete='off'
            value={values.number}
            onChange={handleChange}
          />
          {errors.StudentNo && <p>{errors.StudentNo}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Branch</label>
          <input
            className='form-input'
            type='text'
            name='Branch'
            placeholder='Enter Your Branch'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.Branch && <p>{errors.Branch}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Section</label>
          <input
            className='form-input'
            type='number'
            name='Section'
            placeholder='Enter Your Section'
            autoComplete='off'
            value={values.number}
            onChange={handleChange}
          />
          {errors.Section && <p>{errors.Section}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='Email'
            placeholder='Enter email'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.Email && <p>{errors.Email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Gender</label>
          <input
            className='form-input'
            type='text'
            name='Gender'
            placeholder='Enter Gender'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.Gender && <p>{errors.Gender}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Hosteller</label>
          <input
            className='form-input'
            type='text'
            name='Hosteller'
            placeholder=' Type YES or NO'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.Hosteller && <p>{errors.Hosteller}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>HackerRank UserName</label>
          <input
            className='form-input'
            type='text'
            name='HackerRankUserName'
            placeholder='Enter UserName'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.HackerRankUserName && <p>{errors.HackerRankUserName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Unstop UserName</label>
          <input
            className='form-input'
            type='text'
            name='UnstopUsername'
            placeholder='Enter UserName'
            autoComplete='off'
            value={values.text}
            onChange={handleChange}
          />
          {errors.UnstopUsername && <p>{errors.UnstopUsername}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
