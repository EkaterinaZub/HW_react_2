import styles from './Conditions.module.css';
import { Title } from '../../common/Title/Title';
import { Accordeon } from './Accordeon/Accordeon';

export const Conditions = () => {
    return (
        <div className={styles.container}>
            <Title title='Условия доставки' />
            <Accordeon/>
        </div>
    )

}