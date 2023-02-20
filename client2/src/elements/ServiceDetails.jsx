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
                <PageHelmet pageTitle='Graphic Design' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">GRAPHIC DESIGN</h2>
                                    <p>Draw more customers to your business with our unique,<br/>eye-catching graphic designs for your brand.</p>
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
                                                    <p>Creating a visual representation of your business is one of the most important steps you can take in building a successful brand identity. The images you choose to represent your brand will serve as the first impression that your potential customers will have of your business and will create a feeling of familiarity between your brand and your audience. Your logos, business cards and website graphics should harmoniously create the story of your brand in a way that inspires and relates to your ideal customers. At Vista, we take great pride in working with you to build a visual story that accurately reflects your brand’s purpose. The most successful companies in the world have created imagery that instantly resonates in the minds of their customers and we are dedicated to helping you achieve the same result, no matter the size of your business.<br/>
                                                    <br/>Human beings are highly visual creatures and we rely on our senses to help us make decisions. Our team of professionals can help you better understand what your customers are craving by conducting thorough market research on your target demographic. In order to create an aesthetic that will spark interest in your audience, you have to obtain a deep understanding of who your target audience really is and what their needs are. The Vista team specializes in creating innovative solutions to help your brand stand out from the crowd and connect with your audience in a unique way. When you combine comprehensive research with attention to every aesthetic detail, your brand becomes unstoppable.<br/>
                                                    <br/></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>Our team of experts has hands-on experience in research, development, design and execution of compelling visual content. We go above and beyond to provide you with sophisticated and creative graphic designs and branding solutions. When you work with Vista, you can be sure that your brand’s imagery will have a lasting impact in the minds of  your future customers.</p>
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
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='GSJq-l_CeyQ' onClose={() => this.setState({isOpen: false})} />
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
                <PageHelmet pageTitle='Graphic Design' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">WEBSITE DEVELOPMENT</h2>
                                    <p>Your website is the cornerstone of your business and our skilled<br/>developers design websites made to stand out from the pack.</p>
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
                                                    <p>Thanks to the growing demand for digital content, the world of Web design has continued to expand and evolve over recent years. While this change is exciting, it also creates intense competition to rise to the top in the overwhelming sea of digital content. Creating a sophisticated web space for your business while simultaneously providing engagement and increasing exposure can be exhausting and time consuming for new and small business owners. That’s where the Vista team comes in.<br/>
                                                    <br/>We understand that it can be daunting to find someone who truly cares about the success of your business when there are an overwhelming number of web designers to choose from. What sets the Vista team from the pack is our overall expertise in web design, programming and advertising and our dedicated attention for each individual client’s needs. Whether you are in the United Kingdom or on the other side of the globe, our team is here to make your brand stand out in the digital space.<br/>
                                                    <br/></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>No matter what the size, model or scope of your business may be, our team is ready to work for you. Do you have a personal website that you’d like to get more exposure for? Or are you a corporate business that requires complex designs for your products? Our skilled experts are ready to deliver designs that are custom tailored for all or your business needs. Our goal is create a website that is visually stunning, fully functional and generates positive returns. We take your website vision and make it a successful reality.</p>
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
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='LtmLf_mYKYA' onClose={() => this.setState({isOpen: false})} />
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
                <PageHelmet pageTitle='Graphic Design' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">MARKETING & REPORTING</h2>
                                    <p>You get the results you need with our marketing strategies tailored for your business.</p>
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
                                                    <p>Once you’ve crafted your brand identity through graphic design and website development, it’s time to get your product out there with an effective marketing and advertising strategy! After all, it won’t matter how innovative your business is if it isn’t reaching your customers. Vista comprises a dynamic team of passionate, creative and resourceful marketing strategists with the expertise you need to take your business to the next level.<br/>
                                                    <br/>Our team operates from the belief that powerful marketing begins with telling a great story. In our day to day lives, we are constantly being fed stories from every person, place and thing we come into contact with. When your brand is telling a compelling story that connects with your audience in a positive way, you will see extraordinarily generous returns. Our experts are highly skilled at identifying exactly who your target audience is and then leveraging that information with tools, techniques and strategies that are custom designed to reach more of your consumers.<br/>
                                                    <br/></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>We believe that having an excellent marketing and advertising strategy is essential for both individuals and businesses looking to gain more exposure in the digital space and creating a brand with staying power. That’s why we provide you with marketing and advertising report analytics. These analytics allow you to gauge in real time how effective the Vista team’s strategies are for your brand growth. We put the power in your hands and let you be the final judge of the value of our services. Vista is dedicated to creating an atmosphere where the client always comes first, and we have the results to prove it.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Connect with you to assess your marketing goals and analyze your current standings.</li>
                                                        <li>Craft a unique plan designed to help you meet your outreach goals.</li>
                                                        <li>Deliver your marketing campaign so that you can hit the ground running and reach more customers, fast. </li>
                                                    </ul>
                                                    <h5 style={{marginTop: '20px'}} className="title">At Vista, we Connect, Craft and Deliver...</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-06.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='lHKA8Mjxw5k' onClose={() => this.setState({isOpen: false})} />
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