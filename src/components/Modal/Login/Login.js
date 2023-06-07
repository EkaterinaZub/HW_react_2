import styles from './Login.module.css'
import { useState } from "react"
import { FormComponent } from "../FormComponent"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
// import {AppContext} from '../../../App'
import { Link, useNavigate } from 'react-router-dom';



export const Login = () => {
    // const {showLogin, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
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
                console.log(user)
                navigate('/profile')

            }).catch(err => {
                const massage = err.massage
                setError(massage)
            })


    }

    return (
        <div className={styles.registr}>
            <div className={styles.cabinet}>
                <span className={styles.login}>Вход в личный кабинет</span>
                <FormComponent
                    userAuthData={userAuthData}
                    onSubmit={onLogin}
                    handleChange={handleChange}
                    error={error}

                    titleButton='Войти'
                />
                <div className={styles.account}>
                    No account yet? {' '}
                    <Link className={styles.link} to='/signup'>
                        Sign up
                    </Link>
                    {/* <span className={styles.registration} >Зарегистрироваться</span> */}
                    {/* onClick={() => setShowLogin(false)} */}
                </div>
            </div>
        </div>
    )
}