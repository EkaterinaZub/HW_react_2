// import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import { Logo } from './Logo/Logo'
import { Input } from './Input/Input'
import { Contacts } from './Contacts/Contacts'
import {Cart} from './Cart/Cart'
import { Hamburger } from './Hamburger/Hamburger'



export const Header = ({showMenu, setShowMenu})=> {
    return (
        <div className={styles.container}>
        <Logo/>
        <Hamburger showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Input/>
        <Contacts/>
        <Cart/>
        
        


        </div>
    )

}