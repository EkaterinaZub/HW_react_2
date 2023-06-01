import { Link } from 'react-router-dom'
import styles from './Ordering.module.css'
import { Button } from '../../../common/Button/Button'
import { constants } from '../../../constants/constants'

export const Ordering = () => {
    // const [state, setState] = useState();


    return (
        <div className={styles.container}>
            <div className={styles.summ}>
                <span>Итого: 500 руб</span>

            </div>
            <Link to={constants.routs.figurations} state='true' className={styles.text}>
                <Button addStyles={styles.button} title={constants.common.ordering}/>
            </Link>
        </div>
    )

}