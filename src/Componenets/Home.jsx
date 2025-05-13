import Logo from "../assets/jez salad LOGO.png"
import { useState } from "react"
import "../index.css"
import HappyLady from "../assets/chef Illustration.png"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import harmburger from "../assets/hamburger.png"

 function Home(){

  useEffect(()=>{
    AOS.init({
      duration: 1200
    });
  },[])

  const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
    const closeMenu = ()=>{
        setIsOpen(false)
    }


  const order = ()=>{
    alert("Servive not Availale!")
  }

  const later = ()=>{
    alert("Currently Under Maintainance")
  }

  return (
    <section 
        className="h-[max-content] bg-white text-[#828282] flex flex-col gap-6 home-sec pb-6 relative">
        <div className="py-5 flex justify-between items-center header w-full px-7 md:px-17 lg:px-17 mb-10">
            <img src={Logo} alt="Logo" />
            <ul className="hidden md:flex lg:flex gap-3 cursor-pointer font-semibold">
              <li className="hover:pointer hover:underline cursor-pointer" >
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li className="hover:pointer hover:underline cursor-pointer">
                <a href="./Contact.jsx" className="hover:underline">Contact</a>
              </li>
              <li className="hover:pointer hover:underline cursor-pointer">
                <a href="./Products.jsx" className="hover:underline">Menu</a>
              </li>
              <li className="hover:pointer hover:underline cursor-pointer">
                 <a href="./About.jsx" className="hover:underline">About Us</a>
              </li>
            </ul>
            <button className="sign-up hidden md:flex lg:flex" onClick={later}>sign</button>
            {isOpen ? <img src={harmburger} onClick={toggleMenu} className="bg-amber-600 cursor-pointer px-1 py-2 flex md:hidden lg:hidden" alt="toggle" />
            : <img src={harmburger} onClick={toggleMenu} className="bg-orange-200 cursor-pointer px-1 py-2 flex md:hidden lg:hidden" alt="toggle" />}
        </div>

        {isOpen && <div className="bg-orange-300 h-[70vh] flex justify-center items-center text-white w-full mt-18 absolute z-5">
            <ul className="flex flex-col gap-8 font-bold text-[18px] text-center">
                <li className="cursor-pointer "><a href="/" onClick={closeMenu}>Home</a></li>
                <li className="cursor-pointer"><a href="./Contact.jsx" onClick={closeMenu}>Contact</a></li>
                <li className="cursor-pointer"><a href="./Products.jsx" onClick={closeMenu}>Menu</a></li>
                <li className="cursor-pointer"><a href="./About.jsx" onClick={closeMenu}>About Us</a></li>
            </ul>
    </div>}

        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5 px-5 md:px-30 lg:px-30 appear">
            <div className="flex flex-col gap-8">
              <h3 className="bg-[#FFF0DC] w-[max-content] py-2 px-4 text-[#FB9333] rounded-4xl">#1 Best Healthy Salad</h3>
              <h1 className="text-[#575757] font-extrabold text-[40px] md:text-[45px] lg:text-[45px] max-w-100 leading-13"><span className="text-[#FB9333]">Skip</span> The Diet, Just Eat Healthy With Jez Salad</h1>
              <p className="text-[17px] max-w-100">Imagine you don't need a diet because we provide 
              healthy and delicious food for you!</p>
              <button className="sign-up cursor-pointer md:w-[max-content]" onClick={order} data-aos="float-right">Order Food</button>
              <div className="flex justify-center md:justify-start lg:justify-start gap-8">
                <div >
                  <h1 className="font-semibold text-[20px] text-[#575757]">5000+</h1>
                  <p className="text-[15px] ">Customers</p>
                </div>
                <div>
                  <h1 className="font-semibold text-[20px] text-[#575757]">8.000+</h1>
                  <p className="text-[15px] ">Delivery</p>
                </div>
                <div data-aos="fade-up">
                  <h1 className="font-semibold text-[20px] text-[#575757]">1,000+</h1>
                  <p className="text-[15px] ">Rating</p>
                </div>
              </div>
            </div>
            <img src={HappyLady} alt="chef" className="illustration size-[500px] appear" />
        </div>
        
    </section>
  )
}

export default Home