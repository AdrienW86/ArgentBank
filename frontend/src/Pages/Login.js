import React, { useEffect } from 'react';
import Navbar from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router';
import { login , profile } from '../redux/actions'
import { useDispatch } from 'react-redux'; 
import { useForm } from "react-hook-form";

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const onFormSubmit = data => (dispatch(login(data)))
    const onErrors = errors => console.error(errors)

   // const [checked, setChecked] = useState(false)

    const { register, handleSubmit, formState: {errors} } = useForm()
   
 
    useEffect(()=> {
        if(token) {
            dispatch(profile(token))
            navigate('/profile')
        }
    }, [token, dispatch, navigate])

   // const handleChecked = () => {
     //   setChecked(!checked)
  //  }

   
    return (
    <>
    <Navbar />
        <main className="main bg-dark">
             <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form 
                     onSubmit={handleSubmit(onFormSubmit, onErrors)}
                >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input {...register('email',{required: "email is required"})}
                            type="text" 
                            id="username" 
                           
                        />
                        {errors?.email && <p style={{ color: 'red', margin: 0}}>{errors.email.message}</p>}
                    </div>
                     <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input {...register("password", {required: "password is required"})}
                            type="password" 
                            id="password" 
                           
                        />
                        {errors?.password && <p style={{ color: 'red', margin: 0}}>{errors.password.message}</p>}
                    </div>
                    <div className="input-remember">
                        <input 
                            type="checkbox" 
                            id="remember-me"                           
                        />
                        <label htmlFor="remember-me"> Remember me </label>
                    </div>                                                 
                    <button type='submit'
                        className="sign-in-button"                      
                    > 
                        Sign In 
                    </button>                                  
                </form>
            </section>
        </main>
    <Footer />
    </>
  )
}

export default Login
