import styles from './Profile.module.css'
import { Title } from '../../common/Title/Title'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)

            }
            //  else {
            //     console.log('user is logged out')
            //     navigate('/signup')
            // }
        })

    }, [])

    const handleLogout = async () => {
        await signOut(auth).then(() => {
            navigate('/')
            console.log('Signed out successfully')

        }).catch(err => {
            const massage = err.massage
            setError(massage)
        })
    }
    return (
        <div className={styles.share}>
            <div className={styles.cabinet}>
                <Title title='Личный кабинет' />
                <button className={styles.button} onClick={handleLogout}>выйти</button>
                {error && <span className={styles.error}>Something went wrong</span>}
            </div>
            {/* <Modal/> */}
        </div>
    )
}