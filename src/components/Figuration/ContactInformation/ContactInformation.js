import styles from './ContactInformation.module.css'
import { OrderComponents } from '../OrderComponents/OrderComponents'


export const ContactInformation = ({ state, handleChange, error, validate }) => {

    return (

        <OrderComponents title='1. Контактная информация'>

            <div className={styles.inputs}>
                <input className={styles.input} placeholder="  Имя" type="text" value={state.firstName} onChange={handleChange} name="firstName"></input>
                <input className={styles.input} placeholder="  +375(29)6554545" type="text" value={state.phone} onChange={handleChange} name="phone"></input>

            </div>
            <div className={styles.span}>
                <span className={styles.firstName}>{error.firstName}</span>
                <span className={styles.phone}>{error.phone}</span>
            </div>
        </OrderComponents>

    )


}