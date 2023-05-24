import { ContactInformation } from './ContactInformation/ContactInformation'
import { Delivery } from './Delivery/Delivery'
import { DeliveryTime } from './DeliveryTime/DeliveryTime'
import styles from './Figuration.module.css'
import { Pay } from './Pay/Pay'
import { Order } from './Order/Order'
import {  useState } from 'react'
import { useValidate } from '../UseValidate/usevalidate'
import { Title } from '../../common/Title/Title'



const initialState = {

    firstName: '',
    phone: '',
    street: '',
    house: '',
    apartment: '',
    entrance: '',
    floor: '',
    comment: '',
    degree: 'call',
    delivery: '',
    pay: '',
    persons: '1',
    agree: ''


}


export const Figuration = () => {
    const [state, setState] = useState(initialState);
    const [isShow, setIsShowp] = useState(true);
    const { error, validate } = useValidate()

    const handleChange = ({ target }) => {


        const { name, value } = target


        validate(name, value)


        setState({ ...state, [name]: value })

    }


    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(state);
    }

    

    

    return (
        <>
        <Title title="Оформление заказа"/>
        <form className={styles.container} onSubmit={handelSubmit}>
            <ContactInformation state={state} handleChange={handleChange} error={error} validate={validate} />
            <Delivery state={state} handleChange={handleChange} isShow={isShow} setIsShowp={setIsShowp} error={error} validate={validate} />
            <Pay handleChange={handleChange} />
            <DeliveryTime handleChange={handleChange} state={state} isShow={isShow} setIsShowp={setIsShowp} />
            <Order state={state} handleChange={handleChange} isShow={isShow} setIsShowp={setIsShowp} />
            <pre className={styles.output}>
                {JSON.stringify(state, null, 2)}
            </pre>
        </form>
</>
    )


}