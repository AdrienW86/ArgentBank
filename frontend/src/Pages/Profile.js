import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Modal from '../Components/Modal';
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from '../redux/actions'

function Profile() {

   // const token = useSelector((state) => state.user.data.token)
    const profil = useSelector((state) => (state.user.data))
    const dispatch = useDispatch()

   

//console.log(user)
    const userProfile = () => {
        dispatch(profile())
    }
   
   useEffect(()=> {  
        userProfile()
       
    // eslint-disable-next-line
    },[])

  return (
    <>
    <Navbar />
        <main className="main bg-dark">
            <div className="header">              
                <h1> Welcome back </h1>  
                <Modal 
                    firstname = {profil.firstName}
                    lastname = {profil.lastName} 
                />                                  
            </div>
                 <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    <Footer />
    </>
  )
}

export default Profile