import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
// import Header from "../component/header/Header";
import Particles from 'react-particles-js';
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import TabOne from "../elements/tab/TabOne";


import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
// import AboutTwo from "../component/HomeLayout/homeOne/AboutTwo";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
// import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--15',
        category: '',
        title: 'Marketing.',
        description: 'You get the results you need with our marketing strategies tailored for your business or campaign.',
        buttonText: 'Try Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--12',
        category: '',
        title: 'Development.',
        description: 'Your website is the cornerstone of your business and our skilled developers design websites made to stand out from the pack.',
        buttonText: 'Let\'s go...' ,
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--13',
        category: '',
        title: 'DESIGN.',
        description: 'Draw more customers to your business with our unique, eye-catching graphic designs for your brand.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]


class Startup extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        // const PostList = BlogContent.slice(0 , 3);
        let title = 'About',
        description = 'Our team is made up of skilled experts across the fields of graphic design, marketing and web development. With decades of combined experience under our belts, we bring the necessary expertise to make your business or campaign thrive.';

        return(
            <Fragment> 
                <Helmet pageTitle="VISTA" />
                <HeaderThree headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation slider-startup with-particles">
                    <div className="frame-layout__particles">
                    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": false
	            }
            },
            color: "#0066cc",
	        "size": {
	            "value": 4,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
                            </div> 
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                // Start Single Slider 
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 // End Single Slider 
                                 ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabOne tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* End About Area */}
                <div className="service-area ptb--75  bg_image bg_image--3">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55">
                        <Portfolio />
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start CounterUp Area */}
                <div className="counterup-area pb--80 pt--40 bg_image bg_image--10 theme-text-white" data-black-overlay="7">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className='container'><BrandTwo /></div>
                    
                </div>
                {/* End Brand Area */}
                
                 {/* Start Back To Top */}
                 <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </Fragment>
        )
    }
}
export default Startup;