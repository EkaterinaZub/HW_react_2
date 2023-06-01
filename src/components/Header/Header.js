// import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import { Logo } from './Logo/Logo'
import { Input } from './Input/Input'
import { Contacts } from './Contacts/Contacts'
import { Cart } from './Cart/Cart'
import { Hamburger } from './Hamburger/Hamburger'
import { Enter } from './Enter/Enter'
// import { Modal } from '../Modal/Modal'
// import { useContext } from 'react'
// import { AppContext } from '../../../App';



export const Header = ({ showMenu, setShowMenu }) => {
    
    // const [modal, setModal] = useState(false)

    return (
        <div className={styles.container}>
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