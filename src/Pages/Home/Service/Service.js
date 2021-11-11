import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Service = ({product}) => {

    
    const {id, name, img, description,price} = product;
    return (
        <div className="col-lg-4">
        <div className="single-service shadow ">
            <img className='img-fluid' src={img} alt="" />
            <div className="content p-3">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Price: {price}</h5>
                <Link to={`/product/${id}`}>
                    <button className='btn btn-primary'>Purches</button>
                </Link>
                
            </div>
        </div>
    </div>
    );
};

export default Service;