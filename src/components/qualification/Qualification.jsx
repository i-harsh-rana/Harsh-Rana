import React from 'react'
import './Qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech. CSE (AI&DS)</h3>
                            <span className="qualification__subtitle">Graphic Era Deemed to be University, Dehradun</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">St. Marys's Convent Sr. Sec. School, Gajraula</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021
                            </div>
                        </div>

                        

                    </div>

                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">St. Marys's Convent Sr. Sec. School, Gajraula</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification