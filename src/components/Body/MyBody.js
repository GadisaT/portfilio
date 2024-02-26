import React from "react";
import './MyBody.css';
// import UIDesign  from '../../img/ui-design.png';
import WebDesign  from '../../img/web-design.png';
import AppDesign from  '../../img/app-design.png';

const MyBody =()=>{
    return(
        <section id="mybody">
           
           <span className="bodyTitle">What I Do</span>
           <span className="bodyDescr">I'm skilled the following list</span>
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