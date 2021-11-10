import React from 'react';

const Service = ({product}) => {
    const {name, img, description,price} = product;
    return (
        <div className="col-lg-4">
        <div className="single-service shadow ">
            <img className='img-fluid' src={img} alt="" />
            <div className="content p-3">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Price: {price}</h5>
                <button className='btn btn-primary'>Purches</button>
            </div>
        </div>
    </div>
    );
};

export default Service;