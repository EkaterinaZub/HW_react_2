import styles from './ColdAppetizers.module.css';

// import buy from '../../../assest/images/buy.svg'
import { Link, useParams } from 'react-router-dom';
// import { menu } from '../../../components/data/menu'
import { CartCount } from '../CartCount/CartCount';
import { useContext } from 'react';
// import productReducer from '../../../reducer/productReducer';
// import { initialState } from '../../../reducer/initialState';
import { Title } from '../../../common/Title/Title';
// import shopping from '../../../assest/images/shopping.svg'
import buy from '../../../assest/images/buy.svg'
import { AppContext } from '../../../App';

export const ColdAppetizers = () => {
    const { stat, dispatch } = useContext(AppContext)



    // console.log(state)


    const { url } = useParams();
    // console.log(url)
    const { title, products, url: cardsUrl } = stat.find(item => {
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
                    products.map(item =>

                        <div className={styles.cards} key={item.id}>
                            <Link to={`/${cardsUrl}/${item.id}`} item={item} state='true'><img className={styles.lamb} src={item.images.src} alt={item.images.alt} id={item.id} /></Link>

                            <div className={styles.header}>
                                <h3 className={styles.name}>{item.title}</h3>
                                <span className={styles.weigt}>{item.weigt}</span>
                            </div>
                            <span className={styles.description}>{item.description}</span>
                            <div className={styles.buy}>
                                <CartCount product={item} dispatch={dispatch}
                                    category={cardsUrl} src={buy}
                                    title='В корзину' />
                            </div>
                        </div>)
                }
            </div>
        </div>)

}
