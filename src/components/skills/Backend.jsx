import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h4 className="skills__name">Node JS</h4>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>                
                <div>
                    <h4 className="skills__name">Express JS</h4>
                    <span className="skills__level"></span>
                </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h4 className="skills__name">MySQL</h4>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h4 className="skills__name">MongoDB</h4>
                    <span className="skills__level"></span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend