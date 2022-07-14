import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux'
import { isConnected } from '../redux/reducers/loginReducer';
import { Link } from 'react-router-dom';


function Login() {

    const isAuth = useSelector((state) => state.login.value)
    const dispatch = useDispatch()
    console.log(isAuth)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false)
   

   // console.log("nom de l'utilisiteur:" + username)
   // console.log("mot de passe de l'user :" + password)
   // console.log("souhaite rester connecté :" + checked)
    
     function handleSubmit(event) {
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
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
                    <Link
                          to={"/profile"}>             
                        <button 
                            className="sign-in-button"
                            onClick={() => dispatch(isConnected())}
                        > Sign In </button>  
                    </Link>                                 
                </form>
            </section>
        </main>
    <Footer />
    </>
  )
}

export default Login
