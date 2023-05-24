import styles from './LogoFooter.module.css'


export const LogoFooter = () => {
    return (
        <div className={styles.container}>

            <span className={styles.logo}>LOGOS</span>

            <span className={styles.itemOOO}>© ООО СК «АПШЕРОН»
                Все права защищены. 2010-2020</span>
            <span className={styles.item} >Пользовательское соглашение</span>
            <span className={styles.item} >Карта сайта </span>
            <span className={styles.item}>Политика конфиденциальности</span>




        </div>
    )

}