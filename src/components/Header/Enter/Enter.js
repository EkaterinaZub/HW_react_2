import styles from './Enter.module.css'
import profile from '../../../assest/images/profile.svg'
import { Link } from 'react-router-dom';



export const Enter = () => {
    
    return (
        <>
        
        <div className={styles.container}  >
            
                <img className={styles.location} src={profile} alt="profile" />
                <Link className={styles.link} to ='/signup' state ={true}> <span  className={styles.enter}>Войти</span></Link>
            
        </div>
        </>
    )

}
