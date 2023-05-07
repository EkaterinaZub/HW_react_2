// import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import { Logo } from '../Logo/Logo'
import { Input } from '../Input/Input'
import { Contacts } from '../Contacts/Contacts'
import {Cart} from '../Cart/Cart'


export const Header = ()=> {
    return (
        <div className={styles.container}>
        <Logo/>
        <Input/>
        <Contacts/>
        <Cart/>
        


        </div>
    )

}