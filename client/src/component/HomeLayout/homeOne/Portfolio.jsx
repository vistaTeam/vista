import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
// import axios from 'axios';
import http from "../../../http-common.js";



// const PortfolioList = [
//     {
//         image: 'image-1',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     }
// ]



class Portfolio extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             latestList: [],
        }
    }


    componentDidMount() {

        http.get(`/projects/`)
        .then(res => {
           let temp = [];
           res.data.map((e)=>{
               if (e.latest === true){
                   return temp.push(e)
               }
               return e
           })
           this.setState({latestList: temp})})

        .catch(function(error){
            console.log(error);
        })
    }
    


    
    render(){
        let title = 'Latest Projects',
        description = 'Want a taste of our team’s outstanding work? Check out our latest projects here…';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {this.state.latestList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <a href={`/portfolio-details/id${value._id}`}> 
                                    <div className="thumbnail-inner">
                                        <img src={value.mainImage} className="thumbnail" alt='Main' ></img>
                                        <img src={value.mainImage} className="bg-blr-image" alt='Main'></img>
                                    </div></a>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href={`/portfolio-details/id${value._id}`}>{value.headerTitle}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={`/portfolio-details/id${value._id}`}>VIEW DETAILS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;