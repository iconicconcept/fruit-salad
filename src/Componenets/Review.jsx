import { useEffect } from "react"
import Arrow from "../assets/Arrow - Right.png"
import Salena from "../assets/Salena.png"
import David from "../assets/David.png"
import Jennifer from "../assets/Jennifa.png"
import "../index.css"

import Aos from 'aos'
import "aos/dist/aos.css"

function Review() {
    useEffect(()=>{
        Aos.init({
            duration: 1300
        })
    }, [])

  return (
    <section className="Review-sec h-[max-content] bg-[#FFF0DC] text-[#828282] pl-5 px-5 md:pl-35 lg:pl-35 flex flex-col md:flex-row lg:flex-row gap-17 md:gap-10 lg:gap-10 py-20 overflow-x-hidden">
        <div className="md:w-85 lg:w-85 flex flex-col justify-between h-70 fromButtom">
            <h1 className="text-[#575757] font-semibold text-[32px] max-w-100 leading-9" data-aos="fade-up">What Are People 
            Saying <span className="text-[#FB9333]">About Us</span></h1>
            <p className="leading-5 text-[14px]" data-aos="fade-up">We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.</p>
            <h3 className="text-[27px] font-bold text-black" data-aos="fade-up">02 <span className="text-[#828282] text-[12px] font-medium">/ 05</span></h3>
            <div className="flex gap-3" data-aos="fade-up">
                <div className="w-9 h-9 rounded bg-[#FFC87A] flex items-center justify-center cursor-pointer"><img src={Arrow} alt="Arrow" className="size-[22px] arrow-icon rotate-180" /></div>
                <div className="w-9 h-9 rounded bg-[#FB9333] flex items-center justify-center cursor-pointer"><img src={Arrow} alt="Arrow" className="size-[22px] arrow-icon" /></div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 md:gap-5 lg:gap-5 w-[100%] md:w-170 lg:w-170 h-[max-content] md:h-80 lg:h-80">
            <div  className="h-[max-content] w-[100%] md:w-55 lg:w-55 flex flex-col gap-4 py-5 px-5 text-[15px] bg-white relative pt-17 rounded" data-aos="fade-left">
                <img src={Salena} alt="Selena" className="absolute top-[-20px] size-13" />
                <h2 className="text-[17px] font-bold">Selena Gomz</h2>
                <p className="text-[12px]">22 Years</p>
                <p className="text-[14px]">The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. 
                    I recommend this salad to all of you guys! because they really take care of the quality.</p>
            </div>
            <div  className="h-[max-content]  w-[100%] md:w-55 lg:w-55 flex flex-col gap-4 py-5 px-5 text-[15px] bg-white relative pt-17 rounded" data-aos="fade-left">
                <img src={David} alt="Selena" className="absolute top-[-20px] size-13" />
                <h2 className="text-[17px] font-bold">David Ken</h2>
                <p className="text-[12px]">24 Years</p>
                <p className="text-[14px]">The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. 
                    I recommend this salad to all of you guys! because they really take care of the quality.</p>
            </div>
            <div  className="h-[max-content]  w-[100%] md:w-55 lg:w-55 flex flex-col gap-4 py-5 px-5 text-[15px] bg-white relative pt-17 rounded" data-aos="fade-left">
                <img src={Jennifer} alt="Selena" className="absolute top-[-20px] size-13" />
                <h2 className="text-[17px] font-bold">Jennifer Sina</h2>
                <p className="text-[12px]">21 Years</p>
                <p className="text-[14px]">The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. 
                    I recommend this salad to all of you guys! because they really take care of the quality.</p>
            </div>
        </div>
    </section>
  )
}

export default Review