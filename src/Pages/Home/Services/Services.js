import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <div className='services-section'>
            <h2>Products </h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-service shadow ">
                            <img className='img-fluid' src="https://i.ibb.co/gWZFWv7/room-3.jpg" alt="" />
                            <div className="content p-3">
                                <h3>Network Camera</h3>
                                <p>Image Sensor 1/3" 4MP CMOS Sensor. Effective Pixels 2592*1520</p>
                                <h5>Price: 1200</h5>
                                <button className='btn btn-primary'>Purches</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;