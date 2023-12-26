import React from 'react'
import about from '../images/about.png'
import learn from '../images/learn.png'
import mind from '../images/mindmaps.png'
import video from '../images/videolecture.png'
import quiz from '../images/quiz.png'

const AboutHowWeWork = () => {
  return (
    <section>
    <div className='d-flex mt-4'>
        <div className='w-50'>
            <img src={about} className='w-100 image-fluid' />
            <p>
                Whether you are starting a new topic or revising an old one, Sreshta Edutech Mind Maps,video lectures and practice questions are designed to match your unique skill set. Learning becomes effective when flavoured with good video lectures, materials,Mind Maps, and Examination-Practicing questions/tests.
                MindMap is to visually organize information and ideas, allowing for better understanding, memory retention, and creative thinking. which are graphical representations that start with a central Idea.
            </p>
        </div>
        <div className='w-50'>
            <h2 className='fs-1'>Transform Your Learning Experience With Us</h2>
            <p>Designed to suit every child's unique learning need</p>
            <div>
                <div>
                    {/* <img src={content} className='w-100 image-fluid' /> */}
                    <a><i class="bi bi-window-fullscreen"></i></a>
                </div>
                <div>
                    <h4>Content</h4>
                    <p>Defined in simplest way with KeyPoint</p>
                </div>
            </div>
            <div>
                <div>
                    {/* <img src={content} className='w-100 image-fluid' /> */}
                    <a><i class="bi bi-window-fullscreen"></i></a>
                </div>
                <div>
                    <h4>Video and More</h4>
                    <p>Self-explanatory and animated modules</p>
                </div>
            </div>
            <div>
                <div>
                    {/* <img src={content} className='w-100 image-fluid' /> */}
                    <a><i class="bi bi-window-fullscreen"></i></a>
                </div>
                <div>
                    <h4>Exams</h4>
                    <p>Concept wise assessment based on bloom’s taxonomy</p>
                </div>
            </div>
            <div>
                <div>
                    {/* <img src={content} className='w-100 image-fluid' /> */}
                    <a><i class="bi bi-window-fullscreen"></i></a>
                </div>
                <div>
                    <h4>Mind Maps</h4>
                    <p>visual representation of ideas,concepts, and information in a non-linear and interconnected format.</p>
                </div>
            </div>
        </div>
    </div>

    {/* How It Works */}

    <div className='mt-4 mb-4 border border-2 border-secondary border-opacity-25 rounded-5'>
        <div className='mt-4'>
            <h1>How We Works</h1>
            <p>Sreshta Edu Tech stands by you all the way to ensure that you achieve your learning goals. We are “Dedicatedly Committed”.</p>
        </div>
        <div className='d-flex mt-4'>
            <div className='w-50 mt-4 mb-4 border-3 border-end'>
                <img src={learn} className='w-100 image-fluid' />
            </div>
            <div className='w-50 mt-4 mb-4'>
                <h2 className='text-start'>Concept Learning</h2>
                <p>Learning becomes effective when flavoured with
                    good video lectures, materials,Mind Maps, and
                    Examination-Practicing questions/tests.</p>
            </div>
        </div>
        <div className='d-flex mt-4'>
            <div className='w-50 mt-4 mb-4 border-3 border-end'>
                <h2 className='text-end'>Mind Maps</h2>
                <p>MindMap is to visually organize information and ideas, allowing for better understanding, memory retention, and creative thinking. which are graphical representations that start with a central Idea.</p>
            </div>
            <hr />
            <div className='w-50 mt-4 mb-4'>
                <img src={mind} className='w-100 image-fluid' />
            </div>
        </div>
        <div className='d-flex mt-4'>
            <div className='w-50 mt-4 mb-4 border-3 border-end'>
                <img src={video} className='w-100 image-fluid' />
            </div>
            <div className='w-50 mt-4 mb-4'>
                <h2 className='text-start'>Video Lecturar</h2>
                <p>Learning becomes effective when flavoured with
                    good video lectures, materials,Mind Maps, and
                    Examination-Practicing questions/tests.</p>
            </div>
        </div>
        <div className='d-flex mt-4'>
            <div className='w-50 mt-4 mb-4 border-3 border-end'>
                <h2 className='text-end'>Quiz</h2>
                <p>Learning becomes effective when flavoured with
                    good video lectures, materials,Mind Maps, and
                    Examination-Practicing questions/tests.</p>
            </div>
            <div className='w-50 mt-4 mb-4'>
                <img src={quiz} className='w-100 image-fluid' />
            </div>
        </div>
    </div>

    </section>
  )
}

export default AboutHowWeWork