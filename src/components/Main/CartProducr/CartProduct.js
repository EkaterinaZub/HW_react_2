import styles from './CartProduct.module.css'
import { Title } from '../../../common/Title/Title'
import { initialState } from '../../../reducer/initialState';
import { useContext, useReducer } from 'react';
import productReducer from '../../../reducer/productReducer';
import { useParams } from 'react-router-dom';
// import lamb from '../../../assest/images/lamb.png'
import shopping from '../../../assest/images/shopping.svg'
// import { Button } from '../../../common/Button/Button';
import {CartCount} from '../CartCount/CartCount'
import { AppContext } from '../../../App';



export const CartProduct = () => {
    // const [product, setproduct] = useState(initialState)
    const {stat, dispatch} = useContext(AppContext)

    const { id, url} = useParams()
    // console.log(url)
const {products} = stat.find(el =>el.url === url  );
    // console.log(products)
    const {description, title, images, cartPrice,  cartCount, id: productId, weigt, price, elements, calories} = products.find(item => 
        item.id === +id 
        
       
        
    )
    console.log() 
   
    

   





    return (
        <>

            <Title title='Продукт' />

            <div className={styles.container}>
            {/* <span className={styles.count}>{cartCount}</span> */}
                <div>
                    <img className={styles.lamb} src={images.src} alt='lamb' />
                </div>
                <div className={styles.header}>
                    
                        <h3 className={styles.name}>{title}</h3>
                        <span className={styles.description}>{description}</span>
                        <span className={styles.weigt}>{weigt}</span>
                   
                    <div className={styles.buttonPrice}>
                    <CartCount itemPrice={cartPrice} dispatch={dispatch}
                                 id={+productId} category={url} addStyles={styles.cardcount}
                                 cartCount={cartCount} price={price}
                                  title='Корзина' src={shopping}  />
                         {/* <Button addStyles={styles.button} title='Корзина' icon={shopping}></Button>  */}
                        {/* <span className={styles.price}>{price} ₽</span> */}
                    </div>

                    <div className={styles.calories}>

                        <div className={styles.fats}>
                            <span className={styles.item}>{elements.squirrels}</span>
                            <span className={styles.item}>{calories.squirrelsCal}</span>
                        </div>
                        <div className={styles.fats}>
                            <span className={styles.item}>{elements.fats}</span>
                            <span className={styles.item}>{calories.fatsCal}</span>
                        </div>
                        <div className={styles.fats}>
                            <span className={styles.item}>{elements.carbohydrates}</span>
                            <span className={styles.item}>{calories.carbohydratesCal}</span>
                        </div>
                        <div className={styles.fats}>
                            <span className={styles.item}>{elements.kilocalories}</span>
                            <span className={styles.item}>{calories.kilocaloriesCal}</span>
                        </div>
                        <div className={styles.fats}>
                            <span className={styles.item}>{elements.weigtElem}</span>
                            <span className={styles.item}>{calories.weigtElemCal}</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}