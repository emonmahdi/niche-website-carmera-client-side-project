import React from 'react';
import './Footer.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const footerBg ={
	backgroundColor:'#000', 
	padding:'50px 0',
	color:'#fff'
}

const Footer = () => {
    return (
 
			<Box style={footerBg} sx={{ flexGrow: 1, py:5 }}>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				<Grid  item xs={2} sm={12} md={4} >
					<Typography variant='h5'> 
						Smart Camera
					</Typography>
				</Grid>
				<Grid  item xs={2} sm={12} md={4} >
					<Typography variant='h5'> 
						Smart Camera
					</Typography>
				</Grid>
				<Grid  item xs={2} sm={12} md={4} >
					<Typography variant='h5'> 
						Smart Camera
					</Typography>
				</Grid>
			</Grid>
    		</Box> 












//         <div>
//             <footer className="footer-section">
// 	<div className="container">
// 		<div className="row">
// 			<div className="col-md-2">
// 				<h4>
// 					<a href="#">Smart Camera</a>
// 				</h4>
// 				<span>All rights reserved.&copy; 2021| Smart Camera </span>
// 				<div className="socila-footer">
// 					<a href=""><i className="fa fa-facebook"></i></a>
// 					<a href=""><i className="fa fa-twitter"></i></a>
// 					<a href=""><i className="fa fa-instagram"></i></a>
// 				</div>
// 			</div>
// 			<div className="col-md-2">
// 				<h4>Useful Links</h4>
// 				<ul>
// 					<li><a href="">Home</a></li>
// 					<li><a href="">About</a></li>
// 					<li><a href="">Service</a></li>
// 					<li><a href="">Conatact</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-md-2">
// 				<h4>Useful Links</h4>
// 				<ul>
// 					<li><a href="">Blog</a></li>
// 					<li><a href="">Gallrey</a></li>
// 					<li><a href="">Portfolio</a></li>
// 					<li><a href="">Pricing</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-md-2">
// 				<h4>Useful Links</h4>
// 				<ul>
// 					<li><a href="">Login</a></li>
// 					<li><a href="">Timeline</a></li>
// 					<li><a href="">Faq</a></li>
// 					<li><a href="">Coming Soon</a></li>
// 				</ul>
// 			</div>
// 			<div className="col-md-4">
// 				<h4>Subscrib</h4>
// 				<form action="" className="d-flex footer-input">
// 				  	 <input type="text" className='form-control' />
// 				  	<button className="btn btn-danger" type="submit"><i className="fa fa-paper-plane"></i>Subscribe</button>
// 			  </form>
// 			  <p>We help you to grow up your business and solution for your impressive projects.</p>
// 			</div>
// 		</div>
// 	</div>
// </footer>
//         </div>
    );
};

export default Footer;