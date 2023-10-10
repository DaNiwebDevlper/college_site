import React from 'react'

const OurMission = ({ title, paragraph, imgSrc, flex }) => {
    return (
        <>
        <div className="flex justify-center">
         <div className={`md:w-full w-[90%] flex justify-evenly items-center ${flex} flex-col  h-[90vh] `}>
            <div className="md:w-[45%]">
                <img src={imgSrc} alt="our missoin" className='rounded-2xl shadow-xl shadow-black/30 w-[600px]' />
            </div>
            <div className="md:w-[40%] px-5 text-justify">
                <h1 className='heading py-1 '>{title}</h1>
                <p className='text-lg text-black/60'>{paragraph}</p>
            </div>

        </div>
        </div>
        <hr className='bg-rose-500 '/>
        </>
       
    )
}

export default OurMission