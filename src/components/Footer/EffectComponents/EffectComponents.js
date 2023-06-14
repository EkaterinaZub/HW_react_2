import { useDispatch, useSelector } from "react-redux";
import styles from "./EffectComponents.module.css";
import { useEffect } from "react";
import { getWeather } from "../../../toolkitRedux/weatherSlice";


export const EffectComponents = () => {

    const {weather, status} = useSelector (state=> state.weatherInitial);
    const dispatch = useDispatch();
console.log(weather)
    useEffect(()=>{
        if (status === 'idle') {
            dispatch(getWeather())

        }
    },[status, dispatch])



    return (
        <div className={styles.container}>
            <span className={styles.location}>{weather.location}</span>
            <span className={styles.data}>{weather.data}</span>
            <span className={styles.temperature}>{weather.temperature} {weather.unitTemp}</span>
            <span className={styles.windspeed}>{weather.windspeed} {weather.unitWind}</span>

        </div>
    )
}