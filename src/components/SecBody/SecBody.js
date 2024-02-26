import React ,{useState} from "react";
import './SecBody.css';
import port from '../../img/port.jpg'
import port1 from '../../img/port1.jpg'
import port2 from '../../img/port2.jpg'
import port3 from '../../img/port3.jpg'
import port4 from '../../img/port4.jpg'
import port5 from '../../img/port5.jpg'
// import port6 from '../../img/port6.jpg'
// import port7 from '../../img/port7.jpg'

const  SecBody=()=>{
    const [showImage, setShowImage] = useState(false);

    
    return(
        <section id="secBody">
        <h2 className="secBodyTitle">MY Porfile</h2>
        <span className="secBodyDescr"> I have the following certificate from recognize university as both back-end and front-end developer and etc</span>
        <div className="secBodyImgs">
            <img src={port} alt="portfolio" className="secBodyImg" onClick={() => setShowImage(true)}/>
            <img src={port1} alt="portfolio" className="secBodyImg" onClick={() => setShowImage(true)}/>
            <img src={port2} alt="portfolio" className="secBodyImg" onClick={() => setShowImage(true)}/>
            <img src={port3} alt="portfolio" className="secBodyImg" onClick={() => setShowImage(true)}/>
            <img src={port4} alt="portfolio" className="secBodyImg" onClick={() => setShowImage(true)}/>
            <img src={port5} alt="portfolio" className="secBodyImg" onClick={() => setShowImage(true)}/>
            {/* <img src={port6} alt="portfolio" className="secBodyImg"/>
            <img src={port7} alt="portfolio" className="secBodyImg"/> */}
            {showImage && (
                <div className="fullscreenImageContainer">
                    <img src={port} alt="portfolio" className="fullscreenImage" />
                    <button className="closeButton" onClick={() => setShowImage(false)}>&#10006;</button>
                </div>
                )}
        </div>
        
        <button className="secBodyBtn">See More</button>
        </section>
    )
}


export default SecBody;