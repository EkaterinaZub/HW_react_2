import styles from './Accordeon.module.css'
import { data } from '../../data/data'
import { AccordeonComponents } from './AccordeonComponent'

export const Accordeon = () => {

    return (
        <div className={styles.accordeon}>
            {
                data.map(item =>
                <AccordeonComponents key={item.id } {...item}/>
                )
            }
        </div>
    )
}



