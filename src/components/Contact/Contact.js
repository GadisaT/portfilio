import React, { useRef }  from "react";
import './Contact.css'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import whatsapp from '../../img/whatsapp.png'
import github from '../../img/github.png'
import telegram from '../../img/telgram.jpg'
import linkedin from '../../img/linkedin.png'
// import emailjs from '@emailjs/browser';

const Contact =()=>{
    
    const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //       .sendForm('service_dl8m696', 'template_i1r5qhg', form.current, {
    //         publicKey: '1CPchqIvUurL8tHOO',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //           e.target.reset();
    //           alert('Email seccussfully sent ! I\'ll reach you in 24 hours check your email inbox soon')
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };
    return(
        <section id="contactPage">
            <div id="contact">
                <form className="contactForm" ref={form} onSubmit={sendEmail} >
                <h1>Contact me</h1>
                {/* <span>Please fill out the form below to discuss any work opportunity with me and if you have any questions leave message in the box bellows and let me know what you want. Thank You!</span>
                    <input type="text" className="name" placeholder="enter full name..." name="your_name" required/>
                    <input type="email" className="email" placeholder="enter your email..." name="your_email" required/>
                    <textarea className="msg" name="message" placeholder="leave your message/comment/question/anything you want here..." rows="5"  required/>
                    <button type="submit" value="send" className="submitBtn">Send</button>
                     */}
                </form>
                </div>

                <div className="links">
                <a href="https://www.facebook.com/GadisaTesfu">
                    <img src={facebook} alt="facebook" className="link" />
                </a>
                <a href="https://twitter.com/AbeeTesfu14524">
                    <img src={twitter} alt="twitter" className="link" />
                </a>
                <a href="https://www.whatsapp.com">
                    <img src={whatsapp} alt="whatsapp" className="link" />
                </a>
                
                <a href="https://t.me/gadisa_tesfu">
                    <img src={telegram} alt="telegram" className="link" />
                </a>
                <a href="https://github.com/GadisaT">
                    <img src={github} alt="instagram" className="link" />
                </a>
                <a href="https://linkedin.com/in/gadisat">
                    <img src={linkedin} alt="linkdin" className="link" />
                </a>
            </div>

        </section>
    )
}

export default Contact;