import styles from "./CartCount.module.css";
import { useState } from 'react'
import buy from '../../../assest/images/buy.svg'


export const CartCount = ({ itemPrice }) => {
    const [state, setState] = useState(1);
    const [isShowCount, setIsShowCount] = useState(false);
    const [price, setPrice] = useState(itemPrice)
   

    const handleInc = () => {
        setState(state + 1)
        setPrice(price + itemPrice);
    };

    const handleDec = () => {
        if (state === 1) {
            setIsShowCount(!isShowCount)
        } else {
            setState(state - 1)
            setPrice(price - itemPrice);
        }
    };

    function handleClick() {
        setIsShowCount(!isShowCount)

    }

    if (isShowCount) {

        return (
            <div >
                <span className={styles.count}>{state}</span>
                <div className={styles.buy}>
                    <button onClick={handleDec} className={styles.sign}>-</button>
                    <p className={styles.price}>{price}  ₽</p>
                    <button onClick={handleInc} className={styles.sign}>+</button>
                </div>

            </div>
        )
    }

    return (
        <>
            <p className={styles.price}>{itemPrice} ₽</p>
            <button className={styles.button} onClick={handleClick}> В корзину <img src={buy} /> </button>
        </>
    )
}