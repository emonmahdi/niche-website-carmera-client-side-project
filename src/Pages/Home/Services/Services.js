import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='services-section'>
            <h2 className='fw-bold'>CC Camera Products </h2>
            <div className="container">
                <div className="row">
                   {
                       products.map(product => <Service
                        product={product}
                       ></Service>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Services;