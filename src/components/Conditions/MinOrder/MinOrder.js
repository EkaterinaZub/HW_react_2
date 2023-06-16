import styles from './MinOrder.module.css'

export const MinOrder = () => {

    return (
        <div className={styles.container}>
            
                <h4 className={styles.order}>Минимальный заказ:</h4>
                <span className={styles.text}>Бесплатная доставка пешим курьером при сумме заказа от 400₽
                    Доставка оператором такси от любой суммы заказа - по тарифам
                    перевозчика.</span>
            
        </div>
    )
}