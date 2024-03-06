import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './myIntro.css';
import gadis from '../../img/gad.png'
// import btnImg from '../../img/hireme.png'
// import { Link } from 'react-scroll';

const MyIntro = () => {
    // const {text} = Typewriter ({
    //     words: ['Devloper', 'Designer', 'Photographer'], 
    //     loop:{Infinity},
    //     typeSpeed: 120,
    //     deleteSpeed: 80

    // });

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hey">👋 Hey</span>
                <span className="introText">I'm <span className="introName">Gadisa Tesfu</span>
                   
                    
                    {/* <span style={{color: 'red'}}>
                    <Cursor cursorStyle= '|' />
                    </span> */}
                    <br />
                <span>a {' '} </span>
                <span style={{color:'green', fontSize:'32px'}} className="intro">
                 <Typewriter
                    words={['Full Stack Web Designer', 'Front-end Developer', 'Backend Developer', 'React Developer']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                />
                </span>
            </span>
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
