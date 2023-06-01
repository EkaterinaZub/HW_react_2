import styles from './Order.module.css';
import { useState} from 'react';
import { Link } from 'react-router-dom'
import { Button } from '../../../common/Button/Button';
import { constants } from '../../../constants/constants';


export const Order = ({ handleChange,error}) => {

    const [isChecked, setIsChecked] = useState(false)

    console.log(isChecked)



    

    return (
        <div className={styles.container}>

            <input className={styles.checkbox} type='checkbox'
                name='agree'
                onChange={(e) => {
                    handleChange(e)
                    setIsChecked(!isChecked)
                }}
            />
            <span className={styles.input}></span>
            <span className={styles.text}>Я согласен на обработку моих перс. данных в соответствии с <Link className={styles.link}>   Условиями</Link></span>
            <Button  type='submit' disabled={!isChecked} title={constants.common.ordering} addStyles={styles.order} />

        </div>
    )

}