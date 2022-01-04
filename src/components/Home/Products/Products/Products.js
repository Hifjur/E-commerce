import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://sleepy-tundra-35830.herokuapp.com/products')
          .then(res => res.json())
          .then(data => setProducts(data))
    }, [])
    return (
       <Container>
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

       </Container>
    );
};

export default Products;