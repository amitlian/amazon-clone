import React from 'react'
import '../body/Body.css'
import Product from '../Product/Product'

function Body() {
    return (
        <div className="home">
            <div className="home_container">
                {/* banner page */}
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"/>
                <div className="home_row">
                    {/* product */}
                    <Product
                    id={1}
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={4}/>
                    <Product
                    id={8}
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                    price={443.88}
                    image="https://images-na.ssl-images-amazon.com/images/I/71sesDsw95L._AC_SL1500_.jpg"
                    rating={3}/>
                </div>
                <div className="home_row">
                <Product
                    id={2}
                    title="TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control, QoS"
                    price={57.99}
                    image="https://www.startech.com.bd/image/cache/catalog/router/tp-link/a9-ac-1900/ac-1900-500x500.jpg"
                    rating={5}/>
                <Product
                    id={3}
                    title="Amazfit GTS Fitness Smartwatch with Heart Rate Monitor, 14-Day Battery Life, Music Control, 1.65 Display, Sleep and Swim Tracking, GPS, Water Resistant, Smart Notifications, Lava Gray"
                    price={119.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61t1ZfCGJJL._AC_SL1500_.jpg"
                    rating={4}/>
                <Product
                    id={4}
                    title="Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Violet (SM-G991UZVAXAA)"
                    price={699.99}
                    image="https://img.router-switch.com/media/customoptions/169/1/1/samsung-galaxy-s21-5g-sm-g9910-purple-1.jpg"
                    rating={5}/>        
                </div>
                <div className="home_row">
                <Product
                    id={5}
                    title="LG 49WL95C-WE 49 Inch 32:9 Curved DQHD (5120 x 1440) IPS UltraWide Monitor with HDR10, USB-C and 3-Side Virtually Borderless Display, Silver"
                    price={1680.71}
                    image="https://www.lg.com/us/images/monitors/md07522179/gallery/1100-9.jpg"
                    rating={4}/> 
                </div>
            </div>        
        </div>
    )
}

export default Body
