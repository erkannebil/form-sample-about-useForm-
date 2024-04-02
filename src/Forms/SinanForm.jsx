import { useForm } from 'react-hook-form';
const SinanForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            color: "#7FFFD4",
            username: "Egemen Reis",
            email: "egemen@reis.com"

        }
    });

    const onSubmit = (formData) => {
        console.log("SinanForm", formData)


    }

    const checkPassword = (e)=>{
        console.log("onKeyUp");
        let confirmation= document.getElementById("confirmation").value
        let password= document.getElementById("password").value;
        let errorMessage = document.getElementById("passwordMatchError");
        if(confirmation !== password) {
            console.log(confirmation);
            errorMessage.innerHTML = "Passwords do not match"
        } else {
            errorMessage.innerHTML = ""
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <label htmlFor="username">Daha da kanmam basit o numaralar...</label>
                <input placeholder='Enter username' id="username" type="text"
                    {...register("username",
                        {
                            required:"hatalı alan",
                            minLength: { value: 5, message: "Username must be at least 5 characters" },
                            maxLength: { value: 10, message: "Username cannot exceed 10 characters" }
                        }
                    )} />
                <div>{
                errors.username && 
                
                `Errors: ${errors.username.message}`}</div>
                <label htmlFor="email">E-mail</label>
                <input placeholder='Enter e-mail' id="email" type="email"
                    {...register("email",
                        {
                            required: true,
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                        })} />
                <div>{errors.email && errors.email.message}</div>
                <label htmlFor="password">Password</label>
                <input placeholder='Enter password' id="password" type="password"
                {...register("password",
                        {
                            required: true,
                            minLength: { value: 10, message: "password at least 10 characters long" }
                        })
                } />
                <div>{errors.password && errors.password.message}</div>
                <label htmlFor="confirmation">Confirm Password</label>
                <input placeholder='Confirm password' id="confirmation" type="password" onKeyUp={checkPassword}
                {...register("confirmation",
                    {
                        required: true,
                        minLength: { value: 10, message: "password at least 10 characters long" }
                    }
                )} />
                <div>{errors.confirmation && errors.confirmation.message}</div>
                <div id='passwordMatchError'></div>
                <label htmlFor="color">Herkes Rengini Seçsin</label>
                <input id="color" type="color" {...register("color")} />
                <label htmlFor="file">File Upload</label>
                <input id="file" type="file" {...register("file")} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SinanForm