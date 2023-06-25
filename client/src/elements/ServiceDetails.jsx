import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";


class ServiceDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false,
          pointOfService: '1'
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let tempLocation = window.location.href;
        this.setState({pointOfService: tempLocation.charAt(tempLocation.length-1)})
    }

    showServiceDetails=()=>{
        if (this.state.pointOfService === '1') {
            return (<div>
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Campaigns at VISTA' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">IGNITE. ENGAGE. SUCCEED.</h2>
                                    <p> <strong> Unleash the Potential of Your Campaign</strong><br/>Comprehensive Campaign Services for Unforgettable Results</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80">
                                            <div className="col-lg-4 col-12">
                                                <div className="thumb">
                                                     <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>At VISTA, we specialize in providing comprehensive campaign services that ignite your brand, engage your audience, and pave the way for your success. Our team of experienced professionals is dedicated to creating impactful campaigns that leave a lasting impression and drive tangible results. From strategic planning to execution, we are with you every step of the way, ensuring that your campaign delivers maximum impact and achieves your objectives.<br/>
                                                    <br/>With our strategic approach, we start by gaining a deep understanding of your target audience, market dynamics, and campaign goals. This allows us to develop tailored strategies that resonate with your audience and align with your brand values. Our team combines creativity and data-driven insights to create compelling content, captivating visuals, and persuasive messaging that cuts through the noise and sparks engagement. Whether it's raising awareness, driving conversions, or mobilizing support, we have the expertise to make your campaign a resounding success.<br/>
                                                    <br/></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>We believe in the power of an integrated and multi-channel approach to campaigning. Our team leverages a range of channels, including social media, digital advertising, email marketing, and more, to ensure your message reaches your target audience at the right time and through the right channels. We closely monitor campaign performance, analyze data, and make data-driven optimizations to continuously enhance the effectiveness of your campaign. With our comprehensive campaign services, you can unleash the full potential of your brand, connect with your audience on a deeper level, and achieve remarkable success.</p>
                                                   <p>Choose VISTA as your campaign partner and unlock the potential of your brand. Our dedicated team is ready to collaborate with you, understand your unique needs, and deliver a campaign that sets you apart from the competition. Let's ignite, engage, and succeed together. Contact us today to get started.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Connect with you to understand the unique vision of your brand.</li>
                                                        <li>Craft a graphic that captures your brand’s voice and identity.</li>
                                                        <li>Deliver your graphics to you so that you can start capturing the attention of your audience, fast.</li>
                                                    </ul>
                                                    <h5 style={{marginTop: '20px'}} className="title">At Vista, we Connect, Craft and Deliver...</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='fpPZBCgDGG0' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
            </div>)
        }

        else if (this.state.pointOfService === '2') {
            return(<div>
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Development at VISTA' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">IGNITE YOUR ONLINE PRESENCE</h2>
                                    <p>Unleash the Power of Web Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80">
                                            <div className="col-lg-4 col-12">
                                                <div className="thumb">
                                                     <img className="w-100" src="/assets/images/service/service-03.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>In today's digital age, having a strong online presence is essential for businesses to thrive. At VISTA TEAM, we specialize in web development solutions that bring your brand to life and drive meaningful results.<br/>
                                                    <br/>With our team of skilled developers, we create dynamic and visually captivating websites that engage your audience from the moment they land on your page. We combine cutting-edge design techniques with user-friendly functionality to deliver an exceptional online experience.<br/>
                                                    <br/>Our web development services are fully customizable to meet your unique needs. Whether you're looking for a simple and elegant website or a robust e-commerce platform, we have the expertise to deliver a solution that aligns with your brand identity and business goals.<br/>
                                                    <br/>We understand that your website needs to perform seamlessly across all devices. That's why we prioritize responsive design, ensuring that your site looks and functions flawlessly on desktops, tablets, and mobile devices. By optimizing the user experience, we maximize engagement and conversions.<br/>
                                                    <br/>Security is a top priority for us. We implement industry-leading practices to protect your website from potential threats and ensure the safety of your customers' data. Rest easy knowing that your website is fortified with robust security measures.<br/>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Our track record speaks for itself. We've helped numerous businesses achieve online success through our web development services. Our clients have witnessed increased website traffic, higher conversion rates, and improved brand credibility, leading to measurable business growth.</p>
                                                    <p>Ready to ignite your online presence? Trust VISTA TEAM for expert web development that sets you apart from the competition. Contact us today to discuss your project and let's turn your digital dreams into reality.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Connect with you to understand the goals and specific needs of your website.</li>
                                                        <li>Craft your website from the ground up with all of your specifications in mind.</li>
                                                        <li>Deliver a website that fits your brand’s aesthetic and is fully functional so that you can get down to business, fast.</li>
                                                    </ul>
                                                    <h5 style={{marginTop: '20px'}} className="title">At Vista, we Connect, Craft and Deliver...</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-04.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='_yqORRFn7Xw' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
            </div>)        
        }
        else if (this.state.pointOfService === '3') {
            return <div>
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Marketing at VISTA' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">POWER YOUR BRAND</h2>
                                    <p>Unlock the Power of Strategic Branding and Propel Your Business Forward.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-4 col-12">
                                                <div className="thumb">
                                                     <img className="w-100" src="/assets/images/service/service-05.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>At VISTA, we take pride in our comprehensive and results-driven marketing process. We understand that a strong and impactful brand is essential for the success of your business. That's why we offer a range of branding services designed to elevate your brand identity and make a lasting impression on your target audience.<br/>
                                                    <br/>Our branding process begins with a deep dive into understanding your business, target market, and unique value proposition. We conduct thorough research and analysis to identify key insights and develop a strategic brand positioning that sets you apart from the competition. From there, our talented team of designers and marketers work collaboratively to create captivating visuals, compelling messaging, and a cohesive brand identity that resonates with your audience.<br/>
                                                    <br/></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Once your brand identity is established, we implement a multi-channel marketing approach to maximize your brand's visibility and reach. Our expert team leverages various marketing channels such as social media, digital advertising, content marketing, and search engine optimization to create a holistic and integrated marketing campaign. We continuously monitor and analyze the performance of your marketing efforts, making data-driven optimizations to ensure maximum effectiveness and return on investment.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Connect with you to assess your marketing goals and analyze your current standings.</li>
                                                        <li>Craft a unique plan designed to help you meet your outreach goals.</li>
                                                        <li>Deliver your marketing campaign so that you can hit the ground running and reach more customers, fast. </li>
                                                    </ul>
                                                    <h5 style={{marginTop: '20px'}} className="title">At VISTA, we Connect, Craft and Deliver...</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-06.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='uJi-1EJjzXQ' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
            </div>
        }
    }

    
    render(){
        return(
            <React.Fragment>
            {this.showServiceDetails()}                
                
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
export default ServiceDetails;