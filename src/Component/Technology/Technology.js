import React from "react";
import { Component } from "react";
import { FaReact, FaNodeJs, FaPython, } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoPolymer } from "react-icons/io";

class Tcchnology extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <div className=" text-center">
                        <h1>Technology Stacks</h1>
                        <p>Set of tools, programming languages, and technologies that work together to build digital products or
                            solutions such as websites, mobile, and web apps.
                        </p>
                    </div>
                    <div class="row gap-5 p-5 align-items-center" id="techcenter">
                        <div class="col-lg-3 p-3 bg-info bg-opacity-10 border border-info  rounded-end" >
                            <div class="row">
                                <div class="col-lg-3 "><h1><FaReact /></h1></div>
                                <div class="col-lg-9">
                                    <b>React JS</b><br />
                                    <p>React is a free and open-source front-end JavaScript library for building user
                                        interfaces based on UI components. It is maintained by Meta and a community of individual
                                        developers and companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-3 bg-info bg-opacity-10 border border-info rounded-end">
                            <div class="row">
                                <div class="col-lg-3 "><h1><FaReact /></h1></div>
                                <div class="col-lg-9">
                                    <b>React JS</b><br />
                                    <p>React is a free and open-source front-end JavaScript library for building user
                                        interfaces based on UI components. It is maintained by Meta and a community of individual
                                        developers and companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-3 bg-info bg-opacity-10 border border-info rounded-end">
                            <div class="row">
                                <div class="col-lg-3 "><h1><FaFlutter /></h1></div>
                                <div class="col-lg-9">
                                    <b>React JS</b><br />
                                    <p>React is a free and open-source front-end JavaScript library for building user
                                        interfaces based on UI components. It is maintained by Meta and a community of individual
                                        developers and companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-3 bg-info bg-opacity-10 border border-info rounded-end">
                            <div class="row">
                                <div class="col-lg-3 "><h1><FaNodeJs /></h1></div>
                                <div class="col-lg-9">
                                    <b>React JS</b><br />
                                    <p>React is a free and open-source front-end JavaScript library for building user
                                        interfaces based on UI components. It is maintained by Meta and a community of individual
                                        developers and companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-3 bg-info bg-opacity-10 border border-info rounded-end">
                            <div class="row">
                                <div class="col-lg-3 "><h1><FaPython /></h1></div>
                                <div class="col-lg-9">
                                    <b>React JS</b><br />
                                    <p>React is a free and open-source front-end JavaScript library for building user
                                        interfaces based on UI components. It is maintained by Meta and a community of individual
                                        developers and companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-3 bg-info bg-opacity-10 border border-info rounded-end">
                            <div class="row">
                                <div class="col-lg-3 "><h1><IoLogoPolymer /></h1></div>
                                <div class="col-lg-9">
                                    <b>React JS</b><br />
                                    <p>React is a free and open-source front-end JavaScript library for building user
                                        interfaces based on UI components. It is maintained by Meta and a community of individual
                                        developers and companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Tcchnology;