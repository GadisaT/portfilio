import React from "react";
import './MyBody.css';
// import UIDesign  from '../../img/ui-design.png';
import WebDesign  from '../../img/web-design.png';
import AppDesign from  '../../img/app-design.png';

const MyBody =()=>{
    return(
        <section id="mybody">
           
           <span className="bodyTitle">What Gadisa Highly Expert at!</span>
           <span className="bodyDescr">I'm strongly passionated at the following area of web development if you are on the same way let you connect me.<span style={"color:red"}>▽</span></span>
           <div className="bodyBars">
            {/* <div className="bodyBar">
               <img src={UIDesign} alt="UIDesign" className="bodyBarImg"></img>
               <div className="bodyBarText">
                <h2>UIDesign</h2>
                <p>UIDesign</p>
               </div>
            </div> */}
            <div className="bodyBar">
               <img src={WebDesign} alt="WebDesign" className="bodyBarImg"></img>
               <div className="bodyBarText">
                <h2>Web~Design</h2>
                <p>I'll fully help you to build beutifully and responsive Website, blog and portfolio beyond the expectation one. Don't hesitate to connect me</p>
               </div>
            </div>
            <div className="bodyBar">
               <img src={AppDesign} alt="AppDesign" className="bodyBarImg"></img>
               <div className="bodyBarText">
                <h2>App~Design</h2>
                <p>I'm here to help you by designing and building the mobile responsive native app or website for your organazition  as needed</p>
               </div>
            </div>

           </div>
        </section>
    )
}

export default MyBody;