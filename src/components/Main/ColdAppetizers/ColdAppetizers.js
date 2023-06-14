import styles from './ColdAppetizers.module.css';
import { Link, useParams } from 'react-router-dom';
import { CartCount } from '../CartCount/CartCount';
import { Title } from '../../../common/Title/Title';
import buy from '../../../assest/images/buy.svg';
import { useDispatch, useSelector } from 'react-redux';

export const ColdAppetizers = () => {
    const state = useSelector((state)=>state.productInitial.productCount)
    const dispatch = useDispatch()
    // const { state, dispatch } = useContext(AppContext)


    const { url } = useParams();
    
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
