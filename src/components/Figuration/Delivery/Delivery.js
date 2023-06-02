import styles from './Delivery.module.css'
// import { useState } from 'react';
import clock from '../../../assest/images/clock.svg'
import { OrderComponents } from '../OrderComponents/OrderComponents'
// import { Clock } from '../../../assest/images/clock'

export const Delivery = ({ state, handleChange, isShow, setIsShowp, error }) => {

    // const [isShow, setIsShowp] = useState(true);

    return (
        <OrderComponents title='2. Доставка'>
            <div className={styles.buttons}>
                <button className={isShow ? [styles.delivery, styles.checked].join(' ') : styles.delivery} name='delivery' value='delivery'
                    onClick={(e) => {
                        e.preventDefault()
                        setIsShowp(true)
                        handleChange(e)
                    }}>Доставка</button>
                <button className={isShow ? styles.pikap : [styles.pikap, styles.checked].join(' ')} name='delivery' value='pikap' onClick={(e) => {
                    e.preventDefault()
                    setIsShowp(false)
                    handleChange(e)
                }}>Самовывоз</button>

                {isShow && (

                    <div className={styles.clock}>
                    {/* <Clock width = '28'
                        height= '19'
                        fill= 'green'
                        stroke='red'
                    /> */}
                        <img src={clock} alt="clock"></img>
                        <span className={styles.span}>Доставим через 1 час 30 минут</span>
                    </div>
                )}
            </div>


            <h4 className={styles.address}>Адрес доставки</h4>
            <div className={styles.inputs}>
                <input className={[styles.input, styles.street].join(' ')} placeholder="  Укажите улицу" type="text" value={state.street} onChange={handleChange} name="street"></input>
                <input className={[styles.input, styles.house].join(' ')} placeholder="  Номер дома" type="text" value={state.house} onChange={handleChange} name="house"></input>
                <input className={[styles.input, styles.apartment].join(' ')} placeholder="  №квартиры/офиса" type="text" value={state.apartment} onChange={handleChange} name="apartment"></input>
                <input className={[styles.input, styles.entrance].join(' ')} placeholder="  Подъезд" type="text" value={state.entrance} onChange={handleChange} name="entrance"></input>
                <input className={[styles.input, styles.floor].join(' ')} placeholder="  Этаж" type="text" value={state.floor} onChange={handleChange} name="floor"></input>
                <input className={[styles.input, styles.comment].join(' ')} placeholder="  Комментарий" type="text" value={state.comment} onChange={handleChange} name="comment"></input>
                <div className={styles.errorSpan}>
                    <span className={styles.error}>{error.street}</span>
                    <span className={styles.error}>{error.house}</span>
                    <span className={styles.error}>{error.apartment}</span>
                    <span className={styles.error}>{error.entrance}</span>
                    <span className={styles.error}>{error.floor}</span>
                    <span className={styles.error}>{error.comment}</span>
                </div>
            </div>

        </OrderComponents>

    )


}