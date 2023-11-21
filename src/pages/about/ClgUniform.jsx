import React from 'react'

const ClgUniform = ({ title, summer, winter, note, imgSrc, width }) => {
    return (
        <div className='flex justify-evenly min-h-screen md:items-center items-left md:flex-row flex-col my-5'>
            
            <div className="w-[60%] mb-9">
            <p className='text-lg font-bold py-3 underline'>The following uniform is prescribed for the students of the college</p>
                <h1 className='font-bold text-xl py-3'>{title}</h1>
                <p className='text-md text-black/80 py-3'><span className='font-bold text-lg pr-2'>Summer:</span>{summer}</p>

                <p className='text-md text-black/80 py-3'><span className='font-bold text-lg pr-2'>Winter:</span>{winter}</p>

                <p className='text-md text-black/80 py-3'><span className='font-bold text-lg pr-2'>NOTE:</span>{note}</p>
                
            </div>
            <div className="w">
                <img src={imgSrc}
                 className={`${width} shadow-lg`} />
            </div>
        </div>
    )
}

export default ClgUniform