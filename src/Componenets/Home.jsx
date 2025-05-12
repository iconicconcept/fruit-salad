import Logo from "../assets/jez salad LOGO.png"
import "../index.css"
import HappyLady from "../assets/chef Illustration.png"
import Products from "./Products"
import Contact from "./Contact"
import Review from "./Review"
import { Link } from "react-scroll"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import harmburger from "../assets/hamburger.png"

 function Home(){

  useEffect(()=>{
    AOS.init({
      duration:1300
    })
  },[])

  const order = ()=>{
    alert("Servive not Availale!")
  }

  const later = ()=>{
    alert("Currently Under Maintainance")
  }


  // const scrollToView = (elementId) => {
  //   const element = document.getElementById(Products);
  //   if (element) {
  //     element.scrollIntoView({behavior: "smooth"})
  //   }
  // }

  return (
    <section 
        className="h-[max-content] bg-white text-[#828282] flex flex-col gap-6 home-sec pb-6">
        <div className="py-5 flex justify-between items-center header w-full px-7 md:px-17 lg:px-17 mb-10">
            <img src={Logo} alt="Logo" />
            <ul className="hidden md:flex lg:flex gap-3 cursor-pointer font-semibold">
              <li className="hover:pointer hover:underline cursor-pointer" >
                <Link to="/" smooth={true} duration={500} className="hover:underline">Home</Link>
              </li>
              <li className="hover:pointer hover:underline cursor-pointer">
                <Link to="/contact" smooth={true} duration={500} className="hover:underline">Contact</Link>
              </li>
              <li className="hover:pointer hover:underline cursor-pointer">
                <Link to="/products" smooth={true} duration={500} className="hover:underline">Menu</Link>
              </li>
              <li className="hover:pointer hover:underline cursor-pointer">
              <Link to="/about" smooth={true} duration={500} className="hover:underline">About Us</Link>
              </li>
            </ul>
            <button className="sign-up hidden md:flex lg:flex" onClick={later}>sign</button>
            <img src={harmburger} className="bg-amber-600 cursor-pointer px-1 py-2 flex md:hidden lg:hidden" alt="toggle" />
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5 px-5 md:px-30 lg:px-30 appear">
            <div className="flex flex-col gap-8">
              <h3 className="bg-[#FFF0DC] w-[max-content] py-2 px-4 text-[#FB9333] rounded-4xl">#1 Best Healthy Salad</h3>
              <h1 className="text-[#575757] font-extrabold text-[40px] md:text-[45px] lg:text-[45px] max-w-100 leading-13"><span className="text-[#FB9333]">Skip</span> The Diet, Just Eat Healthy With Jez Salad</h1>
              <p className="text-[17px] max-w-100">Imagine you don't need a diet because we provide 
              healthy and delicious food for you!</p>
              <button className="sign-up cursor-pointer md:w-[max-content]" onClick={order} data-aos="float-right">Order Food</button>
              <div className="flex justify-center md:justify-start lg:justify-start gap-8">
                <div data-aos="fade-up">
                  <h1 className="font-semibold text-[20px] text-[#575757]">5000+</h1>
                  <p className="text-[15px] ">Customers</p>
                </div>
                <div data-aos="fade-up">
                  <h1 className="font-semibold text-[20px] text-[#575757]">8.000+</h1>
                  <p className="text-[15px] ">Delivery</p>
                </div>
                <div data-aos="fade-up">
                  <h1 className="font-semibold text-[20px] text-[#575757]">1,000+</h1>
                  <p className="text-[15px] ">Rating</p>
                </div>
              </div>
            </div>
            <img data-aos="fade-up" src={HappyLady} alt="chef" className="illustration size-[500px] appear" />
        </div>
        
    </section>
  )
}

export default Home