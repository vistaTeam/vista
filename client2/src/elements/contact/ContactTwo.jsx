import React, { Component } from "react";
import emailjs from 'emailjs-com';
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


class ContactTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
            showError: false,
            showSuccsess: false,
            showFalse: false,
            showForm: true,
            showAnimation: false,
        };
    }




    showForm=()=>{
        if (this.state.showForm === true) {
            return(<div>
                                            <div className="form-wrapper">
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Write a Subject *"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Your Message *"
                                        />
                                    </label>
                                    {this.showFalse()}
                                    {this.showError()}
                                    {this.showSuccsess()}
                                    <button onClick={this.sendEmail} className="rn-button-style--2 btn-solid" id="mc-embedded-subscribe">Submit</button>
                            </div>

            </div>)
        }
    }


    showAnimation=()=>{
        if (this.state.showAnimation === true) {
            return(<Lottie options={defaultOptions}
                height={250}
                width={250}
          />)
        }}



    sendEmail=()=>{

        this.setState({showForm: false, showAnimation: true})

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(this.state.rnEmail) && this.state.rnName !== '' && this.state.rnSubject !== '' && this.state.rnMessage !== '') {

        var templateParams = {
            name: this.state.rnName,
            email: this.state.rnEmail,
            subject: this.state.rnSubject,
            message: this.state.rnMessage,
        };
         
        emailjs.send('email_sending', 'template_ur8rptl', templateParams, 'user_CgG2cvhyTvZYouXtvi98G') //use your Service ID and Template ID
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               this.setState({rnName: '', rnEmail: '', rnSubject: '', rnMessage: '',})
               this.setState({showForm: true, showAnimation: false})
               this.setState({showSuccsess: true, showError: false, showFalse: false})
            }.bind(this),
            function(error) {
               console.log('FAILED...', error);
               this.setState({showForm: true, showAnimation: false})
               this.setState({showFalse: true})
            }.bind(this));
        }
        else{
            this.setState({showForm: true, showAnimation: false})
            this.setState({showError: true})
        }
    }

    showError=()=>{
        if (this.state.showError === true) {
            return(<div className='error-message'>Please fill all fields!</div>)
        }
    }

    showFalse=()=>{
        if (this.state.showFalse === true) {
            return(<div className='error-message'>Sorry, Please try again later!</div>)
        }
    }

    showSuccsess=()=>{
        if (this.state.showSuccsess === true) {
            return(<div className='succsess-message'>Thank you for contacting us – we will get back to you soon!</div>)
        }
    }


    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Us.</h2>
                                <p className="description">You can contact us on the following form. Please make sure to leave your full details so that our highly professional and experienced staff can contact you as soon as possible</p>
                            </div>

                            {this.showForm()}
                            {this.showAnimation()}

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-6.jpg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;