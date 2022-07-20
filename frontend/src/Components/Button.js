import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

function Button() {

  const isAuth = localStorage.getItem("isAuth")
  const navigate = useNavigate()

  function deconnexion (){
    localStorage.clear()
    navigate('/')
  }



  
  return (
    <>  
      {isAuth?    
        <Link
            onClick={deconnexion}
            className="main-nav-item"
            to={"/"}>
            <i className="fa fa-sign-out"></i>
             Sign Out
        </Link>  
      :           
        <Link 
            className="main-nav-item" 
            to={"/login"}>
            <i className="fa fa-user-circle"></i>
            Sign In
        </Link>  
      }         
    </>
  )
}
export default Button