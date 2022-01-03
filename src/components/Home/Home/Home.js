import React from 'react';
import Blog from '../Blogs/Blog';
import HomeAll from '../HomeAll/HomeAll';
import Slide from '../Slide/Slide';
import Banner from './../Banner/Banner';
import HomeProducts from './../HomeProducts/HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slide></Slide>
           <HomeProducts></HomeProducts>
           <div className='mt-5'>
                <HomeAll></HomeAll>
           </div>
           <Blog></Blog>

        </div>
    );
};

export default Home;