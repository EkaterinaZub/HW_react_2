import styles from './Input.module.css'
import location from '../../assest/images/location.svg'
import search from '../../assest/images/search.svg'


export const Input = ()=> {
    return (
        <div className={styles.container}>
        <img className={styles.location} src={location} alt="location"/>

       <input className={styles.input} placeholder="           Введите адрес доставки" type="text" size="40" name="message"></input>
       <img className={styles.search} src={search} alt="search"/>


        </div>
    )

}