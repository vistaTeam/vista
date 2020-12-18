import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>The final design was beautiful and completely captured our brand image!</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>A. S. </span> - GEMSLI usa brand</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Amazing results for our marketing campaign, I will use them again.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>P. H. </span> - Marketing Project.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>We hired them for a graphic design project and the outcome was beautiful!</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>C. H. </span> - Marketing Project</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>The marketing campaign helped our business grow tremendously!</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>S. S. </span> - Sushi Party</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Great team, they listened to everything we wanted and designed the perfect campaign!</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>D. M. </span> - FitFive</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            {/* <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>The graphic design team is wonderful, we will definitely use them again.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>M. J. </span> - EMRAW </h6>
                                    </div>
                                </div>
                            </TabPanel> */}

                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="gemsli"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                {/* <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab> */}
    
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;