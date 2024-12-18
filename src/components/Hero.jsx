import React from 'react';
import Slider from "react-slick";
import Image1 from "../assets/pics/headphone.png"
import Image2 from "../assets/pics/vr.png"
import Image3 from "../assets/pics/macbook.png"
import Button from './Button';
const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
       
    },
    {
        id: 1,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
    }, 
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops",

    },
]
const Hero = ({handleOrderPopup}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'> 
            <div className='container pb-8 sm:pb-0'>  
            {/*hero section */}
            <Slider {...settings}>
              {
                HeroData.map((data) => (
                    <div key={data.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/*text content section */}
                            <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1relative z-10'> 
                                <h1 data-aos="zoom-out" data-aso-duration="500" data-aos-once="true" className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                                    {data.subtitle} 
                                </h1>
                                <h1 data-aos="zoom-out" data-aso-duration="500" data-aos-once="true"  className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                    {data.title}
                                </h1>
                                <h1 data-aos="zoom-out" data-aso-duration="500" data-aos-once="true"  className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] fond-bold'>
                                    {data.title2}
                                </h1>
                                <div data-aos="fade-up" data-aso-offset="0" data-aos-duration="500" data-aos-delay="300" >
                                    <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white" handler={handleOrderPopup} />
                                </div>
                            </div>
                            {/*img section */}
                            <div className='order-1 sm:order-2'>
                                <div data-aos-once="true" data-aos="zoom-in" className='relative z-10'>
                                    <img src={data.img} alt="" className='w-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_gpx_rgba(0,0,0,.4)] relative z-40'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
              }
            </Slider>
            </div>      
        </div>
    </div>
  );
};

export default Hero;