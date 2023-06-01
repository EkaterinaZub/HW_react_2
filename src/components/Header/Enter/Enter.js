import styles from './Enter.module.css'
import profile from '../../../assest/images/profile.svg'
import { useContext } from 'react'
import { AppContext } from '../../../App';



export const Enter = () => {

    const {modal, setModal} = useContext(AppContext)
    // const [modal, setModal] = useState(true)
    return (
        <div className={styles.container} onClick={()=> setModal(true)} >
            {/* <div className={styles.circle}> */}
                <img className={styles.location} src={profile} alt="profile" />
                <span className={styles.enter}>Войти</span>
            {/* </div> */}
        </div>
    )

}