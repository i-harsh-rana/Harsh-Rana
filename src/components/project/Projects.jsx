import React, { useState } from 'react'
import './Projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectPreview from './Projects.preview'
import blogi1 from '../../assets/1blogi.jpg'
import blogi2 from '../../assets/2blogi.jpg'
import blogi3 from '../../assets/3blogi.jpg'
import blogi4 from '../../assets/4blogi.jpg'
import blogi5 from '../../assets/5blogi.jpg'
import blogi6 from '../../assets/5blogi.jpg'
import wonderlust1 from '../../assets/1wonderlust.jpg'
import wonderlust2 from '../../assets/2wonderlust.jpg'
import wonderlust3 from '../../assets/3wonderlust.jpg'
import wonderlust4 from '../../assets/4wonderlust.jpg'
import wonderlust5 from '../../assets/5wonderlust.jpg'
import wonderlust6 from '../../assets/6wonderlust.jpg'
import wonderlust7 from '../../assets/7wonderlust.jpg'
import wonderlust8 from '../../assets/8wonderlust.jpg'
import streamUp1 from '../../assets/1Stream.png'
import streamUp2 from '../../assets/2Stream.png'
import streamUp3 from '../../assets/3Stream.png'
import streamUp4 from '../../assets/4Stream.png'
import streamUp5 from '../../assets/5Stream.png'
import streamUp6 from '../../assets/6Stream.png'
import streamUp7 from '../../assets/7Stream.png'
import streamUp8 from '../../assets/8Stream.png'
import streamUp9 from '../../assets/9Stream.png'
import streamUp10 from '../../assets/10Stream.png'
import streamUp11 from '../../assets/11Stream.png'
import streamUp12 from '../../assets/12Stream.png'
import process from '../../assets/process.svg'



function Projects() {

const [toggleState, setToggleState] = useState(0)

const Blogi = [
    blogi1,
    blogi2,
    blogi3,
    blogi4,
    blogi5,
    blogi6
]

const WonderLust = [
    wonderlust1,
    wonderlust2,
    wonderlust3,
    wonderlust4,
    wonderlust5,
    wonderlust6,
    wonderlust7,
    wonderlust8,
    
]

const StreamUp = [
    streamUp1,
    streamUp2,
    streamUp3,
    streamUp4,
    streamUp5,
    streamUp6,
    streamUp7,
    streamUp8,
    streamUp9,
    streamUp10,
    streamUp11,
    streamUp12
]

const toggleTab = (index)=>{
    setToggleState(index)
}

  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My work</span>

        <div className="projects__container container grid">

            <div className="projects__content">
                <div>
                    <i className="uil uil-document-layout-right projects__icon"></i>
                    <h3 className="projects__title">Blogi</h3>
                </div>

                <span onClick={()=>toggleTab(2)} className="projects__button">View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                    <ProjectPreview imagearr = {Blogi} />
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                        <a href="https://github.com/i-harsh-rana/Blogi"><i className='bx bxl-github projects__modal-visitlink'></i></a>

                        <h3 className="projects__modal-title">Blogi</h3>
                        <p className="projects__modal-description">
                        Blogi is a blogging platform where users can log in, post blogs, and read blogs from others. The project focuses mainly on frontend development with production-level code.

                        </p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                React: Library for building user interfaces.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Redux: State management for maintaining application state.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Apwrite: Backend-as-a-service for handling authentication and data storage.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                React Forms: Used for creating and managing forms efficiently.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                TinyMCE: Rich text editor for creating and editing blog content.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-presentation-play projects__icon"></i>
                    <h3 className="projects__title">StreamUp</h3>
                </div>

                <span onClick={()=>toggleTab(3)}  className="projects__button">View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                    <ProjectPreview imagearr = {StreamUp} />
                        {/* <div className='projects__process'>
                            <div className='projects__process-section'><img src={process} style={{width: '14rem'}}  /></div>
                            <div className='projects__process-section'> <p className='process'>Backend completed;<br/> focusing on frontend now..</p></div>
                        </div> */}
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                        <a href="https://github.com/i-harsh-rana/StreamUp"><i className='bx bxl-github projects__modal-visitlink'></i></a>

                        <h3 className="projects__modal-title">StreamUp</h3>
                        <p className="projects__modal-description">
                        StreamUp is a YouTube-inspired platform for streaming and sharing videos. It allows users to watch, like, comment on videos, and manage personal profiles. With advanced features like custom playlists, dashboards, and a seamless video posting system, StreamUp offers a comprehensive video-sharing experience.

                        </p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Built with MongoDB, Express.js, React, and Node.js (MERN stack)
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                MongoDB: For storing user data, video details, and managing custom playlists with advanced aggregation pipelines for complex queries.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Express.js: Backend framework for building API endpoints and handling server-side logic.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Cloudinary: Service for storing and optimizing video content.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Node.js: Backend runtime environment for server-side JavaScript execution.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Cloudinary: Used for efficient video storage, optimization, and seamless media management.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Redux: Utilized for managing global state, particularly for handling logged-in user profiles across the app.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                JWT (JSON Web Tokens): Used for secure authentication and authorization, ensuring users have access to appropriate features and content based on their login status.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-map projects__icon"></i>
                    <h3 className="projects__title">WonderLust</h3>
                </div>

                <span className="projects__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                    <ProjectPreview imagearr = {WonderLust} />
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                        <a href="https://github.com/i-harsh-rana/WonderLust"><i className='bx bxl-github projects__modal-visitlink'></i></a>
                        

                        <h3 className="projects__modal-title">WonderLust</h3>
                        <p className="projects__modal-description">
                        WonderLust is a property listing website where users can add, view, and comment on property listings, and see locations on integrated maps. It connects buyers, sellers, and agents efficiently.

                        </p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Node.js: JavaScript runtime for server-side development.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Express.js: Framework for building web servers and APIs.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                MongoDB: NoSQL database for storing listings and user data.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                EJS: Templates for dynamic and reusable HTML.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Cloudinary: Service for image storage and optimization.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Passport.js: Middleware for secure authentication.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-bag projects__icon"></i>
                    <h3 className="projects__title">Protfolio <br/> Website</h3>
                </div>

                <span className="projects__button" onClick={()=>toggleTab(4)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                        <a href="https://github.com/i-harsh-rana/Harsh-Rana"><i className='bx bxl-github projects__modal-visitlink'></i></a>

                        <h3 className="projects__modal-title">Protfolio Website</h3>
                        <p className="projects__modal-description">
                        This portfolio website showcases all my work experience, contact details, skills, and personal information. It serves as a comprehensive digital profile, allowing potential employers and collaborators to get a clear picture of my professional journey and capabilities.
                        </p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                React: Utilized for building a dynamic and responsive user interface.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                CSS: Employed for styling the website to ensure a clean and visually appealing design.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects