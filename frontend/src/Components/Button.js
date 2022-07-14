import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { isDeconnected } from '../redux/reducers/loginReducer';

function Button() {

    const isAuth = useSelector((state) => state.login.value)
    const dispatch = useDispatch()

  return (
    <>  
      {isAuth?    
        <Link
            onClick={() => dispatch(isDeconnected())}
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