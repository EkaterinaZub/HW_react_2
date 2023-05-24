import styles from './Basket.module.css'
import { Ordering } from './Ordering/Ordering'
import { Title } from '../../common/Title/Title'

export const Basket = () => {
    return (
        <div className={styles.container}>
            <Title title='Корзина' />
            <Ordering />
        </div>
    )

}