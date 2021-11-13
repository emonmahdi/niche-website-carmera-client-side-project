import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [allProduct, setAllProduct] = useState([]); 
    useEffect( () => {
        fetch('https://floating-brushlands-69633.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    // delete product
     

    return (
        <div>
            <h2>Manage All Products Here.{allProduct.length} </h2>
            <div className='bg-light'> 
                 <div className="container mt-5">
                     <div className="row"> 
                         {
                             allProduct.map(product => <div className='col-lg-4 col-md-6 col-sm-12' key={product.id}>
                                 <div className="single-product rounded-3  mb-4 bg-light shadow">
                                     <img src={product.img} className='img-fluid' alt="" />
                                     <div className="content p-3 ">
                                        <h5 className='text-danger fw-bold'>{product.name}</h5>
                                        <p>{product.description}</p>
                                        <h5>Price: {product.price}</h5>
                                         
                                        <button className='btn btn-warning mt-3'>Delete Product</button>
                                        
                                        
                                     </div>
                                 </div>
                             </div>)
                         }
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default ManageProduct;