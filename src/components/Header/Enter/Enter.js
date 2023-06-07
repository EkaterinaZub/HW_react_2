import styles from './Enter.module.css'
import profile from '../../../assest/images/profile.svg'
// import { useContext } from 'react'
// import { AppContext } from '../../../App';
// import { Login } from '../../Modal/Login/Login';
// import{Signup} from '../../Modal/Signup/Signnup'
import { Link } from 'react-router-dom';



export const Enter = ({setShowLogin}) => {

    // const {modal, setModal} = useContext(AppContext)
    // const [modal, setModal] = useState(true)
    return (
        <>
        
        <div className={styles.container}  >
            {/* <div className={styles.circle}> */}
                <img className={styles.location} src={profile} alt="profile" />
                <Link className={styles.link} to ='/signup' state ={true}> <span  className={styles.enter}>Войти</span></Link>
            {/* </div> */}
        </div>
        </>
    )

}


// onClick={()=> setModal(true)}