import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import { FaTv, FaCode, FaPoll } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        icon: <FaTv />,
        link: '1',
        title: 'Graphic Design',
        description: 'Our design team provides strategic and artistic components needed to give your brand’s image a competitive edge.'
    },
    {
        icon: <FaCode />,
        link: '2',
        title: 'Website Development',
        description: 'Our web developers are experts at creating websites that represent the image of your brand and are easy to navigate for your customers.'
    },
    {
        icon: <FaPoll />,
        link: '3',
        title: 'Marketing & Reporting',
        description: 'Our team can design a strategic marketing campaign to meet your goals fast. Marketing campaigns are the catalyst designed to take your business to the next level.'
    }
]

class Service extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Service'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>What we do</h2>
                                    <p>Our skilled team is prepared to meet all of your design, marketing and web development needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href={`/service-details/${val.link}`}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default Service;