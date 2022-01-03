import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import './HomeProducts.css'


const HomeProducts = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setHomeProducts(data))
    }, [])
    return (
        <div>
            <h2 className='mb-5 mt-5 services_text text-sm-start mx-3'>Dress collection:{homeProducts.length}</h2>
            <div className="services_container">

                {
                    homeProducts.slice(0, limit ? limit : homeProducts.length).map(homeProduct => <HomeProduct
                        homeProduct={homeProduct.id}
                        homeProduct={homeProduct}
                    ></HomeProduct>)
                }

            </div>
        </div>
    );
};

export default HomeProducts;