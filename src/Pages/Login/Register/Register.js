import React from 'react';
import regImg from './register.jpg' 
import { Link } from 'react-router-dom'; 
import useAuth from '../../../hooks/useAuth';

const Register = () => {
     
    const {error,handleRegistration, handleEmailChange, handlePasswordChange, handleNameChange} = useAuth();
    console.log(handleNameChange); 
    return (
        <div>
             <div className="container mt-5">
                <div className="row">
                <div className="col-lg-6">
                    <h2>Please Register! </h2>
                    <form onSubmit={handleRegistration} className='shadow px-2 py-4'>
                        <input onBlur={handleNameChange} type="text" className='form-control w-75 mb-3 mx-auto' placeholder='Your Name'/>

                        <input onBlur={handleEmailChange} type="email" className='form-control w-75 mb-3 mx-auto' placeholder='Your Email' />

                        <input onBlur={handlePasswordChange} type="password" className='form-control w-75 mb-3 mx-auto' placeholder='Your Password' />

                        <button className='btn btn-danger mb-3'> Register</button><br /> 
                        <Link to='/login'>Already have an Account!  Please Login</Link>
                    </form> 
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={regImg} className='img-fluid' alt="" />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Register;