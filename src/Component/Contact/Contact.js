import React from "react";
import { Component } from "react";
import { GrProjects } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";



class Contact extends Component {
    render() {
        return (
            <div className="container " id="contact">
                <div className="bg-primary" id="cont">

                    <div class="container text-center">
                        <div class="row p-3 ml-3" id="contactcenter">
                            <div class="col col-lg-4">
                                <div class="d-flex justify-content-center">
                                    <div className=""><h1><GrProjects /></h1></div>
                                    <div>
                                        <h1>150+</h1>
                                        <p>Project Complete</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-4">
                                <div class="d-flex justify-content-center">
                                    <div className=""> <h1>< MdOutlineSupervisorAccount /></h1></div>
                                    <div >
                                        <h1> 85+</h1>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-4">
                                <div class="d-flex justify-content-center">
                                    <div className=""><h1><FaAward /></h1></div>
                                    <div>
                                        <h1> 5</h1>
                                        <p>Award win</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div >
                </div>

                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <iframe width="631" height="355" src="https://www.youtube.com/embed/A2jRuVQPB2Q" title="Need Website development that is responsive and user friendly?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary">Send Message</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        )
    }
}
export default Contact;