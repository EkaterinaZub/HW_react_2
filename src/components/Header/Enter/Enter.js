import styles from './Enter.module.css'
import profile from '../../../assest/images/profile.svg'
import { useContext } from 'react'
import { AppContext } from '../../../App';
import { Login } from '../../Modal/Login/Login';
import{Signup} from '../../Modal/Signup/Signnup'



export const Enter = ({setShowLogin}) => {

    const {modal, setModal} = useContext(AppContext)
    // const [modal, setModal] = useState(true)
    return (
        <>
        {
                
            modal &&
        <>
        {
            setShowLogin  
            ?<Login  setIsShowLogin = {setShowLogin}/> 
            :<Signup  setIsShowLogin = {setShowLogin}/>
        }
        </>
    }
        <div className={styles.container} onClick={()=> setModal(true)} >
            {/* <div className={styles.circle}> */}
                <img className={styles.location} src={profile} alt="profile" />
                <span className={styles.enter}>Войти</span>
            {/* </div> */}
        </div>
        </>
    )

}