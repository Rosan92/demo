import React from 'react'
import device from '../images/device.png'
import playstore from '../images/playstore.png'
import appstore from '../images/appstore.png'
import vdoban from '../images/video-banner-1.jpg'
import vdolect from '../images/Video-lectures.png'
import bookmark from '../images/Bookmarks.png'
import test from '../images/testimonial-img-1.png'
import test1 from '../images/testimonial-img-2.png'

const DownFeautureBanner = () => {
  return (
    <div className='mt-4 mb-4'>
        <div className='d-flex'>
            <div className='w-50'>
                <img src={device} className='w-100 image-fluid' />
            </div>
            <div className='w-50'>
                <h1 className='fs-1'>SRESHTA EDUTECH</h1>
                <br />
                <br />
                <br />
                <h3>Application Learn from any Device Mobile App / Web</h3>
                <a href='#'><img src={playstore} className='w-25 image-fluid mx-2' /></a>
                <a href='#'><img src={appstore} className='w-25 image-fluid mx-2' /></a>
            </div>
        </div>

        {/* Feature */}

        <section className='d-flex mt-4 mb-4'>
            <div className='w-50'>
                <img src={vdoban} className='w-100 image-fluid' />
            </div>
            <div className='w-50'>
                <h1 className='text-start'>Feautures</h1>
                <h4 className='text-start'>Learn Module</h4>
                <div className='d-flex justify-content-evenly'>
                    <div className='w-25 mx-4'>
                        <img src={vdolect} className='w-100 image-fluid mx-2' />
                        <br />
                        <strong>Video Lectures</strong>
                    </div>
                    <div className='w-25 mx-4'>
                        <img src={bookmark} className='w-100 image-fluid mx-2' />
                        <strong>Bookmark and Notebook</strong>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <div className='w-25 mx-4'>
                        <img src={bookmark} className='w-100 image-fluid mx-2' />
                        <strong>Bookmark and Notebook</strong>
                    </div>
                    <div className='w-25 mx-4'>
                        <img src={bookmark} className='w-100 image-fluid mx-2' />
                        <strong>Bookmark and Notebook</strong>
                    </div>
                </div>
            </div>
        </section>

        {/* Student */}

        <section className='d-flex mt-4 mb-4'>
            <div className='w-25'>
                <h1 className='text-start'>What Students Say About Our Courses</h1>
                <p className='text-start'> was looking to develop my professional skills, but didn't have the time or resources to attend in-person classes. That's when I discovered Sreshta EduTech. The platform offered a wide range of courses that fit my needs, and I was able to complete them on.</p>
            </div>
            <div className='w-75'>
                <img src={test} className='w-25 mx-4 image-fluid mx-2' />
                <img src={test1} className='w-25 mx-4 image-fluid mx-2' />
            </div>
        </section>
    </div>
  )
}

export default DownFeautureBanner