import { Link } from 'react-router-dom'
import styles from './AboutRestaurant.module.css';
import { Information } from './Information/Information';
import { Mapa } from './Mapa/Mapa';

export const AboutRestaurant = ()=> {
    return (
        <>
        <div className={styles.container}>
       <div className={styles.description}>
        <h3 className={styles.title}>НАШЕ КАФЕ</h3>
        <span className={styles.content}>Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</span>
        <Link to= '/' className={styles.button}>ПОСМОТРЕТЬ МЕНЮ</Link>
       </div>
       <Information/>
        </div>
        <Mapa/>
        </>

        
        
    )

}