import { Link } from "react-router-dom"
import styles from "./Navigation.module.css"
import { menu } from "../data/menu"


export const Navigation = () => {
  return (
    <nav className={styles.navigation}>

      {menu.map(item => <Link key={item.id} className={styles.href} to={item.url}>{item.title}</Link>
      )
      }
    </nav>
  )

}