import styles from "./CartCount.module.css";
import { useState  } from 'react';
// import { AppContext } from "../../../App";
// import buy from '../../../assest/images/buy.svg'
// import { INCREASE_PRICE, DECREASE_PRICE } from "../../../reducer/types";
import { Button } from "../../../common/Button/Button";
// import { CartCountCommon } from "./CartCountCommon/CartCountCommon";
// import { useLocation } from "react-router-dom";
// import { CartCountBasket } from "./CartCountBasket/CartCountBasket";
import {increasePrice,decreasePrice} from '../../../reducer/productReducer1'
import { increaseCart, decreaseCart } from "../../../reducer/basketReducer";
import { useDispatch } from 'react-redux';


export const CartCount = ({ product,  src, addStyles, addStyles2, category, title }) => {
    const dispatch = useDispatch()
    const { cartCount, cartPrice, id, price } = product;
    // const [state, setState] = useState(1);
    const [isShowCount, setIsShowCount] = useState(!!cartCount);
    // const { basketCaunt, setBasketCaunt } = useContext(AppContext)

    // const [price, setPrice] = useState(itemPrice)
    // const {pathname} = useLocation()
    // const isCartPage = pathname === '/basket'

    // console.log(dispatch)
    

    const handleInc = ({ currentTarget }) => {
        
        
        // dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
        dispatch(increasePrice({  id: currentTarget.id, category: category }))
        dispatch(increaseCart())
        // setBasketCaunt(basketCaunt + 1)
    };

    const handleDec = ({ currentTarget }) => {

        if (cartCount === 1) {
            setIsShowCount(!isShowCount)
        } 
        dispatch(decreaseCart())
        // setBasketCaunt(basketCaunt - 1)
        // setState(state - 1)
        // setPrice(price - itemPrice);
        dispatch(decreasePrice({  id: currentTarget.id, category: category }))

    };

    function handleClick({ currentTarget }) {
        setIsShowCount(!isShowCount)
        dispatch(increasePrice({  id: currentTarget.id, category: category }))
        dispatch(increaseCart())
        // setBasketCaunt(basketCaunt + 1)
    }

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