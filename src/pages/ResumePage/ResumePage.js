import React from 'react'
import { GrMail, GrLinkedin } from 'react-icons/gr'
import { AiTwotonePhone } from 'react-icons/ai'
import { BsStackOverflow } from 'react-icons/bs'

const FaceImage = () => {
  return (<img src={require('../../assets/narek-forest-small-volume.jpg')}
               alt="My photo" className="h-40 w-40 bg-contain rounded-full "/>

  )
}

const Contacts = () => {
  return (<div className="contacts-container flex flex-col items-start mt-5 bg-amber-600">
    <div className="my-2">
      <GrMail className="fill-current"/>
      <a href="mailto:nmusakhanyan@gmail.com" className="text-xs text-black">nmusakhanyan@gmail.com</a>
    </div>
    <div className="my-2">
      <AiTwotonePhone className="fill-current"/>
      <a href="tel:+37441661259" className="text-xs text-black">+374 41 661259</a>
    </div>
    <div className="my-2">
      <GrLinkedin className="fill-current"/>
      <a href="http://linkedin.com/in/narekmusakhanyan" target="_blank"
         className="text-xs text-black">linkedin.com/in/narekmusakhanyan</a>
    </div>
    <div className="my-2">
      <BsStackOverflow className="fill-current"/>
      <a href="https://stackoverflow.com/users/1627375/narek" target="_blank" className="text-xs text-black">My
        Stackoverflow</a>
    </div>
  </div>)
}
const ResumePage = () => {

  return (<div className="flex w-screen h-screen">
    <div className="w-1/4 bg-red-600 flex justify-center">
      <div className="bg-green-900 w-60 flex flex-col items-center">
        <FaceImage></FaceImage>
        <Contacts></Contacts>
      </div>

    </div>
    <div className="w-3/4 h-full bg-gray-300">3/4</div>

  </div>)
}

export default ResumePage
