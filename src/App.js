import './App.css';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Navigation } from './components/Navigation/Navigation';
import {Route, Routes} from "react-router-dom";
import { ColdAppetizers } from './components/ColdAppetizers/ColdAppetizers';




export const  App=() =>{
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Navigation/>
      <Routes>
        <Route path='/Холодные_закуски' element={<ColdAppetizers/>}/>
        
      </Routes>
      
      
    </div>
  );
}


