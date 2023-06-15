import styles from './Accordeon.module.css'
import { useState } from 'react'

export const AccordeonComponents = ({ component, question }) => {

    const [text, setText] = useState(false)

    return (
        <div >

            <div className={styles.question} onClick={() => setText(!text)} >
                <h3> {question}</h3>
                <span className={styles.sign}>{text ? " - ": " + "}</span>
            </div>
            <div className={styles.text}>
                {text && <span>{component}</span>}

            </div>

        </div>
    )
}