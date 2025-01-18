import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const FullForm = () => {
 
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Centralized validation rules
  const validationRules = {
    text: {
      required: 'This field is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
      minLength: {
        value: 3,
        message: 'Must be at least 3 characters',
      },
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Invalid email format',
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Must be at least 8 characters',
      },
      validate: (value) =>
        /[A-Z]/.test(value) || 'Must include at least one uppercase letter',
    },
    number: {
      required: 'Number is required',
      min: {
        value: 1,
        message: 'Number must be greater than 0',
      },
    },
    date: {
      required: 'Date is required',
    },
    checkbox: {
      required: 'You must agree to continue',
    },
    select: {
      required: 'Please select an option',
    },
    file: {
      required: 'File upload is required',
    },
  };

  const onSubmit = (data) => {
    console.log(data); // Log valid data
    reset(); // Reset form values and errors
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">React Hook Form with All Input Types</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {/* Text Input */}
        <div className="mb-3">
          <label className="form-label">Name (Text)</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Enter your name"
            {...register('name', validationRules.text)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter your email"
            {...register('email', validationRules.email)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter your password"
            {...register('password', validationRules.password)}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        {/* Number Input */}
        <div className="mb-3">
          <label className="form-label">Age (Number)</label>
          <input
            type="number"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            placeholder="Enter your age"
            {...register('age', validationRules.number)}
          />
          {errors.age && <div className="invalid-feedback">{errors.age.message}</div>}
        </div>

        {/* Date Input */}
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className={`form-control ${errors.date ? 'is-invalid' : ''}`}
            {...register('date', validationRules.date)}
          />
          {errors.date && <div className="invalid-feedback">{errors.date.message}</div>}
        </div>

        {/* Radio Buttons */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <input
              type="radio"
              id="male"
              value="Male"
              {...register('gender', { required: 'Please select a gender' })}
            />
            <label htmlFor="male" className="ms-2 me-3">
              Male
            </label>
            <input
              type="radio"
              id="female"
              value="Female"
              {...register('gender', { required: 'Please select a gender' })}
            />
            <label htmlFor="female" className="ms-2">Female</label>
          </div>
          {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
        </div>

        {/* Checkbox */}
        <div className="mb-3">
          <input
            type="checkbox"
            id="agree"
            {...register('agree', validationRules.checkbox)}
          />
          <label htmlFor="agree" className="ms-2">
            I agree to the terms and conditions
          </label>
          {errors.agree && <div className="text-danger">{errors.agree.message}</div>}
        </div>

        {/* Select Dropdown */}
        <div className="mb-3">
          <label className="form-label">Country</label>
          <select
            className={`form-control ${errors.country ? 'is-invalid' : ''}`}
            {...register('country', validationRules.select)}
          >
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && <div className="invalid-feedback">{errors.country.message}</div>}
        </div>

        {/* File Upload */}
        <div className="mb-3">
          <label className="form-label">Upload File</label>
          <input
            type="file"
            className={`form-control ${errors.file ? 'is-invalid' : ''}`}
            {...register('file', validationRules.file)}
          />
          {errors.file && <div className="invalid-feedback">{errors.file.message}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FullForm;
