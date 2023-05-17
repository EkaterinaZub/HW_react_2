import styles from './Hamburger.module.css'

export const Hamburger = ({showMenu, setShowMenu})=> {
    return (
        <div className={styles.container} onClick={()=> setShowMenu(!showMenu)}>
        <span class={styles.hamburger}></span>
        <span class={styles.hamburger}></span>
        <span class={styles.hamburger}></span>


        </div>
    )

}