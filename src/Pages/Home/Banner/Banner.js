import React from 'react';
import banner from './img/banner2.png'
import './Banner.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container } from '@mui/material';



const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height:450,

}

const Banner = () => {
    return (
        <Box  sx={{ flexGrow: 1 }}>
            <Container >
                <Grid container spacing={2}>
                <Grid style={verticalAlign} sx={{textAlign: 'left'}} item xs={12} md={6}>
                   <Box>
                   <Typography style={{ fontWeight:600}} variant='h3'>
                            Your Business Or Security Smile  
                            Saved Here
                    </Typography>
                    <Typography style={{color:'gray', fontWeight:'300'}} variant='p'>
                            We are provide CC Camera And Your Business  And Any Appertment save our Camera service <br />
                    </Typography> 
                    <Button style={{marginTop: '20px',backgroundColor:'#0BBC96'}} variant="contained">Get Explore</Button>
                   </Box>
                </Grid>
                <Grid style={verticalAlign} item xs={12} md={6}>
                    <img style={{width:'400px'}} src={banner} alt="" />
                </Grid>
                
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;