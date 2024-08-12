import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/src/assets/github-1.json';
import animationData1 from '/src/assets/instagram-2.json';
import animationData2 from '/src/assets/linkedin-1.json';
import './Footer.css';
  

function Footer() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Harsh Rana</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/" className="home__social-icon" target='_blank'>
        <Lottie options={defaultOptions1} height={22} width={22} />
        </a>

        <a href="https://www.github.com/" className="home__social-icon" target='_blank'>
        <Lottie options={defaultOptions} height={22} width={22} />
        </a>

        <a href="https://www.linkdin.com/" className="home__social-icon" target='_blank'>
        <Lottie options={defaultOptions2} height={22} width={22} />
        </a>
            </div>
            <span className="footer__copy">&#169; Harsh Rana</span>
        </div>
    </footer>
  )
}

export default Footer