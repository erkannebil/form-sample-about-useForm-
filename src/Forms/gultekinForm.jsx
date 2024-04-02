import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import  './gultekinForm.css'

const GultekinForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

const onSubmit = (data) => {
    console.log(data); 
};

  return (
    <>
 <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:
          <input
            type="text"
            id="name-gultekin"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
          />
        </label>
        {errors.name && <span  className="errorDiv">{errors.name.message}</span>}

        <label>Email:
          <input
            type="email"
            id="email-gultekin"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please enter a valid email address",
              },
            })}
          />
        </label>
        {errors.email && <span  className="errorDiv">{errors.email.message}</span>}

        <button type="submit" disabled={errors.name || errors.email}>
          Submit
        </button>
    </form>
    </>
  )
}

export default GultekinForm;