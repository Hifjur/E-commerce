import React from 'react';
import HomeAll from '../HomeAll/HomeAll';
import Products from '../Products/Products/Products';
import Slide from '../Slide/Slide';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slide></Slide>
            <Products></Products>
           <div className='mt-5'>
                <HomeAll></HomeAll>
           </div>

        </div>
    );
};

export default Home;