import React from 'react'
import OurMission from './OurMission'
import { ProfileCard } from './ProfileCard'

const About = () => {
  return (
    <>
      <OurMission title="OUR MISSION" paragraph="We aim at providing our students with a highly competitive learning enviorment where concepts are inculcated and research is encouraged. We are striving to broaden minds and ennoble intellectual approach of our students enabling them to stand out in the world"
        imgSrc="/images/ourMission.jpg" flex="md:flex-row" />

      <OurMission title="علامہ محمد اقبال" paragraph="ہردورمیں تعلیم ہے امراضِ ملت کی دوا

خونِ فاسد کے لیے تعلیم ہے مثل نیشتر"
        imgSrc="/images/allamaIqbal.jpeg" flex="md:flex-row-reverse" />

      <OurMission title="Qauid-e-Azam" paragraph="Education is a matter of life and death for Pakistan. The world is progressing so rapidly that without requisite advance in education, not only shall we be left behind but wiped out altogether."
        imgSrc="/images/Qauid.jpeg" flex="md:flex-row" />


    </>
  )
}

export default About