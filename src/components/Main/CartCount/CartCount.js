import styles from "./CartCount.module.css";
import { useState  } from 'react';
import { Button } from "../../../common/Button/Button";
import {increasePrice,decreasePrice} from '../../../toolkitRedux/productSlice';
import { increaseCart, decreaseCart } from "../../../toolkitRedux/basketSlice";
import { useDispatch } from 'react-redux';


export const CartCount = ({ product,  src, addStyles, addStyles2, category, title }) => {
    const dispatch = useDispatch();
    const { cartCount, cartPrice, id, price } = product;
    const [isShowCount, setIsShowCount] = useState(!!cartCount);
    

    const handleInc = ({ currentTarget }) => {
        
        dispatch(increasePrice({  id: currentTarget.id, category: category }));
        dispatch(increaseCart());
    };

    const handleDec = ({ currentTarget }) => {

        if (cartCount === 1) {
            setIsShowCount(!isShowCount)
        } ;
        dispatch(decreaseCart());
        dispatch(decreasePrice({  id: currentTarget.id, category: category }));

    };

    function handleClick({ currentTarget }) {
        setIsShowCount(!isShowCount);
        dispatch(increasePrice({  id: currentTarget.id, category: category }));
        dispatch(increaseCart());
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
    };

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