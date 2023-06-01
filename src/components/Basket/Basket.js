import styles from './Basket.module.css'
import { Ordering } from './Ordering/Ordering'
import { Title } from '../../common/Title/Title'
import { constants } from '../../constants/constants'

export const Basket = () => {
    return (
        <div className={styles.container}>
            <Title title={constants.common.cart} />
            <Ordering />
        </div>
    )

}