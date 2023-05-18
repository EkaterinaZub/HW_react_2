import styles from './Hamburger.module.css'

export const Hamburger = ({showMenu, setShowMenu})=> {
    return (
        <div className={styles.container} onClick={()=> setShowMenu(!showMenu)}>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>


        </div>
    )

}