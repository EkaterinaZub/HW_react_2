import {Link} from "react-router-dom"
import styles from "./Navigation.module.css"


export const Navigation = ()=> {
    return (
        <nav className={styles.navigation}>
        <Link className={styles.href} to={'/Холодные_закуски'}>Холодные закуски</Link>
        <Link className={styles.href} to={'/Горячие_закуски'}>Горячие закуски</Link>
        <Link className={styles.href} to={'/Мясные_блюда'}>Мясные блюда</Link>
        <Link className={styles.href} to={'/Супы'}>Супы</Link>
        <Link className={styles.href} to={'/Рыбные_блюда'}>Рыбные блюда</Link>
        <Link className={styles.href} to={'/Гриль_меню'}>Гриль меню</Link>
        <Link className={styles.href} to={'/Фирменные_блюда'}>Фирменные блюда</Link>
        <Link className={styles.href} to={'/Напитки'}>Напитки</Link>
        
        </nav>
    )

}