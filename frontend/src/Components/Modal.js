import React, { useState } from 'react';

function Modal(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [toggle, setToggle ] = useState(true)

    const toggleBtn = () => {
        setToggle(false)
    }

    //const userUpdate = () => {
        
        
        //  dispatch(update(config, firstName, lastName ))
   // }


    const resetForm = () => {
        setFirstName("")
        setLastName("")
        setToggle(true)
    }

  return (
    <>
    {toggle 
        ?
            <section>
                <div className='welcome'> {props.firstname} {props.lastname}</div> 
                <button 
                    className="edit-button"
                    onClick={toggleBtn}                  
                >                
                    Edit Name
                </button>
            </section>             
        :
            <form className='modal' >
              <div className='input-container'>
                <input 
                    className='modal-input'
                    type="text" 
                    id="username" 
                    placeholder={props.firstname}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                    className='modal-input'
                    type="text" 
                    id="username" 
                    placeholder={props.lastname}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />   
              </div>
              <div className='btn-container'>
                <button
                    className='modal-btn'
                    type='submit' 
                >
                    Save
                </button>  
                <button
                    className='modal-btn'
                    type='button'
                    onClick={resetForm}
                >
                    Cancel 
                </button>
              </div>      
        </form>
    }
    </>
   
  )
}

export default Modal