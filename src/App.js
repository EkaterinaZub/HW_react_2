import './App.css';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Navigation } from './components/Navigation/Navigation';
import {Route, Routes, useLocation} from "react-router-dom";
import { ColdAppetizers } from './components/Main/ColdAppetizers/ColdAppetizers';
import { Basket } from './components/Basket/Basket';
import {Footer} from './components/Footer/Footer';
import { AboutRestaurant } from './components/AboutRestaurant/AboutRestaurant';
import { Share } from './components/Share/Share';
import { Conditions } from './components/Conditions/Conditions';
import { useEffect, useState } from 'react';
import { PurchaseReturns } from './components/PurchaseReturns/PurchaseReturns';




export const  App=() =>{
  let {state} = useLocation();
  const [showMenu, setShowMenu]= useState(false);
  const[weather, setWeather] = useState({});

  useEffect( ()=>{
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    .then((response)=> response.json())
    .then((weather)=> {
      const weatherData = {
        location: 'Minsk',
        data: weather.current_weather.time,
        temperature: weather.current_weather.temperature,
        unitTemp: weather.hourly_units.temperature_2m,
        windspeed: weather.current_weather.windspeed,
        unitWind: weather.hourly_units.windspeed_10m

      };
    
setWeather(weatherData) });
    //  console.log(weatherData)
  },[])

  
  return (
    <div className="App">
      <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
      {!state && <Banner/>}
      <Navigation/>
      <Routes>
        <Route path='/' element={<ColdAppetizers/>}/>
        <Route path='/:url' element={<ColdAppetizers/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/about_the_restaurant' element={<AboutRestaurant/>}/>
        <Route path='/stock' element={<Share/>}/>
        <Route path='/return' element={<PurchaseReturns/>}/>
        <Route path='/conditions' element={<Conditions/>}/>
        </Routes>

      <Footer weather={weather} showMenu={showMenu} setShowMenu={setShowMenu}/>
      
      
    </div>
  );
}


