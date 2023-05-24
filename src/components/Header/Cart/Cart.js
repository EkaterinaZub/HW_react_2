import { Link } from 'react-router-dom'
import styles from './Cart.module.css'

export const Cart = () => {
    return (
        <Link to='/basket' state='true' className={styles.container}>
            <div className={styles.containerCart}>
                <span className={styles.cart}>Корзина</span>
            </div>
            <div className={styles.containerCircle}>
                <div className={styles.cirkle}>4</div>
            </div>
        </Link>
    )

}