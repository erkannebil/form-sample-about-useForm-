import React from 'react';
import { useForm } from 'react-hook-form';

const ElifForm = () => {

    const { register, handleSubmit, formState:{errors} } = useForm({
        defaultValues: {
            cityname: '',
            phone: "0",
        }


    });

    const onSubmit = (formData) => {
        console.log(formData);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="cityname">Şehir Adı:</label>
                <input
                    type="text"
                    {...register("cityname", {
                        required:"şehir ismi yazınız"
                    })}
                />
                {errors.cityname&& errors.cityname.message}
            </div>
            <div>
                <label htmlFor="phone"> telefon:</label>
                <input
                    type="number"
                    {...register("phone", {required: "telefon Giriniz.",
                        minLength:{
                            value:10,
                            message:"telefon en az 10 karakter olsun",
                        }
                    })}
                />
                  {errors.phone && errors.phone.message}
            </div>
            <button type="submit">Gönder</button>
        </form>
    );
};

export default ElifForm;
