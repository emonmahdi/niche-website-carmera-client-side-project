import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../Shared/Navigation/Navigation';
import loginImg from './login.jpg'
const Login = () => {
    const handleOnSubmit =(e) =>{
        e.preventDefault();
    }

    const {user, signInUsingGoogle} = useFirebase();  
    const {handleLogin,error,handleRegistration, handleEmailChange, handlePasswordChange} = useAuth(); 
    
    return (
        <>
            <Navigation></Navigation>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={loginImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2>Please Login! </h2>
                        <form onSubmit={handleOnSubmit} className='shadow px-2 py-4'>
                            <input onBlur={handleEmailChange} type="email" className='form-control w-75 mb-3 mx-auto' />
                            <input onBlur={handlePasswordChange} type="password" className='form-control w-75 mb-3 mx-auto' />
                            <button onClick={handleLogin} className='btn btn-danger mb-3'> Login</button><br />
                            <Link to='/register'>New User? Please Register</Link>
                        </form> 
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;