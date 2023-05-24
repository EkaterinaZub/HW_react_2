import styles from './Banner.module.css'


export const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <span className={styles.text}>Доставка ВКУСНЕЙШИХ
                    БЛЮд за 60 минут</span>
            </div>
            <div className={styles.delivery}>
                <span className={styles.question}>Ещё не пробовал?</span>
            </div>
        </div>

    )

}