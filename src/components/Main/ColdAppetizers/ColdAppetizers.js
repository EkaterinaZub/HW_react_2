import styles from './ColdAppetizers.module.css';

// import buy from '../../../assest/images/buy.svg'
import { useParams } from 'react-router-dom';
// import { menu } from '../../../components/data/menu'
import { CartCount } from '../CartCount/CartCount';
import { useReducer } from 'react';
import productReducer from '../../../reducer/productReducer';
import { initialState } from '../../../reducer/initialState';
import { Title } from '../../../common/Title/Title';

export const ColdAppetizers = () => {
    const [state, dispatch] = useReducer(productReducer, initialState)




    const { url } = useParams();
    // console.log(url)
    const { title, products, url: cardsUrl } = state.find(item => {
        if (url === undefined) {
            return item.url === 'cold-snack'
        }
        return item.url === url
    })


    return (
        <div className={styles.container} key={cardsUrl}>
            <Title title={title} />
            <div className={styles.dishes} >
                {
                    products.map(item => <div className={styles.cards}>
                        <img className={styles.lamb} src={item.images.src} alt={item.images.alt} />
                        <div className={styles.header}>
                            <h3 className={styles.name}>{item.title}</h3>
                            <span className={styles.weigt}>{item.weigt}</span>
                        </div>
                        <span className={styles.description}>{item.description}</span>
                        <div className={styles.buy}>
                            <CartCount itemPrice={item.cartPrice} dispatch={dispatch} category={cardsUrl} id={item.id} cartCount={item.cartCount} price={item.price} />
                        </div>
                    </div>)
                }
            </div>
        </div>)

}
