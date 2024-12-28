import React from "react";
import { Component } from "react";


class About extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-6 image">
                        <img className="w-100 img-fluid" src={require("../../Assests/images/img3.avif")}/>
                    </div>
                    <div className="col-lg-6">
                        <h3>About Our Company</h3>
                        <b>Established in 2016, Code Connex is offering world-class information technology solutions.</b>
                        <p>Code Connex is global software development Company headquarters in Hyderabad, India.
                            We have development centres both on-shore and off-shore. We specialize in SAAS Applications,
                            website design & development, E-commerce websites, desktop applications, mobile applications,
                            web applications, UI/UX Design, QA & Testing Services and maintenance.
                        </p>
                        <button type="button" class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        );
    }
}






export default About;