import { Container } from '@mui/material';
import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header';
import Billingsectoin from './Billingsection';


function Checkout() {
    const { total } = useParams();
    console.log(total);
    return (
        <>  
            <Header/>
            <Container style={{marginTop:"20px"}}>
              <Billingsectoin total={total}/>
            </Container>
            <Footer/>
         </>
    )
}

export default Checkout
