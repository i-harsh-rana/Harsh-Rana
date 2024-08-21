import React, { useEffect} from 'react'
import './Scrollup.css'

function Scrollup() {
    useEffect(() => {
      const handleScroll = () => {
        const scrollUp = document.querySelector(".scrollup");
        if (window.scrollY >= 560) {
          scrollUp.classList.add('show-scroll');
        } else {
          scrollUp.classList.remove("show-scroll");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <a href="#" className="scrollup" onClick={handleClick}>
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    );
  }
  
  export default Scrollup;