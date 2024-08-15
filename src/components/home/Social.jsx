import React from 'react'
import Lottie from 'react-lottie';
import animationData from '/src/assets/github-1.json';
import animationData1 from '/src/assets/instagram-2.json';
import animationData2 from '/src/assets/linkedin-1.json';

const Social = () => {
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
    <div className="home__social">

        <a href="https://github.com/i-harsh-rana" className="home__social-icon" target='_blank'>
        <Lottie options={defaultOptions} height={22} width={22} />
        </a>

        <a href="www.linkedin.com/in/iharshrana" className="home__social-icon" target='_blank'>
        <Lottie options={defaultOptions2} height={22} width={22} />
        </a>

        <a href="https://www.instagram.com/i_harsh_rana?igsh=MWx6aGt2MzI3a216MQ==" className="home__social-icon" target='_blank'>
        <Lottie options={defaultOptions1} height={22} width={22} />
        </a>
    </div>
  )
}

export default Social