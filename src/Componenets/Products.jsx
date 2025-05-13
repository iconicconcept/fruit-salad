import plate1 from "../assets/1st plate.png"
import plate2 from "../assets/2nd plate.png"
import plate3 from "../assets/3rd plate.png"
import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

function Products() {
  useEffect(()=>{
      AOS.init({
        duration:1200
      })
    },[])

  return (
    <section className="about-sec h-[max-content] bg-white text-[#828282] px-5 md:px-35 lg:px-35 flex justify-center items-center flex-col py-13">
        <p className="mb-3"data-aos="fade-up">MENU YANG MEMBUATMU JATUH CINTA</p>
        <h1 className="text-[#575757] font-semibold text-[27px] leading-9 text-center" data-aos="fade-up">ENJOY THE BEST MENU AND GET <br /> 
        <span className="text-[#FB9333]">DISCOUNTS</span> AVAILABLE</h1>
        <div className="h-max md:h-100 lg:h-100 w-[100%] mt-13 flex flex-col md:flex-row lg:flex-row gap-7">
            <img src={plate1} alt="Food Bowl" className="size-90" data-aos="fade-up"/>
            <img src={plate2} alt="Fruit Bowl" className="size-90" data-aos="fade-up" />
            <img src={plate3} alt="Menu" className="size-90" data-aos="fade-up"/>
        </div>
    </section>
  )
}

export default Products