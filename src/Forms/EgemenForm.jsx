import React from "react";
import { useForm } from "react-hook-form";
import "./EgemenForm.css"

const EgemenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          type="radio"
          value="Male"
          {...register("gender", { required: "Please select a gender!" })}
        />{" "}
        Male
      </label>
      <label>
        <input type="radio" value="Female" {...register("gender")} /> Female
      </label>
      <label>
        <input
          type="radio"
          value="Do not want to reveal"
          {...register("gender")}
        />{" "}
        Do not want to reveal
      </label>
      {errors.gender && <p className="fadeOut">{errors.gender.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EgemenForm;
