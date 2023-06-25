import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import { FaRegFlag, FaCode, FaPoll } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        icon: <FaRegFlag />,
        link: '1',
        title: 'Campaigns',
        description: 'Reach Your Goals with Our Full Campaign Services.'
    },
    {
        icon: <FaPoll />,
        link: '3',
        title: 'Marketing',
        description: 'Accelerate Your Business with Effective Marketing.'
    },
    {
        icon: <FaCode />,
        link: '2',
        title: 'Web Development',
        description: 'Create an Impressive Online Presence'
    }
]

class Service extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='WHAT WE DO' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'WHAT WE DO'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>WHAT WE DO</h2>
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