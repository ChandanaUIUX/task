import React from "react";
import { Component } from "react";



class Choose extends Component {
    render() {
        return (
            <div class="container text-center" id="choose">
                <div class="row">
                    <div class="col-lg-6">
                        <img className="img-fluid" src={require('../../Assests/images/img2.avif')} />
                    </div>
                    <div class="col-lg-6">
                        <h3>Why Choose Ortencey</h3>
                        <h1>Reason For Choosing Our Digital Agency</h1>
                        <p>Expertise in web design and development, combined with a proven track record of successful projects,
                            make our digital agency the ideal choice for creating a professional and impactful website.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Choose;