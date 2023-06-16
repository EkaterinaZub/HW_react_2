
import styles from './Schedule.module.css'

export const Schedule = () => {

    return (
        <div className={styles.container}>
            
                <div className={styles.schedule}>
                    <h4 className={styles.header}>График работы доставки:</h4>
                    <span className={styles.time}>с 10:00-21:00</span>
                </div>
                <div className={styles.cafe}>
                    <h4 className={styles.header}>График работы кафе:</h4>
                    <span className={styles.time}>с 08:00-21:00</span>
                </div>
            
            
        </div>
    )
}
