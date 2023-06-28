import styles from './Basket.module.css';
import { Ordering } from './Ordering/Ordering';
import { Title } from '../../common/Title/Title';
import { constants } from '../../constants/constants';
import { useEffect, useState } from 'react';
import { CartCount } from '../Main/CartCount/CartCount';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { deleteProduct } from '../../toolkitRedux/productSlice';
import { increaseCart } from '../../toolkitRedux/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Basket = () => {

    const [basket, setBasket] = useState([]);
    const state = useSelector((state) => state.productInitial.productCount);
    const dispatch = useDispatch();


    useEffect(() => {
        const basketState = []

        state.filter((product) => {
            product.products.filter((products) => {
                if (products.cartCount > 0) {
                    products = { ...products, url: product.url };
                    basketState.push(products);
                }

            });


        });

        setBasket(basketState);
        localStorage.setItem("basket", JSON.stringify(basketState));

    }, [state])



    const removeProduct = (id, url, cartCount) => {
        const newBasket = basket.filter((el) => el.id !== id);
        setBasket(newBasket);


        basket.map((elem) => {
            if (elem.id === id)
                dispatch(increaseCart());
        })


        console.log(cartCount);
        dispatch(deleteProduct({
            id: id,
            category: url,
        }));
    }



    return (
        <div className={styles.container}>
            <Title title={constants.common.cart} />
            <div>
                {
                    basket.map(item => (


                        <div className={styles.products} key={item.id}>
                            <Link to={`/${item.url}/${item.id}`} state='true'><img className={styles.lamb} src={item.images.src} alt={item.images.alt} /></Link>
                            <div className={styles.productstitle}>
                                <h3 className={styles.name}>{item.title}</h3>
                                <span className={styles.description}>{item.description}</span>
                            </div>
                            <span className={styles.span}>{item.cartCount}</span>
                            <CartCount product={item} dispatch={dispatch}
                                category={item.url} addStyles={styles.cardcount}
                                addStyles2={styles.price}



                            />
                            <Button
                                title="X"
                                onClick={() => removeProduct(item.id, item.url)}
                                // onClick={removeProduct}
                                category={item.url}
                                addStyles={styles.delete}
                            />
                            {/* <span onClick={removeProduct} id={item.id} className={styles.delete}>X</span> */}

                        </div>
                    ))

                }
            </div>
            <Ordering basket={basket} />
        </div>
    )

}