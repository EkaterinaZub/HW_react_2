import styles from "./CartCount.module.css";
import { useState,useContext } from 'react';
import { AppContext } from "../../../App";
import buy from '../../../assest/images/buy.svg'
import { INCREASE_PRICE, DECREASE_PRICE } from "../../../reducer/types";
import { Button } from "../../../common/Button/Button";



export const CartCount = ({ itemPrice, dispatch, src, addStyles, category, id, cartCount, price, title }) => {
    // const [state, setState] = useState(1);
    const [isShowCount, setIsShowCount] = useState(!!cartCount);
    const {basketCaunt, setBasketCaunt} = useContext(AppContext)
    // const [price, setPrice] = useState(itemPrice)


    const handleInc = ({ currentTarget }) => {

        // setState(state + 1)
        // setPrice(price + itemPrice);
        dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
        setBasketCaunt(basketCaunt+1)
    };

    const handleDec = ({ currentTarget }) => {

        if (cartCount === 1) {
            setIsShowCount(!isShowCount)
        } setBasketCaunt(basketCaunt-1)
            // setState(state - 1)
            // setPrice(price - itemPrice);
            dispatch({ type: DECREASE_PRICE, id: currentTarget.id, category: category })
            
    };

    function handleClick({currentTarget}) {
        setIsShowCount(!isShowCount)
        dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
        setBasketCaunt(basketCaunt+1)
    }

    if (isShowCount) {

        return (
            <div >
                <span className={[styles.count,addStyles].join(' ')}>{cartCount}</span>
                <div className={styles.buy}>
                    <Button onClick={handleDec} addStyles={styles.sign} id={id} title='-'></Button>
                    <p className={styles.price}>{itemPrice}  ₽</p>
                    <Button onClick={handleInc} addStyles={styles.sign} id={id} title='+'></Button>
                </div>

            </div>
        )
    }

    return (
        <>
            <p className={styles.price}>{price} ₽</p>

            <Button
                onClick={handleClick}
                title={title}
                id={id}
                addStyles={styles.button}
                icon={src}>
                
            </Button>
        </>
    )
}