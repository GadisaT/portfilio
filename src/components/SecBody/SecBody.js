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

const SecBody = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleClick = (image) => {
      setSelectedImage(image);
    };
  
    return (
      <section id="secBody">
        <h2 className="secBodyTitle">MY Profile</h2>
        <span className="secBodyDescr">I have the following certificates from recognized universities as both a back-end and front-end developer, etc.</span>
        <div className="secBodyImgs">
          <img src={port} alt="portfolio" className="secBodyImg" onClick={() => handleClick(port)} />
          <img src={port1} alt="portfolio" className="secBodyImg" onClick={() => handleClick(port1)} />
          <img src={port2} alt="portfolio" className="secBodyImg" onClick={() => handleClick(port2)} />
          <img src={port3} alt="portfolio" className="secBodyImg" onClick={() => handleClick(port3)} />
          <img src={port4} alt="portfolio" className="secBodyImg" onClick={() => handleClick(port4)} />
          <img src={port5} alt="portfolio" className="secBodyImg" onClick={() => handleClick(port5)} />
        </div>
  
        {selectedImage && (
          <div className="fullscreenImageContainer">
            <img src={selectedImage} alt="portfolio" className="fullscreenImage" />
            <button className="closeButton" onClick={() => setSelectedImage(null)}>&#10006;</button>
          </div>
        )}
  
        {/* <button className="secBodyBtn">See More</button> */}
      </section>
    );
  };
  
  export default SecBody;