import { useState } from "react"
import { Modal } from "../Modal"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'



export const Login = () => {

    const [userAuthData, setUserAuthData] = useState({ email: '', password: '' })
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

            }).catch(err => {
                const massage = err.massage
                setError(massage)
            })


    }

    return (
        <div>
            <Modal
                onSubmit={onLogin}
                handleChange={handleChange}
                error={error}
                userAuthData={userAuthData}

                titleButton='Войти'

            />
        </div>
    )
}