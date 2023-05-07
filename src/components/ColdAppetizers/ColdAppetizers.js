import styles from './ColdAppetizers.module.css';
import lamb from '../../assest/images/lamb.svg';
import buy from '../../assest/images/buy.svg'

export const ColdAppetizers = () => {
    return (
        <div className={styles.container}>
            <img className={styles.lamb} src={lamb} alt="lamb" />
            <h3>Ягненок</h3>
            <span>Фаршированный гречневой кашей,
                курагой, апельсином и зеленым яблоком</span>
                <p>620</p>
                <button>
                В корзину <img src={buy}/>
                </button>

        </div>
    )

}