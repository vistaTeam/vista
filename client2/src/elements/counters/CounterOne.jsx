import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class CounterOne extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                countNum : 784,
                countTitle:'HAPPY CLIENTS',
                countText: 'We provide high quality work and exceptional customer service to meet each client’s unique needs. We aren’t happy unless you’re happy!',
            },
            {
                countNum : 134,
                countTitle:'PROJECTS COMPLETED',
                countText: 'Whether it’s graphic design, a marketing campaign, we work hard to ensure that our projects are always completed thoroughly.',
            },
            {
                countNum : 8,
                countTitle:'DEVELOPED WEBSITES',
                countText: 'We specialize in crafting beautifully designed websites for clients from a variety of businesses across the globe.',
            },
        ];

        return(
            <Fragment>
                <div className="row">
                    {Data.map( (value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor>
                            </h5>
                            <p className='counters-title'>{value.countTitle}</p>
                            <p className="description">{value.countText}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;