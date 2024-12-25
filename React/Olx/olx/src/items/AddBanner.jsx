import React from 'react'

export default function AddBanner() {
  return (
 <section 
    className="relative w-full h-[70vh] bg-cover bg-center" 
    style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ_DkkICcxMnr-J9TESyTDOdC7y6eV_xfVg&s)' }}>
    
    <div className="absolute inset-0 bg-black opacity-20"></div> 
    <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-6 md:px-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Olx is The Largest MarketPlace of Pakistan's</h2>
        <h3 className="text-lg md:text-xl mb-8">A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying it.</h3>
        </div>
    </div>
  </section>
)
}
