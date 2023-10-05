import React from 'react'

const Exams = () => {
    return (
        <div className='w-full flex flex-col items-center font-sans'>
            <div className="w-full h-[80px] shadow-lg shadow-black/20 bg-gradient-to-r mb-2 from-rose-900 via-rose-600  to-rose-900 flex items-center justify-center ">
                <h1 className="md:text-4xl text-2xl font-semibold text-center text-white/90">
                    Exam Scheduals
                </h1>
            </div>
            <div className="w-[85%] text-justify">
                <h2 className='font-bold md:text-2xl text-xl my-2 heading py-1'>Criteria for appearing in the BISE and University Examinations</h2>
                <p className='font-semibold md:text-xl text-lg my-2 underline text-rose-600'>Criteria for appearint in exam:</p>
                <ul className='list-disc'>
                    <li className='text-md py-1 text-black/70'>The students getting F grade in the internal examinations are not eligible for appearing in the BISE or University Examinations.
                    </li>
                    <li className='text-md py-1 text-black/70' >Violation of college rules cancels the student's right to appear in examinations.
                    </li>
                    <li className='text-md py-1 text-black/70' >The principal is authorized to suspend the admission of any student to appear in the examinations ten(10) days before the commencement of examination.
                    </li>
                    <li className='text-md py-1 text-black/70' >75% lecture attendance for B.I.S.E. Fsd, Examinations and 60% lecture attendance is required for University examination.
                    </li>
                    <li className='text-md py-1 text-black/70' >Leave applications are no substitute for lecture shortage, even if the student has to appear for the examination by parts.
                    </li>
                    <li className='text-md py-1 text-black/70' >Lecture attendance in each of the subjects must be up to the mark.
                    </li>
                    <li className='text-md py-1 text-black/70' >As for the medical certificate, the student has to observe the following rules in getting leave.
                    </li>
                </ul>


                {/* ///////////---Leave Application---/////////////// */}
                <p className='font-semibold md:text-xl text-lg my-2 underline text-rose-600'>Leave application must bear clearly:-</p>
                <ul className='list-disc'>
                    <li className='text-md py-1 text-black/70'>Student's name, class, roll no, tutorial group no, date, reason for leave, total number of days for which the leave is required.

                    </li>
                    <li className='text-md py-1 text-black/70' >Submit the leave application to the teacher in charge of the class. The posted application must be addressed to the person in charge (not to the Principal). Leave application for more then four days should bear the father's / guardian's signature.

                    </li>
                    <li className='text-md py-1 text-black/70' >The principal is authorized to suspend the admission of any student to appear in the examinations ten(10) days before the commencement of examination.
                    </li>
                    <li className='text-md py-1 text-black/70' >The teacher in charge of the class is authorized to grantr four-day leave except in case the leave i required during the house-tests. The application of leave for more then four days must be forwaded to the Principal with the recommendation of the teacher in charge.

                    </li>

                </ul>

                {/* ///////////--- The leave application will not be accepted if:-----/////////////// */}
                <p className='font-semibold md:text-xl text-lg my-2 underline text-rose-600'>The leave application will not be accepted if:--</p>
                <ul className='list-disc mb-3'>
                    <li className='text-md py-1 text-black/70'>The student fails to submit the application within three days after his returning to the college.


                    </li>
                    <li className='text-md py-1 text-black/70' >The application does not bear the father's / guardian's signature.


                    </li>
                    <li className='text-md py-1 text-black/70' >Failing it the student will be fined Rs. 10 per day. There will be no fine if the medical certificate reaches the college office even late. Application along with medical certificate may be received and accepted even a week afterwards.

                    </li>
                    <li className='text-md py-1 text-black/70' >Leave for more then seven days without medical certificate will be granted only on the recommendations of the senior tutor.
                    </li>

                </ul>
                <h2 className='font-semibold text-black/80 text-xl my-2'><span className='text-xl text-rose-600 font-bold'>NOTE:</span> F grade students are not eligible to appear in B. I. S. E. Examination.</h2>
                <p className='text-md py-1 text-black/70 mb-5'>The study progress report is sent to the parents/ guardians, if the Principal finds the performance of a student unsatisfactory.The student can be compelled to leave the institution at any time during his academic session. Any student found guilty of using unfair means in the examination can be rusticated from the college or punished in other suitable terms.</p>
            </div>
        </div>
    )
}

export default Exams