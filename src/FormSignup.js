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
            name='name'
            placeholder='Enter Name'
            autoComplete='off'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Student No.</label>
          <input
            className='form-input'
            type='number'
            name='studentNo'
            placeholder='Enter Student Number'
            autoComplete='off'
            value={values.studentNo}
            onChange={handleChange}
          />
          {errors.studentNo && <p>{errors.studentNo}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Branch</label>
          <input
            className='form-input'
            type='text'
            name='branch'
            placeholder='Enter Your Branch'
            autoComplete='off'
            value={values.branch}
            onChange={handleChange}
          />
          {errors.branch && <p>{errors.branch}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Section</label>
          <input
            className='form-input'
            type='number'
            name='section'
            placeholder='Enter Your Section'
            autoComplete='off'
            value={values.section}
            onChange={handleChange}
          />
          {errors.section && <p>{errors.section}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Enter email'
            autoComplete='off'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Gender</label>
          <input
            className='form-input'
            type='text'
            name='gender'
            placeholder='Enter Gender'
            autoComplete='off'
            value={values.gender}
            onChange={handleChange}
          />
          {errors.gender && <p>{errors.gender}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Hosteller</label>
          <input
            className='form-input'
            type='text'
            name='hosteller'
            placeholder=' Type YES or NO'
            autoComplete='off'
            value={values.hosteller}
            onChange={handleChange}
          />
          {errors.hosteller && <p>{errors.hosteller}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>HackerRank UserName</label>
          <input
            className='form-input'
            type='text'
            name='hackerRankUserName'
            placeholder='Enter UserName'
            autoComplete='off'
            value={values.hackerRankUserName}
            onChange={handleChange}
          />
          {errors.hackerRankUserName && <p>{errors.hackerRankUserName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Unstop UserName</label>
          <input
            className='form-input'
            type='text'
            name='unstopUsername'
            placeholder='Enter UserName'
            autoComplete='off'
            value={values.unstopUsername}
            onChange={handleChange}
          />
          {errors.unstopUsername && <p>{errors.unstopUsername}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
