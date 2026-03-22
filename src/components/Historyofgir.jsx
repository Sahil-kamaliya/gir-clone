import React from 'react'

const Historyofgir = () => {
  return (
    <div>
        <div className='flex max-w-6xl mx-auto  flex-col-reverse md:flex-row py-10 '>
             <div className='md:w-1/3 p-5 w-full object-contain'>
                <img className=' rounded-2xl' src="https://www.girnationalpark.online/assets/img/gir-history.webp" alt="" srcset="" />
             </div>

             <div className='p-12 gap-10 md:w-2/3 flex flex-col '>
                 <h2 className='text-black text-6xl font-bold '>History of Sasan Gir National Park</h2>
                  <div className=''>
                     <p className='text-xl'>Being a part of the princely state of Junagarh once, the Nawabs had an important role in the establishment of Gir National Park in Gujarat. Once functioning as the hunting ground for many, the forests of Sasan Gir saw a decline in the population of the Asiatic Lions in the 19th century. This decline in their population, faced by their possible extinction, led the Nawabs of Junagarh to cordon off the forests of Gir to be established as a “protected area”, and barred practices of hunting for sport. The then Nawab of Junagarh, Nawab Sir Muhammad Khanji Rasul Khanji Babi is the one accredited with the conservation effort and the possible establishment of the wildlife sanctuary of Gir.</p>
                     <button className='cursor-pointer my-10 font-semibold text-xl'>Exploler more--</button>
                 </div>
             </div>

        </div>
    </div>
  )
}

export default Historyofgir
