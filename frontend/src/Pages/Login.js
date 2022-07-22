import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router';
import { login } from '../redux/actions'
import { useDispatch } from 'react-redux'; 


function Login() {

  //  const user = useSelector((state) => state.user)         
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false)
  
    const userLogin = (e) => {
        const form = {
            email,
            password
        }
        e.preventDefault()
        dispatch(login(form))
        navigate('/profile')
    }

    const handleSubmit = (event) => { 
       event.preventDefault()
    }

    const handleChecked = () => {
        setChecked(!checked)
    }

    return (
    <>
    <Navbar />
        <main className="main bg-dark">
             <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form 
                     onSubmit={handleSubmit}
                >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                     <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input 
                            type="checkbox" 
                            id="remember-me" 
                            value={checked}
                            onChange={handleChecked}
                        />
                        <label htmlFor="remember-me"> Remember me </label>
                    </div>                                                 
                    <button 
                        className="sign-in-button"                           
                        onClick={userLogin}
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
