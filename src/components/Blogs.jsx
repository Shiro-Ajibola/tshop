import React from 'react'
import Heading from './Heading';
import Img1 from '../assets/pics3/blog-1.jpg'
import Img2 from '../assets/pics3/blog-2.jpg'
import Img3 from '../assets/pics3/blog-3.jpg'

const BlogData = [
    {
        title: "How to choose the Perfect Smartwatch",
        subtitle: 
            "Choosing the perfect smartwatch depends on your needs, lifestyle, and budget. Start by determining its primary use: fitness tracking, productivity, or style. Look for compatibility with your smartphone's operating system (iOS or Android) to ensure seamless connectivity. Fitness enthusiasts should prioritize health metrics like heart rate, sleep tracking, and GPS, while tech-savvy users might value advanced features like app integration, NFC payments, or voice assistants. Check battery life, durability (water resistance and build quality), and comfort for everyday wear. Lastly, balance functionality with design to fit your personal style and ensure it meets your budget.",
        published: "Feb 24, 2024 by Bobby Jay",
        image: Img1,
        aosDelay: "0",
    },
    {
        title: "How to choose the Perfect Gadget",
        subtitle: 
            "To choose the perfect gadget, start by defining your specific needs and budget to narrow your options. Research key features, performance, and compatibility with your current devices or ecosystem. Check online reviews, expert opinions, and user feedback for insights on reliability and usability. Compare specifications and pricing across multiple brands, and consider after-sales support like warranties or customer service. Finally, visit a store or try a demo, if possible, to ensure the gadget meets your expectations in terms of functionality and user experience.",
        published: "May 4, 2024 by The Deep",
        image: Img2,
        aosDelay: "200",
    },
    {
        title: "How to choose the Perfect VR Headset",
        subtitle: 
            "To choose the perfect VR headset, start by identifying your intended use—gaming, professional applications, or casual entertainment—and your budget. For gaming, consider features like refresh rate, resolution, field of view, and compatibility with platforms like PlayStation or PC. Wireless options, like the Meta Quest 3, offer portability, while tethered headsets like the Valve Index provide high-end performance. Ensure comfort for prolonged use by checking weight and adjustable straps, and confirm that your hardware meets the headset's system requirements. Additionally, look into content libraries, tracking systems, and add-ons like controllers or eye tracking. A good balance between performance and price ensures the right choice for your needs.",
        published: "Nov 2, 2024 by Olowe Ogege",
        image: Img3,
        aosDelay: "400",
    },
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container'>
            {/*Head Section */}
            <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
            {/*Blog Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/*Blog Card */}
                {
                    BlogData.map((data) => (
                        <div data-aos="faded-up" data-aos-delay={data.aosDelay} key={data.title} className='bg-white dark:bg-gray-900'>
                            {/*Image section */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-110 duration-500 '/>
                            </div>
                            {/*Contect Section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Blogs;