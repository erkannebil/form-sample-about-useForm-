import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const HocaForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      name :""
    }
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>

        <label htmlFor="email">E-mail:</label>
        <input
          className='form-control'
          type="email"
          {
            ...register("email", {
              required:"emaili düzgün giriniz"
            })
          }
        />
        {errors.email && errors.email.message}
        <label htmlFor="name">Kullanıcı Adı:</label>
        <input
          className='form-control'
          type="text"
          {
            ...register("name", {
              required:"zorunlu alan"
            })
          }
        />
        {errors.name && errors.name.message}
      </div>
      <div className='errorDiv'>
    
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default HocaForm;
