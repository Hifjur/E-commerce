import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header';
import Blog from '../Blogs/Blog';
import HomeAll from '../HomeAll/HomeAll';
import Products from '../Products/Products/Products';
import Slide from '../Slide/Slide';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <Slide></Slide>
            <Products></Products>
           <div className='mt-5'>
                <HomeAll></HomeAll>
           </div>
           <Blog></Blog>
            <Footer/>
        </div>
    );
};

export default Home;