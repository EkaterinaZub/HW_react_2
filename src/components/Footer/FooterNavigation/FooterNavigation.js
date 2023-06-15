import { Link } from 'react-router-dom'
import styles from './FooterNavigation.module.css'

export const FooterNavigation = ({ showMenu, setShowMenu }) => {
    return (
        <div className={[styles.container, showMenu ? styles.navHeader : ''].join(' ')}>
            <div className={styles.cross} onClick={() => setShowMenu(!showMenu)}>X</div>
            <Link className={styles.item} to={'/about_the_restaurant'}>О ресторане</Link>
            <Link className={styles.item} to={'/conditions'} state='false'>Условия доставки</Link>
            <Link className={styles.item} to={'/return'}>Возврат товара</Link>
            <Link className={styles.item} to={'/stock'}>Акции</Link>

        </div>
    )

}