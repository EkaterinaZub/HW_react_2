import styles from './ArrowFooter.module.css';
import arrow from '../../../assest/images/arrow.svg'

export const ArrowFooter = () => {
    return (
        <div className={styles.container}>
            <img className={styles.arrow} src={arrow} alt='arrow' />


        </div>
    )

}