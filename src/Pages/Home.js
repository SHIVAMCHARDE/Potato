import React from 'react'
import Header from "../Components/Header"
import Navbar from '../Components/Navbar'
import ShoppingCards from '../Components/ShoppingCards'
import DairyProducts from '../Components/DairyProducts'
import Vegies from '../Components/Vegies'
import Sellers from '../Components/Sellers'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div>
        <Header/>
      <Navbar/>
      <ShoppingCards/>
      <DairyProducts/>
      <Vegies/>
      <Sellers/>
      <Footer/>

    </div>
  )
}
