import styles from './Button.module.css';

export const Button =({disabled,type})=>{

    return(
<button className={styles.button} disabled={disabled} type={type}>Оформить заказ</button>
    )
}