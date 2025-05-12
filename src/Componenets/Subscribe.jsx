import React, {useState} from "react"

function Subscribe() {
  const [subscribe, setSubscribe] = useState("")

  const submit= ()=> {
    console.log(subscribe);
    document.getElementById("sub").value = ""
  }

  const change = (event)=>{
    setSubscribe(event.target.value);
  }

  return (
    <section className="h-max md:h-[100vh] lg:h-[100vh] flex justify-center items-center px-5 md:px-0 lg:px-0">
        <div className="subscribe-box flex flex-col py-12 md:py-20 lg:py-20 gap-7 px-5 w-[100%] md:w-[80%] lg:w-[80%] justify-center items-center text-center bg-[#FFF1DE] rounded-4xl pop" >
            <p className="text-[#FB9333]" data-aos="fade-up">Our Subscribe</p>
            <h2 className="text-[#575757] font-semibold text-[30px] max-w-100 leading-9" data-aos="fade-up">Subscribe To Get The Latest
            Promo from Jez Salad</h2>
            <p className="max-w-100 text-[14px]" data-aos="fade-right">We recommended you to subscribe to our promo program, 
            drop your email below to get daily update about us</p>
            <div className="gap-3 md:gap-2 lg:gap-2 w-120 flex flex-col md:flex-row lg:flex-row items-center justify-center">
                <input 
                  type="text" 
                  className="w-60 bg-white outline-0 py-3 rounded-[9px] px-4 text-[12px]" 
                  placeholder="Enter your email address"
                  name="sub"
                  id="sub"
                  value={subscribe}
                  aria-label="submit Email"
                  onChange={change} data-aos="fade-left"/>
                <button 
                  className="sign-up w-56 md:w-[max-content] lg:max-[content] px-4 py-2"
                  onClick={submit} data-aos="fade-up">Subscribe</button>
            </div>
        </div>
        
    </section>
  )
}

export default Subscribe