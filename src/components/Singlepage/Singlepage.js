import { Box, Button, Container, Grid } from '@mui/material'
import React,{useState} from 'react'
import stylesinglepage from './singlepage.module.css'


function Singlepage() {
    const [indexNumber, setIndexNumber] = useState(0);
    const [product, setProduct] = useState({
        "id": 1,
        "title": "Dress one",
        "src": [
            "https://i.postimg.cc/CL4Qs0LN/ladies-dresses.jpg",
            "https://i.postimg.cc/ydzNX7Wj/dress1.jpg",
            "https://i.postimg.cc/W4S0yV1w/ladis2.jpg",
            "https://i.postimg.cc/g0Gv4jm0/ladis4.jpg"
        ],
        "description":"Mes soir archipels plus juillets j'ai lors. Horribles lâche poeme plus choient cinquante pourrit entonnoirs, pareils de par que maries cieux ô yeux roulis, les un d'oiseaux le sidéraux au en les, crouler ont porteurs qu'un chair dévorés ni pas et que, montait j'ai plus noyé atroce aux avec ardents a quand, mes chantants fleurs anglais ni comme des aux des regretter. Dorades sous les l'horizon a et archipels monté des. Que que haleurs courus au le, d'eau qu'un peuple dans reculons montrer cotons troupeaux aux monitors. Perdu le les éclate les de que plus. Écumes illuminant courus subi les pareils monté des, éternels éternel avec crouler les taché de. Ainsi un lorsqu'a pontons sans, rouleurs mer les punaises exquise, le au d'horreurs l'aube or. Des de que plus j'aurais vastes. Coup ameres punaises courus fermentent montrer un trombes dont phosphores, jaunes puis plus.",
        "price":"1000"
    })
    
    return (
        <Container sx={{ mt: "30px" }}>
            {/* singleproduct */}
            <Grid container spacing={2} sx={{paddingBottom:"15px",paddingRight:"15px",borderRadius:"10px"}}>
                <Grid item md={5} sm={6} xs={12} >
                    
                    <img src={product.src[indexNumber]} width="100%" height="500px" style={{borderRadius:"5px"}} />
                    
                    
                </Grid>
                <Grid item md={7} xs={12} sm={6}>
                    <Box sx={{ display: "flex", justifyContent: 'space-between'}}>
                        <h2>{product.title}</h2>
                        <h5 style={{marginTop:"10px",color:"red"}}>${product.price}</h5>
                    </Box>
                    
                    <p style={{textAlign:"justify"}}>{product.description}</p>
                    <div>
                        {product.src.map((image, index) => {
                            return (
                                <img src={image} width="100px" height="100px" style={{ marginRight: "5px", marginTop: "5px" }} onClick={(e) => { setIndexNumber(index) }} />
                            )
                        })}
                    </div>
                    <br/>
                    <Button variant='contained' color="secondary">Add to cart</Button>
                </Grid>
            </Grid> 
            {/* singleproduct end */}
        </Container>
    )
}

export default Singlepage
