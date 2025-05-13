import logo from '../assets/jez salad LOGO.png'
import email from "../assets/email.png"
import location from "../assets/location_on.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import call from "../assets/call.png"
import "../index.css"
import { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"

function Contact() {
    useEffect(()=>{
        Aos.init({
            duration: 1200
        });
    }, [])

  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 lg:gap-0 lg:grid-cols-4 h-[40vh] px-5 md:px-30 lg:px-30 py-10'>
        <div className='flex flex-col justify-between md:max-w-50 lg:max-w-50 appear gap-5 text-center md:text-start lg:text-start items-center md:items-start lg:items-start'>
            <img src={logo} alt="logo" className="logo w-22 h-4" />
            <p className='text-[15px] max-w-70 md:max-w-0 lg:max-w-0' data-aos="fade-left">Jez Salad is the pioneer of 
                healthy fruit salad with 
                high nutrition.</p>
            <p className='text-[14px]' data-aos="fade-left">©Copyright Jez Salad</p>
        </div>

        <div className='flex justify-center '>
            <ul className='flex flex-col gap-2 justify-center text-center md:text-start lg:text-start text-[17px] md:text-[14px] lg:text-[14px]'>
                <li><a className="cursor-pointer hover:text-[#FB9333]">Feature</a></li>
                <li><a href='./Products.jsx' className='cursor-pointer hover:text-[#FB9333]'>Menu</a></li>
                <li><a href='./Home.jsx' className='cursor-pointer hover:text-[#FB9333]'>Promo</a></li>
                <li><a href='./Contact.jsx' className='cursor-pointer hover:text-[#FB9333]'>Contact</a></li>
                <li><a href='./About.jsx' className='cursor-pointer hover:text-[#FB9333]'>About Us</a></li>
            </ul>
        </div>
        <div className='flex flex-col text-center md:text-start lg:text-start items-center md:items-start lg:items-start gap-4 ' >
            <p className="text-[#FB9333] font-semibold">Get in Touch</p>
            <div className='text-[13px]'>
                <img src={location} alt="location" className='inline size-4 mr-1' /> 8819 Ohio St. South Gate,
                CA 90280
            </div>
            <div className='text-[13px]' >
                <img src={email} alt="email" className='inline size-4 mr-1' /> Ourstudio@hello.com
            </div>
        <div className='text-[13px]'>
            <img src={call} alt="call" className='inline size-4 mr-1' /> +1 386-688-3295
        </div>
        </div>
        <div className='flex flex-col text-center md:text-start lg:text-start items-center md:items-end lg:items-end gap-4 pb-8 md:pb-0 lg:pb-0'>
            <div className='flex gap-8'>
                <a href="www.x.com"><img src={twitter} alt="twitter" className='size-5' /></a>
                <a href="www.linkedin.com"><img src={linkedin} alt="linkedin" className='size-5' /></a>
                <a href="www.instagram.com"><img src={instagram} alt="instagram" className='size-5' /></a>
            </div>
            <p className='text-[13px]'>Follow our social media.</p>
        </div>
        
    </footer>
  )
}

export default Contact