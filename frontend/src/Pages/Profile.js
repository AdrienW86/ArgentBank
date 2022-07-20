import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from '../redux/actions'

function Profile() {

    const user = useSelector((state) => state.user)
    const profil = useSelector((state) => (state.user.data))
    const dispatch = useDispatch()

    let token = localStorage.getItem('token')
    let config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }

    const userProfile = () => {
        dispatch(profile(config))
    }

   useEffect(()=> {  
        userProfile()
    // eslint-disable-next-line
    },[])

    console.log(user) 
    console.log(profil)

  return (
    <>
    <Navbar />
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br /> {profil.firstName} {profil.lastName}</h1>
                <button className="edit-button">Edit Name</button>
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