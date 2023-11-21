import React from 'react'
import ClgUniform from './ClgUniform'

const RulesRegulation = () => {
  return (
    <div className='w-full min-h-[100vh] bg-slate-100 flex flex-col items-center'>
      <div className="w-full h-[80px] shadow-lg bg-gradient-to-r mb-2 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-semibold text-center text-white/90">
          Rules & Regulation
        </h1>
      </div>
      <div className="w-[90%]">
        <h2 className='heading py-2'>Admission Process</h2>
        <p className=' text-md md:text-lg font-semibold'>The candidate must come up to the required merit determined from time to time.</p>
        <p className='text-md text-black/80 py-3'>The candidate has to appear in person for interview before the Admission Committee appointed by the Principal.</p>

        <h2 className='font-semibold text-lg py-3'>The candidate has to present the following documents in original at the time of interview:</h2>
        <ul className='list-disc w-[80%] text-justify'>
          <li className='text-md text-black/80 py-1'>Written permission from father / Guardian to seek admission to the college Affidavit declaring that the student will not participate in any political activities during college hours.
          </li>
          <li className='text-md text-black/80 py-1'>Testimonials / Certificates of Boards / Universities showing marks / results / grade / percentage / CGPA of the last Examination(s).
          </li>
          <li className='text-md text-black/80 py-1'>Passports size photos (3 for 1st Year), (4 for 3rd Year)
          </li>
          <li className='text-md text-black/80 py-1'>Character Certificate / Provisional Certificate of School / Collegelast attended.
          </li>

        </ul>

        <p className='py-5 w-[80%] text-md text-black/80'><span className='text-xl font-bold text-rose-700 pr-2'>NOTE:</span>All the testimonials should be enclosed with the prescribed/printed admission form available in the prospectus. The class / qyota / category in which admission is sought must be clearly marked.</p>


      </div>
      <div className="w-[90%]">
        <h1 className='heading py-2'>College Uniform</h1>
        <ClgUniform title="Intermediate Students:" summer="Sliver grey trousers, white shirt,Blue Tie, black shoes." winter="Sliver grey trousers, white shirt, Navy blue Blazer / jersey, black shoes." note="Fine at the rate of Rs. 25 per day is levied on violation of the uniform." imgSrc="./images/interuniform.jpeg" width="w-[300px]"/>
<hr />
        <ClgUniform title="BS (Hons) Students:" summer="Sliver grey trousers, white shirt,Maroon Tie, black shoes." winter="Sliver grey trousers, white shirt, Maroon Blazer / jersey, black shoes." note="Fine at the rate of Rs. 25 per day is levied on violation of the uniform." imgSrc="./images/bsuniform.jpeg" width="w-[500px]"/>
      </div>


    </div>
  )
}

export default RulesRegulation