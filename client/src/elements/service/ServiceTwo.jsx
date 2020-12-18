import React, { Component } from "react";
// import { FiLayers , FiUsers } from "react-icons/fi";
import { FaTv, FaCode, FaPoll } from 'react-icons/fa'


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

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'Our skilled team is prepared to meet all of your design, marketing and web development needs.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/contact"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
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
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
