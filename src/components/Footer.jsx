import React from 'react'
import { FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { FaInstagram, FaLocationArrow, FaSnapchat } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#", 
    },
    {
        title: "About",
        link: "/#about", 
    },
    {
        title: "Contact",
        link: "/#contact", 
    },
    {
        title: "Blog",
        link: "/#blog", 
    },
];

const Footer = () => {
  return (
    <div className='drak:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/*Company Details */}
                <div className='py-8 px-4'>
                <a href="#" className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl uppercase' >T-shop</a>
                <p className='text-gray-800 dark:text-gray-400 lg:pr-24 pt-3'>E-SHOP stands out by offering convenience, accessibility, and a seamless shopping experience. It allows customers to browse and purchase products or services from anywhere, at any time, without the limitations of physical store hours.</p>
                <p className='text-gray-700 dark:text-gray-300 mt-4'>Made with love ❤️ by Shiro Ajibola</p>
                <a href="https://www.youtube.com/channel/UCd0kyGlYYIYtB8X9iNsnxtg" target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 text-sm rounded-full'>Visit Our Youtube Channel</a>
                </div>

                {/*Footer Links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/*Second column link */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/*Company Address */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Lagos HOMS Estate, Mushin Lagos Nigeria</p>
                                
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt />
                                <p>+234 09079382285</p>
                            </div>
                            {/*social links */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="# "><FaInstagram className='text-3xl hover:text-primary duration-300'/></a>
                                <a href="# "><FaSnapchat className='text-3xl hover:text-primary duration-300'/></a>
                                <a href="# "><FaLinkedin className='text-3xl hover:text-primary duration-300'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;