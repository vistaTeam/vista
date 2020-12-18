import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';


const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class HeaderThree extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    render(){

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        }
        
        return(
            <header className={`header-area formobile-menu header--transparent header--fixed ${color}`}>
            <div className="header-wrapper" id="header-wrapper">
                <div className="header-left">
                    <div className="logo">
                        <a href="/">
                            {logoUrl}
                        </a>
                    </div>
                </div>
                <div className="header-right">
                    <nav className="mainmenunav d-lg-block">
                        <ul className="mainmenu">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">OUR-BUSINESS</Link></li>
                            <li className="has-droupdown"><Link to="/service" >SERVICES</Link>
                                <ul className="submenu">
                                    <li><Link to="/service">All Services</Link></li>
                                    <li><div onClick={_=>{window.location.reload(false)}}><Link to="/service-details/1">Designing</Link></div></li>
                                    <li><div onClick={_=>{window.location.reload(false)}}><Link to="/service-details/2">Developing</Link></div></li>
                                    <li><div onClick={_=>{window.location.reload(false)}}><Link to="/service-details/3">Marketing</Link></div></li>
                                </ul>
                            </li>
                            <li className="has-droupdown"><Link to="/portfolio/vista" >PORTFOILO</Link>
                                <ul className="submenu">
                                    <li><Link to="/portfolio/latest">Latest work</Link></li>
                                    <li><Link to="/portfolio/all">All works</Link></li>
                                </ul>
                            </li>
                                    <li className='contact-for-mobile'><Link to="/contact"><strong>ENJOY US!</strong></Link></li>
                        </ul>
                    </nav>
                    <div className="header-btn">
                        <a className="rn-btn" href="/contact">
                            <span>ENJOY US!</span>
                        </a>
                    </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderThree;