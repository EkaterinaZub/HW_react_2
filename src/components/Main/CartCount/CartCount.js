import styles from "./CartCount.module.css";
import { useState } from 'react'
import buy from '../../../assest/images/buy.svg'
import { INCREASE_PRICE, DECREASE_PRICE } from "../../../reducer/types";



export const CartCount = ({ itemPrice, dispatch, category, id, cartCount, price }) => {
    // const [state, setState] = useState(1);
    const [isShowCount, setIsShowCount] = useState(false);
    // const [price, setPrice] = useState(itemPrice)
   

    const handleInc = ({currentTarget}) => {
        
        // setState(state + 1)
        // setPrice(price + itemPrice);
        dispatch ({type:INCREASE_PRICE, id: currentTarget.id, category: category})
    };

    const handleDec = ({currentTarget}) => {
       
        if (cartCount === 1) {
            setIsShowCount(!isShowCount)
        } else {
            // setState(state - 1)
            // setPrice(price - itemPrice);
            dispatch ({type:DECREASE_PRICE, id: currentTarget.id, category: category})
        }
    };

    function handleClick() {
        setIsShowCount(!isShowCount)

    }

    if (isShowCount) {

        return (
            <div >
                <span className={styles.count}>{cartCount}</span>
                <div className={styles.buy}>
                    <button onClick={handleDec} className={styles.sign} id={id}>-</button>
                    <p className={styles.price}>{itemPrice}  ₽</p>
                    <button onClick={handleInc} className={styles.sign} id={id}>+</button>
                </div>

            </div>
        )
    }

    return (
        <>
            <p className={styles.price}>{price} ₽</p>
            
            <button className={styles.button} onClick={handleClick}> В корзину <img src={buy} alt='buy' /> </button>
        </>
    )
}