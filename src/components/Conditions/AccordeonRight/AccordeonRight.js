

import styles from './AccordeonRight.module.css'
import { data } from '../../data/data'
import { useState } from 'react'


export const AccordeonRight = () => {
const [accordeon, setAccordeon]= useState(-1)

const toogleAccordeon = (index)=>{
    if (accordeon === index){
        setAccordeon(-1);
        return
    }

    setAccordeon(index)
}


    return (
        <div className={styles.accordeon}>
            {
                data.map((item,index) =>
                
                <div key={item.id }>

            <div className={styles.question} onClick={() => toogleAccordeon(index)} >
                <h3> {item.question}</h3>
                <span className={styles.sign}>{accordeon === index ? " - ": " + "}</span>
            </div>
            <div className= {styles.text}>
            
                 <span className={accordeon === index ? styles.text_open : styles.text_close }>{item.component}</span>

            </div>

        </div>
                )
            }
        </div>
    )
}

