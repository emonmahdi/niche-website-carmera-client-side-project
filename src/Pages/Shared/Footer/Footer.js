import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
	<div className="container">
		<div className="row">
			<div className="col-md-2">
				<h4>
					<a href="#">Smart Camera</a>
				</h4>
				<span>All rights reserved.&copy; 2021| Smart Camera </span>
				<div className="socila-footer">
					<a href=""><i className="fa fa-facebook"></i></a>
					<a href=""><i className="fa fa-twitter"></i></a>
					<a href=""><i className="fa fa-instagram"></i></a>
				</div>
			</div>
			<div className="col-md-2">
				<h4>Useful Links</h4>
				<ul>
					<li><a href="">Home</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Service</a></li>
					<li><a href="">Conatact</a></li>
				</ul>
			</div>
			<div className="col-md-2">
				<h4>Useful Links</h4>
				<ul>
					<li><a href="">Blog</a></li>
					<li><a href="">Gallrey</a></li>
					<li><a href="">Portfolio</a></li>
					<li><a href="">Pricing</a></li>
				</ul>
			</div>
			<div className="col-md-2">
				<h4>Useful Links</h4>
				<ul>
					<li><a href="">Login</a></li>
					<li><a href="">Timeline</a></li>
					<li><a href="">Faq</a></li>
					<li><a href="">Coming Soon</a></li>
				</ul>
			</div>
			<div className="col-md-4">
				<h4>Subscrib</h4>
				<form action="" className="d-flex footer-input">
				  	 <input type="text" className='form-control' />
				  	<button className="btn btn-danger" type="submit"><i className="fa fa-paper-plane"></i>Subscribe</button>
			  </form>
			  <p>We help you to grow up your business and solution for your impressive projects.</p>
			</div>
		</div>
	</div>
</footer>
        </div>
    );
};

export default Footer;