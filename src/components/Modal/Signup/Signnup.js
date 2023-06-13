import styles from './Signup.module.css'
import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { FormComponent } from "../FormComponent"
// import {AppContext} from '../../../App'
import { Link, useNavigate } from 'react-router-dom';



export const Signup = () => {
    // const {showLogin, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const [userAuthData, setUserAuthData] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const handleChange = ({ target }) => {
        const { name, value } = target
        setUserAuthData({ ...userAuthData, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(auth, userAuthData.email, userAuthData.password)
            console.log(res.user)
            navigate('./signup')

        } catch (err) {
            const massage = err.massage
            setError(massage)
            console.log(err)

        }
    }

    return (
        <div>
            <div className={styles.cabinet}>
                <span className={styles.signup}>Регистрация</span>
                <FormComponent
                    onSubmit={onSubmit}
                    handleChange={handleChange}
                    error={error}
                    userAuthData={userAuthData}
                    titleButton='Зарегистрироваться'

                />
                <div className={styles.account}>
                    Already have an account? {' '}
                    <Link className={styles.link} to='/login'>
                        Login
                    </Link>
                    {/* <span className={styles.registration} >Аккаунт существующий</span> */}
                </div>
            </div>
        </div>
    )
}