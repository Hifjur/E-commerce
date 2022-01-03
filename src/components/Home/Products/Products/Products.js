import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
          fetch('/products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
    }, [])
    return (
       <div>
           <Header></Header>
            <div>
                <h2 className='mb-5 mt-5 services_text text-sm-start mx-3'>Dress collection</h2>
                <div className="services_container">

                    {
                        products.map(product => <Product
                            product={product.id}
                            product={product}
                        ></Product>)
                    }

                </div>

                <Footer></Footer>
            </div>
       </div>
    );
};

export default Products;