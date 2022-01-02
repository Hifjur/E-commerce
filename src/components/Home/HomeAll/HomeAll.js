import React from 'react';
import img1 from '../../../images/categories/bag.png';
import img2 from '../../../images/categories/shoes.png';
import img3 from '../../../images/categories/watch.png';
import './HomeAll.css'

const HomeAll = () => {
    return (
        <section className="container my-4 ">
            <div className="row g-4">


                <div className="col-lg-4 col-md-6 col-12 mb-5">
                    <div className="watch p-3 border d-flex align-items-center justify-content-between rounded-3">
                        <h3 className="text-white">Watch <br /> Flat 20% Discount</h3>
                     <div className='inner'>
                            <img src={img1} alt="" />
                     </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="bag p-3 border d-flex align-items-center justify-content-between rounded-3">
                        <h3 className="text-white">Bag <br /> Flat 20% Discount</h3>
                        <div className='inner'>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 ">
                    <div className="shoes p-3 border d-flex align-items-center justify-content-between rounded-3">
                        <h3 className="text-white">Shoes <br /> Flat 20% Discount</h3>
                        <div className='inner'>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>

    {/*--------------------------------  */}
                <div className="col-lg-4 col-md-6 col-12 mt-5 all_items">
                   
                       
                   
                    <div className="item_size d-flex border align-items-center  rounded-3">
                        <i className="fas fa-paper-plane mx-2"></i> 
                        <div className='items'>
                            <h5>Worlwide Shipping</h5>
                            <p>Order above $100</p>
                        </div>
                    </div>

                    <div className="item_size d-flex border align-items-center  rounded-3">
                        <i className="fab fa-artstation mx-2"></i>
                        <div className='items'>
                            <h5>Easy 30 Days Returns</h5>
                            <p>Back returns in 7 days</p>
                        </div>
                    </div> 
                            

                    <div className="item_size d-flex border align-items-center  rounded-3">
                        <i className="fab fa-shopify mx-2"></i>
                        <div className='items'>
                            <h5>Money Back Guarant</h5>
                             <p>Guarantee with in 30 day</p>
                        </div>
                    </div>  
                            

                    <div className="item_size d-flex border align-items-center rounded-3">
                        <i className="fas fa-headset mx-2"></i>
                        <div className='items'>
                            <h5>Easy online support</h5>
                             <p>Any time support</p>
                        </div>
                    </div>
                    


                </div>



                

            </div>
        </section>
           
       
    );
};

export default HomeAll;

                     
