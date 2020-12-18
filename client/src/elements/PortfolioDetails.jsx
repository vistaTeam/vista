import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaWhatsapp, FaTelegram} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import axios from 'axios';
import http from "../http-common.js";

import Lottie from 'react-lottie'
import animationData from './8771-loading.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const SocialShare = [
    {Social: <FaFacebookF /> , link: `https://www.facebook.com/sharer/sharer.php?u=share%20this%20page%20${window.location.href}`},
    {Social: <FaWhatsapp /> , link: `https://api.whatsapp.com/send/?phone&text=Share+this+Page+${window.location.href}&app_absent=0`},
    {Social: <FaTelegram /> , link: `https://telegram.me/share/url?url=${window.location.href}&text=share%20this%20page`},
    {Social: <FaTwitter /> , link: `https://twitter.com/intent/tweet?text=share%20this%20page%20${window.location.href}`},
]


class PortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false,
          imageIsOpen: false,
          tab1: 0,
          project: {images: [], video:{video:false}},
          showAnimation: true,
        }
        this.openModal = this.openModal.bind(this);
        this.openImageModal = this.openImageModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }

    openImageModal(){
        this.setState({imageIsOpen: true})
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        let tempLocation = window.location.href.indexOf('id')
        let location = window.location.href.substring(tempLocation + 2, window.location.href.length)
        console.log(location);

        http.get(`/projects/${location}`)
        .then(res => {
           this.setState({project: res.data},
            this.setState({showAnimation: false}))
        })
        .catch(function (error) {
            alert(error)
        } .bind(this))



    }

    showLive=()=>{
        if (this.state.project.live != '-') {
            return( <div className="port-view">
                     <span>Live</span>
                     <h4><a target='blank' href={`https://${this.state.project.live}`}>Here...</a></h4>
                     </div>
                )}
    }

    showVideoLargeScreen=()=>{
        if (window.innerWidth > 575) {
        if (this.state.project.video) {
        if (this.state.project.video.video === true){
            return(<div className="thumb item-portfolio-static">
                <div className="portfolio-static">
                    <div className="thumbnail-inner">
                    <div className="thumbnail">
                    <a href="#portfolio-details">
                    <img src={this.state.project.video.imgVideo} alt="Portfolio Images"/>
                    </a>
                    </div>
                    </div>
                    </div>
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.project.video.videoId} onClose={() => this.setState({isOpen: false})} />
                    <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                    </div>)
        } } }
    }

    showVideoSmallScreen=()=>{
        if (window.innerWidth < 576) {
        if (this.state.project.video) {
        if (this.state.project.video.video === true){
            return(
                <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                <div className="position-relative mb--30">
                    <img style={{borderRadius: '6px'}} src={this.state.project.video.imgVideo} alt="Portfolio Images"/>
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.project.video.videoId} onClose={() => this.setState({isOpen: false})} />
                    <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                </div>
                </div>
                </div>
                </div>

            )
        } } }
    }


    showPage=()=>{
        if (this.state.showAnimation === false) {
        return(<div>
             {/* Start Breadcrump Area */}
             <div className="rn-page-title-area pt--120 pb--60 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient" style={{lineHeight: '100%'}}>{this.state.project.headerTitle}</h2>
                                    <p>{this.state.project.headerSecondTitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--60 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2 style={{lineHeight: '55px'}}>{this.state.project.mainTitle}</h2>
                                        <p className="subtitle">{this.state.project.firstText}</p>
                                        <p>{this.state.project.secondText}</p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Project Date</span>
                                                <h4>{this.state.project.date}</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Type</span>
                                                <h4>{this.state.project.category}</h4>
                                            </div>

                                            {this.showLive()}

                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a target='blank' href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="portfolio-thumb-inner">
                        {this.showVideoSmallScreen()}
                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--60 bg_color--1 line-separator">
                    <div className="container">
                        <div className="row">
                        {this.showVideoLargeScreen()}
                            {this.state.project.images.map((value , index) => (
                                <div className="col-sm-6" key={index}>
                                    {this.state.imageIsOpen && (
                                        <Lightbox
                                            mainSrc={this.state.project.images[this.state.tab1]}
                                            nextSrc={this.state.project.images[(this.state.tab1 + 1) % this.state.project.images.length]}
                                            prevSrc={this.state.project.images[(this.state.tab1 + this.state.project.images.length - 1) % this.state.project.images.length]}
                                            onCloseRequest={() => this.setState({ imageIsOpen: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                tab1: (this.state.tab1 + this.state.project.images.length - 1) % this.state.project.images.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    tab1: (this.state.tab1 + 1) % this.state.project.images.length,
                                                })
                                            }
                                        />
                                    )}
                                    <div className="item-portfolio-static">
                                        <div onClick={() => this.setState({ imageIsOpen: true, tab1: index })}>
                                            <div className="portfolio-static">
                                                <div className="thumbnail-inner">
                                                    <div className="thumbnail">
                                                        <a href="#portfolio-details">
                                                            <img src={value} alt="Portfolio Images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* End Portfolio Area  */}

                                        {/* {this.state.project.images.map((image, i)=>{
                                            return(
                                        <div className="thumb mb--20">
                                            <img key={i} src={image} alt="Portfolio Images"/>
                                        </div>
                                        )})} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* End Portfolio Details */}
        </div>)
        }
        else{
            return(<div>
                {/* Start Breadcrump Area */}
             <div className="rn-page-title-area pt--120 pb--60 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <Lottie options={defaultOptions}
                                                height={120}
                                                width={120}
                                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}
            </div>)
        }
    }

    
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {this.showPage()}
                

                {/* Start Related Work */}
                {/* <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10"> */}
                            {/* Start Single Portfolio */}
                            {/* <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div> */}
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            {/* <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div> */}
                             {/* End Single Portfolio */}
                        {/* </div>
                    </div>
                </div> */}
                {/* End Related Work */}

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
export default PortfolioDetails;
