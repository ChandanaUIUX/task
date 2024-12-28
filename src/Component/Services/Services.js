import React from "react";
import { Component } from "react";



class Services extends Component {
    render() {
        return (

            <div className="container mt-5" id="service" >
                <h3 className="text-center">Services that help you grow.</h3>
                <b>We leverage the power of emerging technologies to help brands build cutting edge cloud-based
                    web applications to scale, improve operational effectiveness, and meet customer expectations.
                </b>
                <div className="d-flex gap-5" id="cardmob">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={require("../../Assests/images/img4.avif")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">UI/UX</h5>
                            <p className="card-text">UI/UX deals with how a website looks amd how users interact with a website.
                                It includes everything from how easy it is to navigate a site to how pleasant it is to use.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={require("../../Assests/images/img5.avif")} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Web Solutions</h5>
                            <p class="card-text">Web Solutions deals with services supplied by the Company to the Client
                                dexcribed on the invoices, work authorization or other forms provided by the company to client.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={require("../../Assests/images/img6.avif")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Digital Marketing</h5>
                            <p className="card-text">Digital Marketing deals with the promotion of brands to connect with potential
                                customers using the internet and other forms of digital communication and also includes email, social media,
                                and web-based advertising
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={require("../../Assests/images/img7].avif")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">App Design</h5>
                            <p className="card-text">Application design combines a user interface, commonly known as (UI), and user experience (UX)
                                and tends to the overall style of the app, like colors, fonts, and the general look and feel. In contrast, the user
                                experience will always focus on actual functionality and usability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Services;