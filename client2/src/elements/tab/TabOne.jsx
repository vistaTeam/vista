import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiCheck } from "react-icons/fi";

class TabsOne extends Component{
    render(){
        let 
        tab1 = "Our history", 
        tab2 = "Our mission",
        tab3 = "Friendly Support";
        const { tabStyle } = this.props;
        var namesItemOne = [
            'Attention Grabbing Graphics',
            'Compelling Marketing Campaigns',
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
                                           <p>As entrepreneurs, we know what it’s like to build from the ground up. We started small with simple yet expertly crafted graphics and commercials. Over time, we gained an outstanding reputation and with a loyal base of customers that inspired us to continue growing and expanding our knowledge and skills to produce larger scale content. This path led us to designing and developing websites and campaigns for clients from a variety of different businesses. Today, we focus on exceptional graphic design, creating high impact marketing campaigns and designing top tier websites for our clients.</p>

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
                                           <p>When you combine dynamic graphic design, strategic marketing and cutting edge web development, your business becomes unstoppable. We pride ourselves on ensuring that your vision and expectations are met every step of the way, so we take careful time to communicate with you from the beginning to your brand concepts to hitting your final targets.</p>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>As our client, we care greatly about your success and satisfaction with the final product. That’s why we go above and beyond to provide outstanding communication and support for you at every turn. We understand how important it is to have your voice heard when it comes to your brand and our team is dedicated to creating solutions for any of your design, marketing or web development concerns. </p>
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