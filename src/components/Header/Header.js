// import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import { Logo } from './Logo/Logo'
import { Input } from './Input/Input'
import { Contacts } from './Contacts/Contacts'
import { Cart } from './Cart/Cart'
import { Hamburger } from './Hamburger/Hamburger'
import { Enter } from './Enter/Enter'
// import { Modal } from '../Modal/Modal'
import { useContext } from 'react'
import { AppContext } from '../../App';
import { Login } from '../Modal/Login/Login';
import { Signup } from '../Modal/Signup/Signnup'



export const Header = ({ showMenu, setShowMenu }) => {
    const {modal, setModal} = useContext(AppContext)
    const {showLogin, setShowLogin} = useContext(AppContext)
    // const [modal, setModal] = useState(false)
// console.log(showLogin)
    return (
        <div className={styles.container}>
        {/* {
                
                modal &&
            <>
            {
                showLogin  
                ?<Login  setIsShowLogin = {setShowLogin}/> 
                :<Signup  setIsShowLogin = {setShowLogin}/>
            }
            </>
        } */}
            <Logo />
            <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
            <Input />
            <Contacts />
            <Enter />
            <Cart />
            {/* <Modal state='true' modal={modal} setModal={setModal}/> */}
            {/* <Modal modal={modal} setModal={setModal}/> */}

        </div>
    )

}