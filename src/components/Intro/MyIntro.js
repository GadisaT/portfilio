import React from "react";
import './myIntro.css';
import gadis from '../../img/gad.png'
// import btnImg from '../../img/hireme.png'
// import { Link } from 'react-scroll';

const MyIntro = () => {
    

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hey">👋 Hey</span>
                <span className="introText">I'm<span className="introName"> Gadisa</span> <br /> Full Stack Web Designer</span>
                <p className="introPara">A passionate front-end and back-end web designer dedicated to creating visually stunning and user-friendly websites. With 2 years of experience in the industry, I specialize in HTML, CSS, JavaScript, React Js,Django FrameWork,Python and responsive design. Let's bring your web design vision to life together!</p>
                {/* <Link to="hire" smooth={true} duration={1000}><button className="btn"><img src={btnImg} alt="Hire ME" className="btnImg"></img>Hire Me</button></Link> */}
                <div className="image-container">
                <img src={gadis} alt="My Profile" className="bg"/>

                </div>
                
            </div>
        </section>
    )
}

export default MyIntro;
