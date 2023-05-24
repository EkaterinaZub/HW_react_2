import styles from './OrderComponents.module.css'

export const OrderComponents = ({ children, title }) => {

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{title}</h3>
            {children}
        </div>
    )
}