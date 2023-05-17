import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

export const Logo = ()=> {
    return (
        <Link to = '/' className={styles.logos}>
        <span>LOGOS</span>
        </Link>
    )

}