import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
const Services = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1, py:7 }}>
               <Container> 
               <Typography  sx={{ fontWeight: 'bold', m: 4 }} variant="h4" component="div">
                     Camera We Provide
                </Typography> 
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Service
                        key={product.id}
                        product ={product}
                        ></Service>)
                    }
                </Grid>
                </Container>
            </Box>













        // <div className='services-section'>
        //     <h2 className='fw-bold'>CC Camera Products </h2>
        //     <div className="container">
        //         <div className="row">
        //            {
        //                products.map(product => <Service
        //                key={product.id}
        //                 product={product}
        //                ></Service>)
        //            }
        //         </div>
        //     </div>
        // </div>
    );
};

export default Services;