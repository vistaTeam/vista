import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';


class PortfolioList extends Component{

    render(){
        const {column , styevariation } = this.props;
        // const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {this.props.showList.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                        <a href={`/portfolio-details/id${value._id}`}>
                            <div className="thumbnail-inner">
                                <img src={value.mainImage} className='thumbnail' alt='image'></img>
                                <img src={value.mainImage} className='bg-blr-image' alt='image'></img>
                                </div></a>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={`/portfolio-details/id${value._id}`}>{value.headerTitle}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={`/portfolio-details/id${value._id}`}>View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;