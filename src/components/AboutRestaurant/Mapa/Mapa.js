import styles from './Mapa.module.css';
import location from '../../../assest/images/location.png';
import message from '../../../assest/images/message.png';
import facebook from '../../../assest/images/facebook.png';
import vkontakte from '../../../assest/images/vkontakte.png';
import video from '../../../assest/images/video.png';
import instagram from '../../../assest/images/instagram.png';
import icon from '../../../assest/images/icon.png';


export const Mapa = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contacts}>
                <h3 className={styles.header}>КОНТАКТЫ</h3>
                <div className={styles.location}>
                    <div className={styles.address}>

                        <img className={styles.img} src={location} alt="location" />

                        <div className={styles.containerAddress}>
                            <span className={styles.option}>Наш адрес:</span>
                            <span className={styles.title}> МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</span>
                        </div>
                    </div>

                    <div className={styles.address}>
                        <img className={styles.img} src={message} alt="message" />

                        <div className={styles.containerAddress}>
                            <span className={styles.option}>Наша почта:</span>
                            <span className={styles.title}>auto.wash@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className={styles.booking}>
                    <button className={styles.button}>ЗАБРОНИРОВАТЬ СТОЛ</button>
                    <div className={styles.telefon}>
                        <span className={styles.numer}>+7 (917) 510-57-59</span>
                        <span className={styles.descriptions}>Звоните или оставляйте заявку</span>
                    </div>
                </div>

                <div className={styles.networks}>
                    <span className={styles.text}>Мы в соц сетях:</span>
                    <img className={styles.item} src={facebook} alt="facebook" />
                    <img className={styles.item} src={vkontakte} alt="vkontakte" />
                    <img className={styles.item} src={video} alt="video" />
                    <img className={styles.item} src={instagram} alt="instagram" />

                </div>


            </div>


            <img className={styles.weHere} src={icon} alt="icon" />

        </div>

    )

}