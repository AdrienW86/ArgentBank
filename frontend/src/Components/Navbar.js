import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Navbar() {

  const profil = useSelector((state) => (state.profil))
  const isAuth = localStorage.getItem("isAuth")
  const navigate = useNavigate()
  
  const deconnexion = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>  
      {isAuth?  
        <div className='profil'>
          <i className="fa fa-user-circle"></i> 
          <div className='profil-name'> {profil.data.firstName} </div>    
         <Link
            onClick={deconnexion}
            className="main-nav-item"
            to={"/"}
          >         
          <i className="fa fa-sign-out"></i>
            Sign Out
        </Link>  
        </div>       
      :           
        <Link 
            className="main-nav-item" 
            to={"/login"}
        >
            <i className="fa fa-user-circle"></i>
            Sign In
        </Link>  
      }         
    </>
  )
}
export default Navbar