import React from 'react';
import { Component } from 'react';


class Section extends Component {
    render() {
        return (

            <div className='container-fluid' id="section">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" >
                            <div id="imgtext" className='text'>
                                <h3>Welcome to Code Connex</h3>
                                <h1>Defining Your Success with Our Capabilities</h1>
                                <b>Bring your imagination to real life. We are here to connect creativity with dreams.</b><br />
                                <button type="button" class="btn btn-primary">Discover More</button>
                            </div>
                            <img className='img-fluid' id="img1" src={require("../../Assests/images/img1.avif")} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className='img-fluid' src={require("../../Assests/images/img2.avif")} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className='img-fluid' src={require("../../Assests/images/img3.avif")} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}




export default Section;