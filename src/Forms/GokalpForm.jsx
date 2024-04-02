import { useForm } from "react-hook-form";
import  './gokalpForm.css'
const GokalpForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{
            "favorite-city":"Trabzon"
            
        
        }
    });
    const onSubmit = (formData) => {
        console.log(formData);
      };

    return(
        <>
        <div >
            <form onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="username">Name:
                    <input type="text" {...register("name")}/>
                </label>
                <label htmlFor="lastname">Surname:
                    <input type="text" {...register("lastname")}/>
                </label>
                <label htmlFor="city">City:
                    <input type="text" {...register("city")}/>
                </label>
                <label htmlFor="city">Favorite City:
                     <select {...register("city",{required:"Hiçbir şehri sevmiyor olamazsın kardeşim yaz bir şeyler"})}>
                         <option value="trabzon">Trabzon</option>
                         <option value="istanbul">İstanbul</option>
                         <option value="izmir">İzmir</option>
                    </select>
                </label>

                <label htmlFor="age">Age:
                    <input type="number" {...register("age", {required: "Yaşınızı Giriniz.", max : {value:61, message:"Lütfen daha küçük bir değer giriniz."}})}/>
                </label>
                <label htmlFor="email">Email:
                    <input type="email" {...register("email")}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            {errors.age && errors.age.message}
            {errors["favorite-city"] && errors["favorite-city"].message}
        </div>
        </>
    )
}

export default GokalpForm