
import styles from './Header.module.css'
import { Logo } from './Logo/Logo'
import { Input } from './Input/Input'
import { Contacts } from './Contacts/Contacts'
import { Cart } from './Cart/Cart'
import { Hamburger } from './Hamburger/Hamburger'
import { Enter } from './Enter/Enter'




export const Header = ({ showMenu, setShowMenu }) => {
    
    return (
        <div className={styles.container}>
        
            <Logo />
            <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
            <Input />
            <Contacts />
            <Enter />
            <Cart />
            

        </div>
    )

}