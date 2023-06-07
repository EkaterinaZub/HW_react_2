import styles from "./CartCount.module.css";
import { useState, useContext } from 'react';
import { AppContext } from "../../../App";
import buy from '../../../assest/images/buy.svg'
import { INCREASE_PRICE, DECREASE_PRICE } from "../../../reducer/types";
import { Button } from "../../../common/Button/Button";
import { CartCountCommon } from "./CartCountCommon/CartCountCommon";
import { useLocation } from "react-router-dom";
import { CartCountBasket } from "./CartCountBasket/CartCountBasket";



export const CartCount = ({ product, dispatch, src, addStyles, addStyles2, category, title }) => {

    const { cartCount, cartPrice, id, price } = product;
    // const [state, setState] = useState(1);
    const [isShowCount, setIsShowCount] = useState(!!cartCount);
    const { basketCaunt, setBasketCaunt } = useContext(AppContext)
    // const [price, setPrice] = useState(itemPrice)
    // const {pathname} = useLocation()
    // const isCartPage = pathname === '/basket'

    // console.log(dispatch)


    const handleInc = ({ currentTarget }) => {
        console.log(id);
        // setState(state + 1)
        // setPrice(price + itemPrice);
        dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
        setBasketCaunt(basketCaunt + 1)
    };

    const handleDec = ({ currentTarget }) => {

        if (cartCount === 1) {
            setIsShowCount(!isShowCount)
        } setBasketCaunt(basketCaunt - 1)
        // setState(state - 1)
        // setPrice(price - itemPrice);
        dispatch({ type: DECREASE_PRICE, id: currentTarget.id, category: category })

    };

    function handleClick({ currentTarget }) {
        setIsShowCount(!isShowCount)
        dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
        setBasketCaunt(basketCaunt + 1)
    }

    // return(
    //     <>
    //     {
    //         isCartPage ?
    //         <CartCountBasket
    //             handleClick={handleClick}
    //     handleDec={handleDec}
    //     product={product}
    //     dispatch={dispatch}
    //     src={src}
    //     addStyles={addStyles}
    //     handleInc={handleInc}


    //         /> :


    //     <CartCountCommon
    //     handleClick={handleClick}
    //     handleDec={handleDec}
    //     product={product}
    //     dispatch={dispatch}
    //     src={src}
    //     addStyles={addStyles}
    //     isShowCount={isShowCount}
    //     category={category}
    //     />

    //     }
    //     </>
    // )

    if (isShowCount) {

        return (
            <div >
                <span className={[styles.count, addStyles].join(' ')}>{cartCount}</span>
                <div className={styles.buy}>
                    <Button onClick={handleDec} addStyles={styles.sign} id={id} title='-'></Button>
                    <p className={[styles.price, addStyles2].join(' ')}>{cartPrice}  ₽</p>
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