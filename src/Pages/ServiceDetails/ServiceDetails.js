import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const ServiceDetails = () => {
    const {Id} = useParams(); 
    const {user} = useAuth();
    // console.log(user);

    const [singleDetails, setSingleDetails] = useState([]);
    // console.log(singleDetails)
    
    const [getDetails, setGetDetails] = useState({})
    console.log(getDetails)

    useEffect( () => {
        fetch('http://localhost:5000/products') 
            .then(res => res.json())
            .then(data => setSingleDetails(data))
    }, []) 

    useEffect( () => {
      const details = singleDetails.find(td => td.id == Id );
      setGetDetails(details);
    }, [singleDetails]);
    return (
        <>
        <Navigation></Navigation>
        <div className='container my-4 pb-5'>
            <div className="row">
                 <div className="col-lg-7">
                    <div className="single-details-services text-start">
                        <div className="title">
                            <h2 className='fw-bold mb-4'>{getDetails?.name}</h2> 
                        </div>
                        <div className="single-details-img shadow rounded">
                            <img src={getDetails?.img} className='img-fluid w-100 rounded-3' alt="" />
                        </div> 
                        <p className='my-4'>{getDetails?.description}</p>
                        <span className='text-primary fw-bold'>Price: {getDetails?.price}</span> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ServiceDetails;