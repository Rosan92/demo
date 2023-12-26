import React from 'react'
import iot from '../images/iot.png'
import iot2 from '../images/iot-2.png'
import iit from '../images/IIT-1.png'
import iit2 from '../images/IIT-2.png'
import ls from '../images/Life-Skills.jpg'
import ls2 from '../images/Life-Skills2.jpg'

const NetIitSkill = () => {
  return (
    <div className='mt-4'>
        <div className='d-flex'>
            <div className='w-100'>
                <h1 className='text-danger text-start'>Internet of things (IOT) and AI with Robotics</h1>
                <p className='text-start'>Internet of Things (IoT) incorporates internet-connected devices or sensors that have the potential to collect millions and billions of Gigabytes of data in real-time. Without any human intervention, the data in IoT is transferred among the various devices over a wireless network.</p>
            </div>
            <div className='w-100'>
                <img src={iot} className='w-100 h-100 image-fluid' />
            </div>
            <div className='w-100'>
                <img src={iot2} className='w-100 h-100 image-fluid' />
            </div>
        </div>
        <div className='d-flex'>
            <div className='w-100'>
                <h1 className='text-danger text-start'>Coming Soon IIT Foundation</h1>
                <p className='text-start'>IIT JEE foundation is a starting point (building block) for JEE aspirants from class 6 to 10. Sometimes also called as "IIT JEE Launching Programs", the foundation course helps aspirants become mentally and strategically strong when they start studying IIT JEE concepts and topics, ideally from class 11 onwards.</p>
            </div>
            <div className='w-100'>
                <img src={iit} className='w-100 h-100 image-fluid' />
            </div>
            <div className='w-100'>
                <img src={iit2} className='w-100 h-100 image-fluid' />
            </div>
        </div>
        <div className='d-flex'>
            <div className='w-100'>
                <h1 className='text-danger text-start'>Coming Soon Skill Education</h1>
                <p className='text-start'>Life skills are abilities for adaptive and positive behavior that enable humans to deal effectively with the demands and challenges of life.[1] This concept is also termed as psychosocial competency.[2] The subject varies greatly depending on social norms and community expectations but skills that function for well-being and aid individuals to develop into active and productive members of their communities are considered as life skills.</p>
            </div>
            <div className='w-100'>
                <img src={ls} className='w-100 h-100 image-fluid' />
            </div>
            <div className='w-100'>
                <img src={ls2} className='w-100 h-100 image-fluid' />
            </div>
        </div>
    </div>
  )
}

export default NetIitSkill