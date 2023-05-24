import styles from './Pay.module.css';
import { useState } from 'react';
import { OrderComponents } from '../OrderComponents/OrderComponents';


export const Pay = ({ handleChange }) => {

    const [isShow, setIsShowp] = useState('online');

    return (

        <OrderComponents title='3. Оплатить'>
            <div className={styles.buttons}>
                <button className={isShow === 'online' ? [styles.button, styles.left, styles.checked].join(' ') : [styles.button, styles.left].join(' ')} name='pay' value='online' onClick={(e) => {
                    setIsShowp('online')
                    handleChange(e)
                }}>Оплата онлайн</button>
                <button className={isShow === 'carta' ? [styles.button, styles.checked].join(' ') : [styles.button].join(' ')} name='pay' value='carta' onClick={(e) => {
                    setIsShowp('carta')
                    handleChange(e)
                }}>Курьеру картой</button>
                <button className={isShow === 'cash' ? [styles.button, styles.right, styles.checked].join(' ') : [styles.button, styles.right].join(' ')} name='pay' value='cash' onClick={(e) => {
                    setIsShowp('cash')
                    handleChange(e)
                }}>Наличными</button>
            </div>

        </OrderComponents>

    )


}