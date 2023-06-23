import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiCheck } from "react-icons/fi";

class TabsOne extends Component{
    render(){
        let 
        tab1 = "Our Journey", 
        tab2 = "Our mission",
        tab3 = "Our Vision";
        const { tabStyle } = this.props;
        var namesItemOne = [
            'Captivating Visuals',
            'Compelling Marketing Solutions',
            'Stunning Websites',
            'Unbeatable Customer Service',
        ];
       
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>As entrepreneurs ourselves, we understand the journey of starting from the ground up. We began humbly, crafting expertly designed graphics and commercials. Over time, our outstanding reputation and loyal customer base inspired us to expand our knowledge and skills, enabling us to create larger-scale content. Today, we specialize in exceptional graphic design, impactful marketing campaigns, and top-tier website development for clients spanning various industries.</p>

                                           <div className="mt--30">
                                               <h4>We Deliver…</h4>
                                               <ul className="list-style--1">
                                                   {namesItemOne.map((name, index) => {
                                                       return <li key={ index }><FiCheck /> {name}</li>;
                                                   })}
                                               </ul>
                                           </div>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p><strong>-Full Marketing Solutions:</strong><br/>From strategic planning to execution, our team of experts is dedicated to delivering comprehensive marketing solutions. We develop tailored strategies, execute targeted campaigns, and measure results to help businesses achieve their marketing goals.
                                            <br/><br/><strong>-Complete Web Development:</strong><br/>We specialize in creating fully customized websites that drive results. Our web development services encompass everything from designing visually captivating websites to building robust and user-friendly interfaces. We ensure that your website stands out from the competition while effectively conveying your brand message.
                                            <br/><br/><strong>-Comprehensive Campaign Services:</strong><br/>We understand the power of impactful campaigns. Our comprehensive campaign services cover the entire spectrum, from conceptualization to execution and analysis. We work closely with you to develop and implement campaigns that resonate with your target audience, helping you achieve your campaign objectives.</p>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>At VISTA, our vision is to be a trusted industry leader, providing holistic solutions that drive the growth and success of businesses and organizations. We strive to build strong partnerships, deliver innovative strategies, and contribute to our clients' achievements. Through our commitment to excellence and client-centric approach, we aim to make a lasting impact in the success stories of our clients. </p>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsOne;