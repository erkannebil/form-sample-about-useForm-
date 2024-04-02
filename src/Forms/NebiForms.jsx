import React from "react";
import "./NebiForms.css";
import { useForm } from "react-hook-form";

function NebiForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    alert(`Giriş yapıldı! Kullanıcı adı: ${formData.username}, Şifre: ${formData.password}, Cinsiyet: ${formData.gender}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div className="form-group">
        <p>NEBİ-FORMS</p>
        <label htmlFor="username">Kullanıcı Adı (E-posta):</label>
        <input
          {...register("username", {
            required: "Bu alan gereklidir.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Geçerli bir e-posta adresi giriniz."
            }
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          {...register("password", {
            required: "Bu alan gereklidir.",
            minLength: {
              value: 8,
              message: "Şifre en az 8 karakter olmalıdır."
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: "Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir."
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div className="form-group gender-selection">
        <p>Cinsiyet:</p>
        <div className="gender-options">
          <input
            {...register("gender", {
              required: "Cinsiyet seçimi zorunludur."
            })}
            type="radio"
            value="male"
            id="male"
          />
          <label htmlFor="male">Erkek</label>

          <input
            {...register("gender", {
              required: "Cinsiyet seçimi zorunludur."
            })}
            type="radio"
            value="female"
            id="female"
          />
          <label htmlFor="female">Kadın</label>
        </div>
        {errors.gender && <span className="error-message">{errors.gender.message}</span>}
      </div>

      <button type="submit">Giriş Yap</button>
    </form>
  );
}

export default NebiForm;
