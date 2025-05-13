import House from "../assets/Group.png"
import One from "../assets/one.png"
import Trophy from "../assets/trophy 1.png"
import Arrow from "../assets/Arrow - Right.png"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function About() {
        useEffect(()=>{
          AOS.init({
            duration: 1200
          });
        },[])

  return (
    <section className="about-sec h-[max-content] bg-white text-[#828282] px-5 md:px-35 lg:px-35 flex flex-col gap-20 py-20">
        <div className="flex gap-4 justify-between flex-col md:flex-row lg:flex-row">
            <h1 className=" text-[#575757] font-semibold text-[30px] max-w-130 leading-9 text-center md:text-start lg:text-start" data-aos="fade-right" >WHY CHOOSE US <br /> 
                <span className="text-[#FB9333]">FOR YOUR HEALTHY FOOD</span></h1>
            <p className="max-w-120 text-center md:text-start lg:text-start">We continue to consistently choose and maintain the quality of the fruit served, so that it remains fresh and nutritious when you eat it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7">
            <div className="flex flex-col gap-13 smaller-box p-4 rounded-2xl border border-amber-300 md:border-0 lg:border-0" >
                <div className="h-18 w-18 bg-[#FFE8C8] rounded-2xl flex justify-center items-center"><img src={House} className="size-12" alt="Icon" /></div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-black text-[20px]">Own fruit orchard</h1>
                    <p>A very nutritous fruit that build great muscle to build confident.
                        It also aid in skin glowing for a beatiful man and woman
                    </p>
                </div>
                <button className="flex items-center gap-1 text-[15px] max-w-[max-content] hover:bg-[#FB9333] hover:text-[#FFF0DC] hover:rounded-4xl hover:px-5 hover:py-1 ">
                    Learn More <img src={Arrow} alt="Arrow" className="size-[20px] inline arrow-icon" /></button>
            </div>

            <div className="flex flex-col gap-13 smaller-box p-4 rounded-2xl border border-amber-300 md:border-0 lg:border-0" data-aos="fade-up">
            <div className="h-18 w-18 bg-[#FFE8C8] rounded-2xl flex justify-center items-center"><img src={One} className="size-12" alt="Icon" /></div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-black text-[20px]">#1 Healthy Fruit Salad</h1>
                    <p>The pioneer of healthy fruit salads that 
                     are delicious & suitable for all people 
                     with the best quality assurance.</p>
                </div>
                <button className="flex items-center gap-1 text-[15px] max-w-[max-content] hover:bg-[#FB9333] hover:text-[#FFF0DC] hover:rounded-4xl hover:px-5 hover:py-1 ">
                    Learn More <img src={Arrow} alt="Arrow" className="size-[20px] inline arrow-icon" /></button>
            </div>

            <div className="flex flex-col gap-13 smaller-box p-4 rounded-2xl border border-amber-300 md:border-0 lg:border-0" data-aos="fade-left">
            <div className="h-18 w-18 bg-[#FFE8C8] rounded-2xl flex justify-center items-center"><img src={Trophy} className="size-12" alt="Icon" /></div>
                <div className="flex flex-col gap-4 justify-between">
                    <h1 className="font-bold text-black text-[20px]">100 Top Brand</h1>
                    <p>We are one of the best brands in the 
                     Food and Beverage sector 
                     in Indonesia. We offer nothing but the Best</p>
                </div>
                <button className="flex items-center  gap-1 text-[15px] max-w-[max-content] hover:bg-[#FB9333] hover:text-[#FFF0DC] hover:rounded-4xl hover:px-5 hover:py-1 ">
                    Learn More <img src={Arrow} alt="Arrow" className="size-[20px] inline arrow-icon" /></button>
            </div>
        </div>
    </section>
  )
}

export default About