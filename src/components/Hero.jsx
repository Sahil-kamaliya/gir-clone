import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='text-center p-4 bg-[#009EAB1A] sticky top-0 '>
           <p><span className='font-bold'>Latest Update :</span> For the upcoming season 2025/26, safari bookings are open for Gir National Park.
            Always book your safari in advance.
           </p>
        
        </div>

        <div className ="relative w-full h-[75vh] overflow-hidden">
        
            <img className="w-full h-full object-cover"src="https://www.girnationalpark.online/assets/img/gir-safari3.webp" alt="" />
            <div className="absolute inset-0 flex ">
               <p className="text-white text-8xl flex items-center ml-11 font-bold font-sans">
                  Gir Wildlife <br></br>Sanctuary
               </p>
            </div>
            
        </div>

        
    </div>
  )
}

export default Hero
