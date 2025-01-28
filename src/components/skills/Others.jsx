import React from 'react'

const Others = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Other</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h4 className="skills__name">Git</h4>
                    <span className="skills__level"></span>
                </div>
                </div>
            
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h4 className="skills__name">Github</h4>
                    <span className="skills__level"></span>
                </div>
                </div>

            </div>
            <div className="skills__group">

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h4 className="skills__name">VS Code</h4>
                    <span className="skills__level"></span>
                </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Others