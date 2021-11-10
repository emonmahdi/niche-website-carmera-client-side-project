import React from 'react';
import banner from './img/banner2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner-area'>
           <div className="container">
            <div className="row banner-area">
                    <div className="col-lg-6">
                        <div className="hero-area text-start">
                            <h1 className='fw-bold'>Welcome to our <span className='text-danger'>CC Camera </span> Shopping Center</h1>
                            <p>We are provide best quakity and reliable and HD CC Camrea Services</p>
                            <div className="exlore-btn">
                                <a href="" className='btn btn-warning'>Explore </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-img">
                            <img src={banner} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Banner;