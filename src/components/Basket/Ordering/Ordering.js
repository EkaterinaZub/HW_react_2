import { Link } from 'react-router-dom'
import styles from './Ordering.module.css'
import { Button } from '../../../common/Button/Button'

export const Ordering = () => {
    // const [state, setState] = useState();


    return (
        <div className={styles.container}>
            <div className={styles.summ}>
                <span>Итого: 500 руб</span>

            </div>
            <Link to='/figuration' state='true'>
                {/* <button className={styles.button}>Оформить заказ</button> */}
                <Button />
            </Link>
        </div>
    )

}