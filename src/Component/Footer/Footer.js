import React from 'react';
import { Component } from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";



class Footer extends Component {
    render() {
        return (
            <div className='container-fluid bg-dark' id="footerbody">
                <div className='container text-white'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6 align-items-start my-4'>
                            <div className='footerlogo my-3'>
                                <img className='w-50' src={require("../../Assests/images/logo.png")} alt="" />
                            </div>
                            <div className='footertext my-3'>
                                <p>Our mission is to diversify and utilize new and emerging technologies and to enhance
                                    the business operation of our clients by developing and/or implementing premium IT
                                    products and services.
                                </p>
                            </div>

                        </div>

                        <div className='col-lg-2 col-sm-6 text-white'>
                            <b>Services</b>
                            <p>UI-UX Web</p>
                            <p>   Design Mobile Applications</p>
                            <p> Saas Applications</p>
                            <p> Digital Marketing</p>
                            <p>  Resource Based</p>
                            <p>  Engagement Maintenance</p>
                        </div>
                        <div className='col-lg-2 col-sm-6 text-white'>
                            <b>Services</b>
                            <p>UI-UX Web</p>
                            <p>   Design Mobile Applications</p>
                            <p> Saas Applications</p>
                            <p> Digital Marketing</p>
                            <p>  Resource Based</p>
                            <p>  Engagement Maintenance</p>
                        </div>
                        <div className='col-lg-2 col-sm-6 text-white'>
                            <b>Services</b>
                            <p>UI-UX Web</p>
                            <p>   Design Mobile Applications</p>
                            <p> Saas Applications</p>
                            <p> Digital Marketing</p>
                            <p>  Resource Based</p>
                            <p>  Engagement Maintenance</p>
                        </div>
                        <div className='col-lg-2 col-sm-6 text-white'>
                            <b>Services</b>
                            <p>UI-UX Web</p>
                            <p>   Design Mobile Applications</p>
                            <p> Saas Applications</p>
                            <p> Digital Marketing</p>
                            <p>  Resource Based</p>
                            <p>  Engagement Maintenance</p>
                        </div>
                        
                        <b>SOCIAL MEDIA</b><br />
                        <div className='gap-4'><CiFacebook /><FaInstagram /><CiYoutube /><CiLinkedin /></div>
                    </div>
                </div>
                
            </div>
          
        );
    }
}
export default Footer;