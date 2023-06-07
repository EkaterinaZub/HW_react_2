import styles from './FormComponent.module.css'
// import { useContext, useState } from 'react'
// import { AppContext } from '../../App'
// import { Login } from './Login/Login'


export const FormComponent = ({ titleButton, onSubmit, userAuthData, handleChange, error }) => {
    // const {modal, setModal} = useContext(AppContext)




    console.log(titleButton)


    // if ( !modal) return null


    return (
        <div className={styles.modal} >
            {/* onClick={()=> setModal(false)}  */}

            <form className={styles.content}>
                {/* onClick={(e)=> e.stopPropagation()} */}
                {error && <span className={styles.error}>{error}</span>}
                <div className={styles.content}>



                    <label htmlFor='email-address' className={styles.label}>
                        Email address:

                    </label>
                    <input className={styles.input}
                        type='email'
                        name='email'
                        id='email-address'
                        placeholder='Email address'
                        value={userAuthData.email}
                        onChange={handleChange}
                    />

                </div>

                <div className={styles.content}>
                    <label htmlFor='password' className={styles.label}>
                        Password:

                    </label>
                    <input className={styles.input}
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={userAuthData.password}
                        onChange={handleChange}
                    />
                </div>

                <button className={styles.button}
                    type="submit"
                    onClick={onSubmit}
                // title={titleButton}
                >
                    {titleButton}
                </button>
            </form>
        </div>


    )
}