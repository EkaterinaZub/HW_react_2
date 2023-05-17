import styles from "./EffectComponents.module.css"


export const EffectComponents = ({weather})=>{
    return(
        <div className={styles.container}>
            <span className={styles.location}>{weather.location}</span>
            <span className={styles.data}>{weather.data}</span>
            <span className={styles.temperature}>{weather.temperature} {weather.unitTemp}</span>
            <span className={styles.windspeed}>{weather.windspeed} {weather.unitWind}</span>

        </div>
    )
}