import styles from './CartProduct.module.css';
import { Title } from '../../../common/Title/Title';
import { useParams } from 'react-router-dom';
import shopping from '../../../assest/images/shopping.svg';
import { CartCount } from '../CartCount/CartCount';
import { useDispatch, useSelector } from 'react-redux';



export const CartProduct = () => {

    const state = useSelector((state) => state.productInitial.productCount);
    const dispatch = useDispatch();

    const { id, url } = useParams();

    const { products } = state.find(el => el.url === url);

    const product = products.find(item =>
        item.id === +id

    );

    const { description, title, images, id: productId, weigt, elements, calories } = product;

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
                        <CartCount product={product} dispatch={dispatch}
                            category={url} addStyles={styles.cardcount}

                            title='Корзина' src={shopping} />
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