import React,{useState} from "react";
import './NavBar.css';
import logo1 from '../../img/logo1.jpg';
import menu from '../../img/menu.png';
import contactme from '../../img/contactme.png';
import {Link} from 'react-scroll';


const NavBar=()=>{
    const [showmenu,setShowmenu]=useState(false);
    return(
        <nav className="navbar">
        <img src={logo1} alt="Gadisa's logo" className="logo" ></img>
            
            <div className="menu">
                 <Link activeClass="active"  to='intro' spy={true} smooth={true} offset={-60} duration={500} className="menuItemList">Home</Link>
                 <Link activeClass="active"  to='mybody' spy={true} smooth={true} offset={-60} duration={2500} className="menuItemList">My Skill</Link>
                 <Link activeClass="active"  to='contactPage' spy={true} smooth={true} offset={-60} duration={500} className="menuItemList">Contact</Link>
                 <Link activeClass="active"  to='secBody' spy={true} smooth={true} offset={-60} duration={500} className="menuItemList">Profile</Link>
                 <Link activeClass="active"  to='#' spy={true} smooth={true} offset={-60} duration={500} className="menuItemList">Projects</Link>
                 <Link activeClass="active"  to='footer' spy={true} smooth={true} offset={-60} duration={500} className="menuItemList">Footer</Link>
            </div>
            <button 
            className="menuBtn" 
            onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>
                  <img src={contactme} alt="" className="menuBtnImg"></img>Contact me!
            </button>
            <img src={menu} alt="Menu" className="mobmenu" onClick={()=>setShowmenu(!showmenu)}></img>
            <div className="navMenu" style={{display: showmenu ? 'flex' : 'none'}}>
                 <Link activeClass="active"  to='intro' spy={true} smooth={true} offset={-60} duration={500} className="ItemList" onClick={()=>setShowmenu(false)}>Home</Link>
                 <Link activeClass="active"  to='mybody' spy={true} smooth={true} offset={-60} duration={2500} className="ItemList" onClick={()=>setShowmenu(false)}>Body</Link>
                 <Link activeClass="active"  to='contactPage' spy={true} smooth={true} offset={-60} duration={500} className="ItemList" onClick={()=>setShowmenu(false)}>Contact</Link>
                 <Link activeClass="active"  to='secBody' spy={true} smooth={true} offset={-60} duration={500} className="ItemList" onClick={()=>setShowmenu(false)}>Profile</Link>
                 <Link activeClass="active"  to='#' spy={true} smooth={true} offset={-60} duration={500} className="ItemList" onClick={()=>setShowmenu(false)}>Projects</Link>
                 <Link activeClass="active"  to='footer' spy={true} smooth={true} offset={-60} duration={500} className="ItemList" onClick={()=>setShowmenu(false)}>Footer</Link>
            </div>
        </nav>
    )
}


export default NavBar