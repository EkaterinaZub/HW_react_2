import styles from './Modal.module.css'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
// import { Login } from './Login/Login'


export const Modal = ({titleButton,onSubmit, userAuthData, handleChange,error})=>{
    const {modal, setModal} = useContext(AppContext)

    

    
    console.log(userAuthData)
    
    
    if (! modal) return null
    
    return(
        <div className={styles.modal} onClick={()=> setModal(false)}>
        {/* <div className={styles.content} onClick={(e)=> e.stopPropagation()}> */}
        <form className={styles.content} onClick={(e)=> e.stopPropagation()}>
        
            <div className={styles.content}>
            

            {error && <span className={styles.error}>{error}</span>}
                <label htmlFor='email-address'>
                Email address:

                </label>
                <input
                type='email'
                name='email'
                id='email-address'
                placeholder='Email address'
                // value={userAuthData.email}
                onChange={handleChange}
                />
                
            </div>

            <div className={styles.content}>
                <label htmlFor='password'>
                Password:

                </label>
                <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                // value={userAuthData.password}
                onChange={handleChange}
                />
            </div>
             
            <button className={styles.button}
            type="submit"
            onClick={onSubmit}
            >
            {titleButton}
            </button>
        </form>
        </div>

        // </div>
    )
}