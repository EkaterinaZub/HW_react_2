import styles from './Login.module.css'
import { useState } from "react"
import { Modal } from "../Modal"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'



export const Login = ({setShowLogin}) => {

    const [userAuthData, setUserAuthData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const handleChange = ({ target }) => {
        const { name, value } = target
        setUserAuthData({ ...userAuthData, [name]: value })
        console.log(userAuthData)
    }

    const onLogin = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, userAuthData.email, userAuthData.password)
            .then(res => {
                const user = res.user
                console.log(res)

            }).catch(err => {
                const massage = err.massage
                setError(massage)
            })


    }

    return (
        <div className={styles.registr}>
            <div className={styles.cabinet}>
            <span>Вход в личный кабинет</span>
                <Modal
                    userAuthData={userAuthData}
                    onSubmit={onLogin}
                    handleChange={handleChange}
                    error={error}
                    

                    titleButton='Войти'
                />
                <div>
                    <span className={styles.registration} onClick={()=>setShowLogin(false)}>Зарегистрироваться</span>
                </div>
            </div>
        </div>
    )
}