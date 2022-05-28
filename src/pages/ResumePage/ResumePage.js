import React from 'react'
import { GrMail, GrLinkedin } from 'react-icons/gr'
import { AiTwotonePhone } from 'react-icons/ai'
import { BsStackOverflow } from 'react-icons/bs'
import { IoIosSquareOutline } from 'react-icons/io'

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

const Languages = () => {
  return (<div className="mt-10">
    <h2 className="text-2xl text-current font-bold">LANGUAGES</h2>
    <div className="w-full border border-y-1 border-current mt-1"></div>
    <div className="flex flex-col mt-3">
      <div className="text-black text-sm font-medium">English</div>
      <div className="text-current italic">Native or Bilingual Proficiency</div>
    </div>
    <div className="flex flex-col mt-3">
      <div className="text-black text-sm font-medium">Armenian</div>
      <div className="text-current italic">Native or Bilingual Proficiency</div>
    </div>
  </div>)
}

const Interests = () => {
  const list = ['Music', 'Hiking', 'Reading']
  const Interest = ({ name }) => (<div className="border border-1 border-gray-300 px-2 py-1 rounded-lg">{name}</div>)
  return (<div className="mt-10">
    <h2 className="text-2xl text-current font-bold">INTERESTS</h2>
    <div className="w-full border border-y-1 border-current mt-1"></div>
    <div className="flex flex-wrap justify-start mt-3 space-x-2">
      {list.map((name) => <Interest key={name} name={name}/>)}
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
    <Languages></Languages>
    <Interests></Interests>
  </div>
</div>)

const WorkExperience = () => {
  const list = [
    {
      role: 'Senior React Native Engineer',
      company: 'Modus Create, Inc.',
      desc: 'The client was Verizon Communications Inc. The Android TV app is to view media backed from phone https://play.google.com/store/apps/details?id=com.vcast.mediamanager.tv&pli=1',
      companyLocation: 'Reston, Virginia, USA',
      startDate: '01/2021',
      endDate: '04/2021',
      responsibilities: ['Was responsible for delivering a complex pagination solution for Android TV', 'Fixing critical and complex bugs']
    },
    {
      role: 'React Native Contractor',
      company: 'Upstack Technologies, Inc.',
      desc: '',
      companyLocation: 'New York, USA',
      startDate: '12/2019',
      endDate: '12/2020',
      responsibilities: [
        'Have been engaged in few freelance projects',
        'Got several Udemy courses/certificates and did an intensive study on algorithms and data structures',
        'Aced Toptal and Turing interviews'
      ]
    },
    {
      role: 'React Native Engineer',
      company: 'Spotlight Social.',
      desc: 'Spotlight Social is a networking app staying in touch with communities https://spotlightsocial.app/://play.google.com/store/apps/details?id=com.vcast.mediamanager.tv&pli=1',
      companyLocation: 'Somerset West, South Africa',
      startDate: '08/2018',
      endDate: '11/2019',
      responsibilities: [
        'Successfully Launched this big app in the iOS and Android stores',
        'App quickly got 10,000 + downloads with positive reviews which helped to raise funding for further development of the app',
        'Initiated and supervised specific feature suggestions and development'
      ]
    },
    {
      role: 'React Native Engineer',
      company: 'GolfPlayed, Inc.',
      desc: 'GolfPlayed is an app serving golfing communities to make your experience as easy and smooth as possible https://golfplayed.com/',
      companyLocation: 'Somerset West, South Africa',
      startDate: '12/2017',
      endDate: '08/2018',
      responsibilities: [
        'Successfully led the company to launch the app and earn the trust of investors and onboard new happy investors. You can read about the company CEO review on my LinkedIn profile',
        'Was quickly granted the role of Lead Developer in the project to organize and lead the mobile side of the project under pressure with Agile methodology',
        'Identified and solved memory leaks, performance issues in the app which was causing huge user experience and usability issues'
      ]
    },
    {
      role: 'React Native Developer',
      company: 'Blue Frog Software Pty Ltd.',
      desc: 'This is an app to sell store products. The store items are managed by a separate web interface https://bluefrogsoftware.com.au/',
      companyLocation: 'Melbourne, Australia',
      startDate: '07/2017',
      endDate: '11/2017',
      responsibilities: [
        'Successfully launched the app',
        'Integrated payment gateway and started revenue generation',
        'Identified and solved critical bugs for performance enhancements'
      ]
    },


    {
      role: 'Senior React Native Engineer',
      company: 'Modus Create, Inc.',
      desc: 'The client was Verizon Communications Inc. The Android TV app is to view media backed from phone https://play.google.com/store/apps/details?id=com.vcast.mediamanager.tv&pli=1',
      companyLocation: 'Reston, Virginia, USA',
      startDate: '01/2021',
      endDate: '04/2021',
      responsibilities: ['Was responsible for delivering a complex pagination solution for Android TV', 'Fixing critical and complex bugs']
    }

  ]
  const Experience = ({ role, company, desc, companyLocation, startDate, endDate, responsibilities }) => {
    return (
      <div className='mx-5'>
        <h1 className="text-current font-bold">{role}</h1>
        <h2 className="text-black">{company}</h2>
        <div className="flex justify-between text-current italic text-sm">
          <div className="flex items-start mt-2">
            <div>{startDate} - {endDate}</div>
          </div>
          <div>{companyLocation}</div>
        </div>
        <div className="text-gray-500 text-sm">{desc}</div>
        <ul className="list-decimal space-y-1 mt-2">
          {responsibilities.map((r) => (
            <div className="flex items-center">
              <IoIosSquareOutline size={10}/>
              <div className="text-sm ml-1">{r}</div>
            </div>
          ))
          }
        </ul>
      </div>
    )
  }
  return (
    <div className="mx-5 mt-6">
      <h1 className="text-current font-extrabold text-2xl">WORK EXPERIENCE</h1>
      <div className="w-full border border-y-1 border-current mt-1 border-"></div>

      <div className="flex flex-col space-y-7 mt-2">
        {list.map(exp => <Experience {...exp} />)}
      </div>
    </div>
  )
}
const Certificates = () => {
  return (<div className='mx-5 mt-6'>
    <h1 className="text-current font-extrabold text-2xl">CERTIFICATES</h1>
    <div className="w-full border border-y-1 border-current mt-1 border-"></div>
    <div className="flex flex-col p-2">
      <div className='text-black font-semibold'>React Native: Advanced Concepts</div>
      <div className='text-gray-500 italic text-sm'>React Native certificate issued by Udemy</div>
    </div>
  </div>)
}

const Education = () => {
  return (<div className='mx-5 mt-6'>
    <h1 className="text-current font-extrabold text-2xl">EDUCATION</h1>
    <div className="w-full border border-y-1 border-current mt-1 border-"></div>
    <div className="flex flex-col p-2">
      <div className='text-current font-bold text-lg'>Master's of Physics</div>
      <div className='text-black  text-xl'>Yerevan State University</div>
    </div>
  </div>)
}
const Right = () => (<div className="w-3/4">
  <Summary></Summary>
  <div>
    <WorkExperience></WorkExperience>
    <Certificates></Certificates>
    <Education></Education>
  </div>
</div>)

const ResumePage = () => {
  return (<div className="flex my-5 ml-2 ">
    <Left></Left>
    <Right></Right>
  </div>)
}

export default ResumePage
