import React from 'react'
import Heading from './Heading';
import ProductCard from './ProductCard';
import Img1 from '../assets/pics2/p-1.jpg'
import Img2 from '../assets/pics2/p-2.jpg'
import Img3 from '../assets/pics2/p-3.jpg'
import Img4 from '../assets/pics2/p-4.jpg'
import Img5 from '../assets/pics2/p-5.jpg'
import Img6 from '../assets/pics2/p-9.jpg'
import Img7 from '../assets/pics2/p-7.jpg'
import Img8 from '../assets/pics2/p-10.jpg'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "AKG Headphones",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Apple I-watch",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Bose Headphones",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Boat Headphones",
        price: "120",
        aosDelay: "200",
    },
]

const ProductsData2 = [
    {
        id: 5,
        img: Img5,
        title: "Beats Headphones",
        price: "350",
        aosDelay: "100",
    },
    {
        id: 6,
        img: Img6,
        title: "Sony Headphones",
        price: "170",
        aosDelay: "200",
    },
    {
        id: 7,
        img: Img7,
        title: "Oraimo Headphones",
        price: "240",
        aosDelay: "300",
    },
    {
        id: 8,
        img: Img8,
        title: "JBL Headphone",
        price: "345",
        aosDelay: "300",
    },
   
]
const Products = () => {
  return (
    <div>
        <div className='container'>
            {/*Header section */}
            <Heading title="Our Products" subtitle={"Explore Our Products"}/>
            {/*Body section */}
            <ProductCard data={ProductsData}/>
            <ProductCard data={ProductsData2}/>
        </div>
    </div>
  )
}

export default Products;