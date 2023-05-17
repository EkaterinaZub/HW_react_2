import styles from './Information.module.css';
import onion from '../../../assest/images/onion.png';
import chef from '../../../assest/images/chef.png';
import flash from '../../../assest/images/flash.png';


export const Information = ()=> {
    return (
        <div className={styles.container}>
        
        <div className={styles.card}>
        <img className={styles.img} src={onion} alt='onion' />
        <span className={styles.title}>Свежайшие продукты</span>
        </div>

        <div className={styles.card}>
        <img className={styles.img} src={flash} alt='flash' />
        <span className={styles.titleGrien}>Быстрая доставка</span>
        </div>

        <div className={styles.card}>
        <img className={styles.img} src={chef} alt='chef' />
        <span className={styles.title}>Лучшие повора</span>
        </div>

        <div className={styles.card}>
        <img className={styles.img} src={onion} alt='onion' />
        <span className={styles.title}>Свежайшие продукты</span>
        </div>
       
        </div>
        
    )

}