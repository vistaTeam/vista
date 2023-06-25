import React, { Component } from "react";
// import { FiLayers , FiUsers } from "react-icons/fi";
import { FaTv, FaCode, FaPoll, FaDrawPolygon, FaRegFlag } from 'react-icons/fa'


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

class ServiceTwo extends Component{
    render(){
        let title = ' OUR DIVERSE SERVICES',
        description = 'Our proactive team is prepared to kickstart your campaign, elevate your brand, or assist with your web development needs.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/contact"><span className="text">Get a Tailored Solution</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12" key={i}>
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
