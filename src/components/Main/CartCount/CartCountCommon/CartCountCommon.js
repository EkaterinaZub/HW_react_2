import styles from './CartCountCommon.module.css'
import { Button } from '../../../../common/Button/Button'
import { INCREASE_PRICE} from "../../../../reducer/types";
import { useContext } from 'react';
import { AppContext } from "../../../../App";

export const CartCountCommon = ({
    handleClick,
    handleDec,
    product,
    title,
    dispatch,
    category,
    src,
    addStyles,
    isShowCount,
     }) => {
        const {basketCaunt, setBasketCaunt} = useContext(AppContext)
        const handleInc = ({ currentTarget }) => {

            // setState(state + 1)
            // setPrice(price + itemPrice);
            dispatch({ type: INCREASE_PRICE, id: currentTarget.id, category: category })
            setBasketCaunt(basketCaunt + 1)
        };

        
    const { price, cartCount, id } = product;

    

    if (isShowCount) {

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