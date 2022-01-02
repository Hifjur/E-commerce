import React from 'react';
import img1 from '../../../images/categories/bag.png';
import img2 from '../../../images/categories/shoes.png';
import img3 from '../../../images/categories/watch.png';
import './HomeAll.css'

const HomeAll = () => {
    return (
        <section className="container my-4 ">
            <div className="row g-4">


                <div className="col-lg-4 col-md-6 col-12 ">
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


            </div>

        </section>
    //   <Container>

    //         <div className="card mb-3">
               
    //               <Row>
    //                     <div>
    //                     <Col md={6}>
    //                         <img src={img1} className="" alt="..." />
    //                     </Col>

    //                     <Col md={6}>
    //                         <div className="card-body mx-5">
    //                             <p className="card-title">Flat 20% Discount</p>
    //                             <h2 className="card-text fs-5">Archive Sold <br /> Watch</h2>
    //                             <button className="button_shop">Shop Now</button>
    //                         </div>
    //                     </Col>
    //                     </div>
                 
    //                    <div>
    //                     <Col md={6}>
    //                         <img src={img2} className="" alt="..." />
    //                     </Col>

    //                     <Col md={6}>
    //                         <div className="card-body mx-5">
    //                             <p className="card-title">Flat 20% Discount</p>
    //                             <h2 className="card-text fs-5">Archive Sold <br /> Watch</h2>
    //                             <button className="button_shop">Shop Now</button>
    //                         </div>
    //                     </Col>
    //                 </div>
                      
    //                     <div>
    //                     <Col md={6}>
    //                         <img src={img3} className="" alt="..." />
    //                     </Col>

    //                     <Col md={6}>
    //                         <div className="card-body mx-5">
    //                             <p className="card-title">Flat 20% Discount</p>
    //                             <h2 className="card-text fs-5">Archive Sold <br /> Watch</h2>
    //                             <button className="button_shop">Shop Now</button>
    //                         </div>
    //                     </Col>
    //                     </div>
                  
    //             </Row>
    //         </div>
    //   </Container>
           
       
    );
};

export default HomeAll;

                     
