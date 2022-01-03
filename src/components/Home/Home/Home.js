import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header';
import Blog from '../Blogs/Blog';
import HomeAll from '../HomeAll/HomeAll';
import Slide from '../Slide/Slide';
import Banner from './../Banner/Banner';
import HomeProducts from './../HomeProducts/HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <Banner></Banner>
            <Slide></Slide>
           <HomeProducts></HomeProducts> 
           <div className='mt-5'>
                <HomeAll></HomeAll>
           </div>

          <Footer></Footer>

        </div>
    );
};

export default Home;