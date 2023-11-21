import React from 'react'
import { ProfileCard } from './ProfileCard'

const DevelopmentTeam = () => {
  var imageStyle = {
    background:
      'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2)), url("/images/bg-team.svg") no-repeat',
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    // Adjust the height as needed
  };
  return (
    <div className='w-full h-screen' style={imageStyle}>
      <h1 className='heading uppercase ml-9 mt-9 p-2'>development team</h1>
      <p className='text-lg text-black/60 ml-9'>This Website is Developed By the Following Team Members.</p>
      <div className="flex flex-wrap w-full justify-center gap-3 py-9">
        <ProfileCard imgSrc="/images/Mahmood.jpg" title="Mahmood Hassan" skill="Supervisor" CV='/pdf/danishCV.docx' gmail="dnazir343@gmail.com" />
        <ProfileCard imgSrc="/images/danish1.jpg" title="Danish Nazir" skill="MERN Developer" CV="/pdf/danishCV.docx" gmail="dnazir343@gmail.com" />

        <ProfileCard imgSrc="/images/demi.png" title="Hamza" skill="MERN Developer" gmail="dnazir343@gmail.com" CV="/pdf/danishCV.docx"/>
      </div>

    </div>
  )
}

export default DevelopmentTeam