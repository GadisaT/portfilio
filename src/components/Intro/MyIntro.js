import React, { useState, useEffect } from "react";
import './myIntro.css';
import gadisa from '../../img/gado.jpg'
import gadis from '../../img/gad.jpg'
// import btnImg from '../../img/hireme.png'
// import { Link } from 'react-scroll';

const MyIntro = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hey">👋 Hey</span>
                <span className="introText">I'm<span className="introName"> Gadisaa</span> <br /> Full Stack Web Designer</span>
                <p className="introPara">A passionate front-end and back-end web designer dedicated to creating visually stunning and user-friendly websites. With 2 years of experience in the industry, I specialize in HTML, CSS, JavaScript, React Js,Django FrameWork,Python and responsive design. Let's bring your web design vision to life together!</p>
                {/* <Link to="hire" smooth={true} duration={1000}><button className="btn"><img src={btnImg} alt="Hire ME" className="btnImg"></img>Hire Me</button></Link> */}
                <div className="image-container">
                <img src={gadisa} alt="My Profile" className={`bg bg1 ${currentImageIndex === 0 ? 'dim scale' : ''}`} />
                <img src={gadis} alt="My Profile" className={`bg bg2 ${currentImageIndex === 1 ? 'dim scale' : ''}`} />

                </div>
                
            </div>
        </section>
    )
}

export default MyIntro;
