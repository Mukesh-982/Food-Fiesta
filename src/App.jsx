import React, {lazy, Suspense} from 'react'
import Header from './components/Header'
import RestaurantContainer from './components/RestaurantContainer'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'
import RestaurantMenu from './components/RestaurantMenu'
import {Routes, Route} from "react-router-dom";
import Shimmer from './components/Shimmer'


//Chunking
//Code splitting
// Dynamic Bundling
// Lazy loading - on demand loading


const Grocery = lazy(()=> import('./pages/Grocery'));

const App = () => {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element = {<RestaurantContainer/>}/>
          <Route path='/about' element = {<AboutUs/>}/>
          <Route path='/contact' element = { <Contact/> }/>
          <Route path='/cart' element = { <Cart/> }/>
          <Route path='/grocery' element = { 
            <Suspense fallback= {<Shimmer/>}>
              <Grocery/>
            </Suspense>
            }/>
          <Route path='/restaurant/:resId' element = { <RestaurantMenu/> }/>
          <Route path= '*' element = { <PageNotFound/>}/>
        </Routes>
      </div>
    )
}

export default App
