import { Link } from 'react-router-dom'
import styles from './Cart.module.css'
// import { useContext } from 'react'
// import { AppContext } from '../../../App'
import { constants } from '../../../constants/constants'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { setCookies } from '../../../toolkitRedux/productSlice'

export const Cart = () => {
    
    const basketCaunt = useSelector((state)=> state.basketInitial.basketCount)
    
    
    
    
    return (
        <Link to={constants.routs.basket} state='false' className={styles.container}>
            <div className={styles.containerCart}>
                <span className={styles.cart}>{constants.common.cart}</span>
            </div>
            <div className={styles.containerCircle}>
                <div className={styles.cirkle}>{basketCaunt}</div>
            </div>
        </Link>
    )

}