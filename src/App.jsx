import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

import headphone from "./assets/pics/headphone.png"
import smartwatch2 from "./assets/pics/smartwatch2-removebg-preview.png";

const BannerData = {
      discount: "30% OFF",
      title: "Fine Smiles",
      date: "14 Dec to 28 Dec",
      image: headphone,
      title2: "Air Solo Bass",
      title3: "Winter Sale",
      title4: "With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback. Enjoy award-winning Beats sound with Class 1 Bluetooth wireless listening freedom. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day comfort",
      bgColor: "#f42c37",
  }

const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Dec to 28 Dec",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4: "The most rugged and capable Apple Watch. Designed for outdoor adventures and supercharged workouts with a lightweight titanium case, extra-long battery life, and the brightest-ever display. Featuring double tap, a magical way to interact with Apple Watch, and Precision Finding to guide you to your iPhone.",
    bgColor: "#2dcc6f",
}

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup)
    };
  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, [] );

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Category/> 
    <Category2/>
    <Services/>
    <Banner data = {BannerData}/>
    <Products/>
    <Banner data = {BannerData2}/>
    <Blogs/>
    <Partners/>
    <Footer/>
    <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  );
};
export default App;