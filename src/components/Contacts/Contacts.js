import styles from './Contacts.module.css'
import calling from '../../assest/images/calling.svg'


export const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.circle}>
                <img className={styles.location} src={calling} alt="calling" />
            </div>
            <div className={styles.containerContact}>
                <span className={styles.contact}>Контакты:</span>
                <span className={styles.telefon}>+7 (9917) 510-57-59</span>
            </div>

        </div>
    )

}