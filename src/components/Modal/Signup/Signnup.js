import styles from './Signup.module.css'
import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { Modal } from "../Modal"



export const Signup = ({setShowLogin}) => {

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

        } catch (err) {
            const massage = err.massage
            setError(massage)
            console.log(err)

        }
    }

    return (
        <div>
         <div className={styles.cabinet}>
            <span>Регистрация</span>
            <Modal
                onSubmit={onSubmit}
                handleChange={handleChange}
                error={error}
                userAuthData={userAuthData}
                titleButton='Зарегистрироваться'

            />
            <div>
                    <span className={styles.registration} onClick={()=>setShowLogin(true)}>Аккаунт существующий</span>
                </div>
            </div>
        </div>
    )
}