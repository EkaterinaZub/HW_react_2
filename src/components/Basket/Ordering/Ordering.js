import { Link } from 'react-router-dom'
import styles from './Ordering.module.css'
import { Button } from '../../../common/Button/Button'
import { constants } from '../../../constants/constants'
import { useDispatch } from 'react-redux'
import { setCookies } from '../../../toolkitRedux/productSlice'
import { useEffect } from 'react'

export const Ordering = ({basket}) => {
    // const [state, setState] = useState();

    const dispatch = useDispatch()
    const total = basket.reduce((sum, el)=>{
        return sum + el.cartPrice
    },0)


    useEffect(()=>{
        dispatch(setCookies(total))
    },[total])
    


    return (
        <div className={styles.container}>
            <div className={styles.summ}>
                <span className={styles.span_text}>Итого: <span className={styles.span}> {total} руб</span> </span>
                {/* <span className={styles.delivery}>До бесплатной доставки не хватет: <span className={styles.delivery_span}> 100 руб</span> </span> */}
                <span className={styles.minsumm}>Минимальная сума заказа 1500 ₽</span>
            </div>
            <Link to={constants.routs.figurations} state='true' className={styles.text}>
                <Button addStyles={styles.button} title={constants.common.ordering}/>
            </Link>
        </div>
    )

}