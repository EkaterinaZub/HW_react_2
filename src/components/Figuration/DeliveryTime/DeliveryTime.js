import styles from './DeliveryTime.module.css'
import { useState } from 'react'
import { OrderComponents } from '../OrderComponents/OrderComponents';

export const DeliveryTime = ({ handleChange, state }) => {
  const [isShow, setIsShowp] = useState(true);
  const [persons, setPersons] = useState(1);
  return (
    <OrderComponents title='4. Когда доставить'>
      <div className={styles.buttons}>
        <button className={isShow ? [styles.button, styles.left, styles.checked].join(' ') : [styles.button, styles.left].join(' ')} onClick={(e) => {
          e.preventDefault()
          setIsShowp(true)
          handleChange(e)
        }}>В ближайшее время</button>
        <button className={isShow ? [styles.button, styles.centr].join(' ') : [styles.button, styles.centr, styles.checked].join(' ')} onClick={(e) => {
          e.preventDefault()
          setIsShowp(false)
          handleChange(e)
        }}>Ко времени</button>
        <button type='button'className={[styles.button, styles.right].join(' ')}>Укажите время</button>

        <div className={styles.person}>
          <span className={styles.span}>Кол-во персон</span>
          <button className={styles.count}
            type='button'
            name='persons'
            value={+state.persons - 1}
            onClick={(event) => {
              event.preventDefault()
              if (state.persons > 1) {
                handleChange(event)
              }
            }}>-</button>
          <span className={styles.span}>{state.persons}</span>
          <button className={styles.count}
            type='button'
            name='persons'
            value={+state.persons + 1}
            onClick={(event) => {
              event.preventDefault()
              handleChange(event)
            }}>+</button>
        </div>
      </div>


      <h4 className={styles.phone}>Хотите мы позвоним?</h4>

      <label className={styles.radio}><input className={styles.item}
        type='radio'
        name='degree'
        value='dontСall'
        checked={state.degree === 'dontСall'}
        onChange={handleChange}
      />
        Не перезванивать
      </label>

      <label className={styles.radio}><input className={styles.item}
        type='radio'
        name='degree'
        value='call'
        checked={state.degree === 'call'}
        onChange={handleChange}
      />    Потребуется звонок оператора</label>

    </OrderComponents>

  )


}