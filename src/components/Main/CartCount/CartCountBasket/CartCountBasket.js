import styles from './CartCountBasket.module.css'
import { Button } from '../../../../common/Button/Button'


export const CartCountBasket = ({ 
    
    handleDec,
    product,
    title,
    
    dispatch,
    src,
    addStyles,
    
    handleInc
}) => {

    const { price, cartCount,  id } = product;


    return (
        <div >
            <span className={[styles.count, addStyles].join(' ')}>{cartCount}</span>
            <div className={styles.buy}>
                <Button onClick={handleDec} addStyles={styles.sign} id={id} title='-'></Button>
                <p className={styles.price}>{price}  ₽</p>
                <Button onClick={handleInc} addStyles={styles.sign} id={id} title='+'></Button>
            </div>

        </div>
    )



}