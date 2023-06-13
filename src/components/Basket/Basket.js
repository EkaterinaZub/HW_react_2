import styles from './Basket.module.css'
import { Ordering } from './Ordering/Ordering'
import { Title } from '../../common/Title/Title'
import { constants } from '../../constants/constants'
import {  useEffect, useState } from 'react'
// import { AppContext } from '../../App'
import { CartCount } from '../Main/CartCount/CartCount'
import { Link } from 'react-router-dom';
// import { DELETE_PRODUCT } from '../../reducer/types'
import { Button } from '../../common/Button/Button'
import { deleteProduct } from '../../reducer/productReducer1'
import { increaseCart } from '../../reducer/basketReducer'
// import {shopping} from '../../assest/images/shopping.svg'
import { useDispatch, useSelector } from 'react-redux';

export const Basket = () => {
    // const { basketCaunt, setBasketCaunt } = useContext(AppContext)
    const [basket, setBasket] = useState([])
    const state = useSelector((state)=>state.productInitial.productCount)
    // const basketCaunt = useSelector((state)=>state.basketInitial.basketCount)
    const dispatch = useDispatch()
    

    useEffect(() => {
        const basketState = []
        // console.log(basketState)
        state.filter((product) => {
            
            product.products.filter((products) => {
                // console.log(products)
                if (products.cartCount > 0) {
                
                    products = { ...products, url: product.url };
                    basketState.push(products);
                }

            });


        });

       

        setBasket(basketState)
       
    }, [state ])

   

    const removeProduct = (id, url, cartCount) => {
        const newBasket = basket.filter((el) => el.id !== id)
        setBasket(newBasket)


        basket.map((elem) => {
            if (elem.id === id)
            dispatch(increaseCart())
                // setBasketCaunt(basketCaunt - elem.cartCount)
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
                                onClick={() =>removeProduct(item.id, item.url)}
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