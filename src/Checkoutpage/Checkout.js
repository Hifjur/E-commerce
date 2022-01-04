import { Container } from '@mui/material';
import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import Billingsectoin from './Billingsection';


function Checkout() {
    const { total } = useParams();
    console.log(total);
    return (
        <Container style={{marginTop:"20px"}}>
           <Billingsectoin total={total}/>
        </Container>
    )
}

export default Checkout
