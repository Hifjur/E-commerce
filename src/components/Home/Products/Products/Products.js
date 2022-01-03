import React, { useEffect, useState } from 'react';
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
            <h2>Trending Products:{products.length}</h2>
            <div className="services_container">
               
                {
                    products.map(product => <Product
                        product={product.id}
                        product={product}
                    ></Product>)
                }

            </div>
        </div>
    );
};

export default Products;