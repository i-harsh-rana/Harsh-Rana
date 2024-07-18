import './Skills.css';

import React from 'react'
import Frontend from './Frontend';
import Backend from './Backend';
import Devops from './Devops';
import Others from './Others';

const Skills = () => {
  return (
    <section className="skills section">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <Devops/>
            <Others/>
        </div>
    </section>
  )
}

export default Skills