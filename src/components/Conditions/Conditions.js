import styles from './Conditions.module.css';
import { Title } from '../../common/Title/Title';
import { Accordeon } from './Accordeon/Accordeon';
import { AccordeonRight } from './AccordeonRight/AccordeonRight';
import { Schedule } from './Schedule/Schedule';
import { MinOrder } from './MinOrder/MinOrder';

export const Conditions = () => {
    return (
        <div className={styles.container}>
            <Title title='Условия доставки' />
            <div className={styles.accordeon} >
            <Accordeon/>
            <AccordeonRight/>
            </div>
            <Schedule/>
            <MinOrder/>
        </div>
    )

}