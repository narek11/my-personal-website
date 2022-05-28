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
  return (<div className="contacts-container flex flex-col items-start mt-5">
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

const Skills = () => {
  const list = ['React Native', 'GraphQL', 'Typescript', 'React.js', 'Javascript', 'Redux', 'API Integration', 'REST', 'Agile', 'iOS', 'Android', 'Data Structures', 'Algorithms', 'Math', 'Bitrise', 'Crashlytics', 'Unit Testing', 'RNTL', 'Jest', 'E2E Testing', 'Detox', 'CI/CD']
  const Skill = ({ name }) => (
    <div className="flex justify-center p-2 m-1 text-white text-xs bg-current rounded-md inline-block">
      {name}
    </div>)
  return (<div className="mt-7">
    <h2 className="text-2xl text-current font-bold">SKILLS</h2>
    <div className="w-full border border-y-1 border-current mt-1"></div>
    <div className="flex flex-wrap mt-3">
      {list.map((sk) => <Skill key={sk} name={sk}/>)}
    </div>
  </div>)
}

const Summary = () => {
  return (<div className="flex flex-col bg-current p-4">
    <div className="text-white text-4xl">Narek Musakhanyan</div>
    <div className="text-white text-xl mt-2">Senior Mobile Engineer (React Native)</div>
    <div className="border border-y-10 border-white w-80 mt-2"></div>
    <div className="text-white text-sm mt-3">
      A Senior React Native Engineer with 6 years of experience in mobile and over 12 years of JavaScript development
      experience in the provision of
      high-quality cross-platform app engineering solutions. Experienced in every single step of app development and
      delivery.
    </div>
  </div>)
}

const Left = () => (<div className="flex justify-center w-1/4 h-full">
  <div className="flex flex-col w-60 items-start">
    <div className="flex justify-center w-full">
      <FaceImage></FaceImage>
    </div>
    <Contacts></Contacts>
    <Skills></Skills>
  </div>
</div>)

const Right = () => (<div className="w-3/4  bg-green-300">
  <Summary></Summary>
</div>)

const ResumePage = () => {
  return (<div className="flex mt-5 ml-2">
    <Left></Left>
    <Right></Right>
  </div>)
}

export default ResumePage
