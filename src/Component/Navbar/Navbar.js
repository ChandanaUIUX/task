import React from 'react';
import { Component } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram, FaArrowRight } from "react-icons/fa";


class Navbar extends Component {
    render() {
        return (
            <div className='container-fluid ' >
                <div className="fixed-top">
                    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark" Id="mobnav">
                        <nav class="nav">
                            <a class="nav-link text-white" href="#">Welcome to CodeConnex Private Limited</a>
                            <a class="nav-link text-white" href="#">+91 000000000</a>
                            <a class="nav-link text-white" href="#">hello@codeconnex.com</a>

                        </nav>
                        <ul class="nav justify-content-end ">
                            <li class="nav-item ">
                                <a class="nav-link text-white" href="#"><FaFacebookF /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"><FaLinkedinIn /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"><FaTwitter /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"><FaYoutube /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"><FaInstagram /></a>
                            </li>
                        </ul>
                    </nav>
                    <div className='container-fluid' id="grid-container">

                        <ul class="nav nav-pills nav-fill align-items-center bg-white">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><img src={require("../../Assests/images/logo.png")} alt="" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Why CodeConnex</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">How We Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Careers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Get for Quote<FaArrowRight /></a>
                            </li>

                        </ul>
                    </div>
                </div>
                <hr />

            </div>
        );
    }
}










export default Navbar;