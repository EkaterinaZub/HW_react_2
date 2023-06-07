import './App.css';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Navigation } from './components/Navigation/Navigation';
import { Route, Routes, useLocation } from "react-router-dom";
import { ColdAppetizers } from './components/Main/ColdAppetizers/ColdAppetizers';
import { Basket } from './components/Basket/Basket';
import { Footer } from './components/Footer/Footer';
import { AboutRestaurant } from './components/AboutRestaurant/AboutRestaurant';
import { Share } from './components/Share/Share';
import { Conditions } from './components/Conditions/Conditions';
import { createContext, useReducer, useEffect, useState } from 'react';
import productReducer from './reducer/productReducer';
import { initialState } from './reducer/initialState';
import { PurchaseReturns } from './components/PurchaseReturns/PurchaseReturns';
import { Figuration } from './components/Figuration/Figuration';
import { CartProduct } from './components/Main/CartProducr/CartProduct';
import { constants } from './constants/constants';
// import { Modal } from './components/Modal/Modal';
import { Preloader } from './components/Preloader/Preloader';
import { Login } from './components/Modal/Login/Login';
import { FormComponent } from './components/Modal/FormComponent';
// import { Cabinet } from './components/Cabinet/Cabinet';
import { Signup } from './components/Modal/Signup/Signnup';
import { Profile } from './components/Profile/Profile';


export const AppContext = createContext()

export const App = () => {
  let { state } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [weather, setWeather] = useState({});
  const [stat, dispatch] = useReducer(productReducer, initialState);
  const [basketCaunt, setBasketCaunt] = useState(0)
  const [modal, setModal] = useState(false)
  const [isPreloader, setIsPreloader] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  // console.log(modal)
  
  useEffect(() => {
    setIsPreloader(true)
    setTimeout ( ()=>{
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
      .then((response) => response.json())
      .then((weather) => {
        const weatherData = {
          location: 'Minsk',
          data: weather.current_weather.time,
          temperature: weather.current_weather.temperature,
          unitTemp: weather.hourly_units.temperature_2m,
          windspeed: weather.current_weather.windspeed,
          unitWind: weather.hourly_units.windspeed_10m

        };

        setWeather(weatherData)
      }).finally(()=> setIsPreloader(false))

    }, 1000)
    
  }, [])


  return (
    <AppContext.Provider value={{state, stat, dispatch,basketCaunt, setBasketCaunt, setShowLogin,showLogin, setBasketCaunt,setModal, modal}} >
    <div className="App">
    {isPreloader ? <Preloader/>: 
    <>
    
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      
      {!state && <Banner />}
      <Navigation />
      
      <Routes>
        <Route path={constants.routs.home} element={<ColdAppetizers />} />
        <Route path={constants.routs.category}  element={<ColdAppetizers />} />
        <Route path={constants.routs.cartProduct} element={<CartProduct/>}/>
        <Route path={constants.routs.basket} element={<Basket />} />
        <Route path={constants.routs.about} element={<AboutRestaurant />} />
        <Route path={constants.routs.share} element={<Share />} />
        <Route path={constants.routs.return} element={<PurchaseReturns />} />
        <Route path={constants.routs.conditons} element={<Conditions />} />
        <Route path={constants.routs.figurations} element={<Figuration />} />
        <Route path='/profile'  element={<Profile/>}/>
        <Route path='/Modal'  element={<FormComponent/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>

      </Routes>
      
      <Footer weather={weather} showMenu={showMenu} setShowMenu={setShowMenu} />

      </>}
    </div>
    </AppContext.Provider>
  );
}


