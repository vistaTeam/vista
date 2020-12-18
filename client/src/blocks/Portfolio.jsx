import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import PortfolioList from "../elements/portfolio/PortfolioList";
import { slickDot , portfolioSlick2 } from "../page-demo/script";
// import axios from 'axios';
import http from "../http-common.js";



class Portfolio extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             latestList: [],
             list: [],
             deisgningList: [],
             marketingList: [],
             developmentList: [],
             listForProps: [],
             listNumber: 6
        }
    }
    

    componentDidMount() {
        var url = window.location.href;
        
        if (url.charAt(url.length - 1) == 'l') {
            window.scrollTo(0, 850);
        }
        else {
            window.scrollTo(0, 0);
        }

        http.get(`/projects/`)
        .then(res => {
            var resList = res.data.sort(() => Math.random() - 0.5)
           this.setState({list: resList});
           this.setState({listForProps: resList});
           let temp = [];
           resList.map((e)=>{
               if (e.latest === true){
                   return temp.push(e)
               }
           })
           this.setState({latestList: temp})

           let tempDesigning = [];
           let tempMarketing = [];
           let tempDevelopment = [];

           res.data.map((e)=>{
               if (e.category == 'Designing') {
                   tempDesigning.push(e)
               }
               else if (e.category == 'Marketing') {
                tempMarketing.push(e)
               }
               else if (e.category == 'Development') {
                tempDevelopment.push(e)
               }
           })

           this.setState({deisgningList: tempDesigning});
           this.setState({marketingList: tempMarketing});
           this.setState({developmentList: tempDevelopment});
        })
        .catch(function (error) {
            console.log(error)
        } .bind(this))
    }

    showAll=()=>{
        this.setState({listForProps: this.state.list})
    }
    showDesigning=()=>{
        this.setState({listForProps: this.state.deisgningList})
    }
    showMarketing=()=>{
        this.setState({listForProps: this.state.marketingList})
    }
    showDevelopment=()=>{
        this.setState({listForProps: this.state.developmentList})
    }


    showMore=()=>{
        if (this.state.listNumber < this.state.listForProps.length) {
            return (<a onClick={_=>{this.setState({listNumber: this.state.listNumber + 3})}} className="rn-button-style--2 btn-less-more btn-solid" ><span>View More Projects</span></a>)
        }
    }

    showLess=()=>{
        if (this.state.listNumber > 6 || this.state.listForProps < 6) {
            return (<a onClick={_=>{this.setState({listNumber: this.state.listNumber - 3})}} className="rn-button-style--2 btn-less-more btn-solid" ><span>View Less Projects</span></a>)
        }
    }

    render(){

    return (
        <>
            <PageHelmet pageTitle='Counters' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Portfolio'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--90 pb--140 bg_color--1">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">Latest Projects</h2>
                                        <p>Want a taste of our team’s outstanding work? Check out our latest projects here…</p>
                                    </div>
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {this.state.latestList.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                     <a href={`/portfolio-details/id${value._id}`}>
                                                    <div className="thumbnail-inner">
                                                        <img src={value.mainImage} className='thumbnail'></img>
                                                        <img src={value.mainImage} className='bg-blr-image'></img>
                                                    </div> </a>

                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href={`/portfolio-details/id${value._id}`}>{value.headerTitle}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href={`/portfolio-details/id${value._id}`}>VIEW DETAILS</a>                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}



                {/* Start Portfolio Area */}
                <div id='all'></div>
                <div className="portfolio-area ptb--120 bg_color--5">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">All Projects</h2>
                                        <p>Want a taste of our team’s outstanding work? Check out our projects here…</p>
                                    </div>

                                    <Tabs>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="tablist-inner">
                                <TabList className="pv-tab-button text-center mt--0">
                                    <Tab onClick={this.showAll}><span>All Projects</span></Tab>
                                    <Tab onClick={this.showDesigning}><span>Designing</span></Tab>
                                    <Tab onClick={this.showMarketing}><span>Marketing</span></Tab>
                                    <Tab onClick={this.showDevelopment}><span>Development</span></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>
                    </Tabs>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList showList={this.state.listForProps.slice(0, this.state.listNumber)} styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        {this.showMore()}
                                        {this.showLess()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}



            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}

        </>
        
    )
}}

export default Portfolio;