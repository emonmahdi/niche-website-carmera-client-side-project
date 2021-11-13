import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Upcomming from '../Upcomming/Upcomming';

const Home = () => {
    return (
        <div>
             <Navigation></Navigation>
             <Banner></Banner>
             <Services></Services>
             <Review></Review>
             <Upcomming></Upcomming>
             <Footer></Footer>
        </div>
    );
};

export default Home;