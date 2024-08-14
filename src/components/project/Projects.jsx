import React, { useState } from 'react'
import './Projects.css'

function Projects() {

const [toggleState, setToggleState] = useState(0)

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
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

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
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">StreamUp</h3>
                        <p className="projects__modal-description">
                        StreamUp is a backend platform for a streaming service similar to YouTube, focusing on managing video content, user authentication, and streaming functionalities. This project emphasizes backend development with production-level code.

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
                                Express.js: Framework for building and managing web server APIs.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                MongoDB: NoSQL database for storing video and user data.
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
                                bcrypt & jsonwebtoken: Used together for secure user authentication and password hashing.
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
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

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
        </div>

    </section>
  )
}

export default Projects