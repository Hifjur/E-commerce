import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Magnifier from "react-magnifier";
import { useNavigate } from 'react-router-dom';
import './singlepage.css'
import useAuth from "../../Hooks/useAuth";

function Singlepage() {
    const [indexNumber, setIndexNumber] = useState(0);
    const history = useNavigate();
    const {user} = useAuth();
    const addToCart = () => {
        console.log('clciked')
        const cart = {
          ...product,
          status: "pending",
          email:user.email
        };

        fetch("", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cart),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              history("/cartpage");
            }
          });
      };

    const [product, setProduct] = useState({
        "id": 1,
        "title": "Dress one",
        "src":"https://i.postimg.cc/CL4Qs0LN/ladies-dresses.jpg",
         "description":"Mes soir archipels plus juillets j'ai lors. Horribles lâche poeme plus choient cinquante pourrit entonnoirs, pareils de par que maries cieux ô yeux roulis, les un d'oiseaux le sidéraux au en les, crouler ont porteurs qu'un chair dévorés ni pas et que, montait j'ai plus noyé atroce aux avec ardents a quand, mes chantants fleurs anglais ni comme des aux des regretter. Dorades sous les l'horizon a et archipels monté des. Que que haleurs courus au le, d'eau qu'un peuple dans reculons montrer cotons troupeaux aux monitors. Perdu le les éclate les de que plus. Écumes illuminant courus subi les pareils monté des, éternels éternel avec crouler les taché de. Ainsi un lorsqu'a pontons sans, rouleurs mer les punaises exquise, le au d'horreurs l'aube or. Des de que plus j'aurais vastes. Coup ameres punaises courus fermentent montrer un trombes dont phosphores, jaunes puis plus.",
        "price": "1000",
        "category": "Female",
       
    })
    
    return (
        <Container sx={{ mt: "30px" }}>
            {/* singleproduct */}
            <Grid container spacing={2} sx={{paddingBottom:"15px",paddingRight:"15px",borderRadius:"10px"}}>
                <Grid item md={5} sm={6} xs={12} >
                    <Magnifier src={product.src} width="100%" height="500px"  style={{ borderRadius: "5px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }} />
                </Grid>

                <Grid item md={7} xs={12} sm={6}>
                    <Box sx={{ display: "flex", justifyContent: 'space-between'}}>
                        <h2>{product.title}</h2>
                        <h5 style={{marginTop:"10px",color:"red"}}>${product.price}</h5>
                    </Box>
                    
                    <p style={{textAlign:"justify"}}>{product.description}</p>
                    
                    <br/>
                    <Button variant='contained' color="secondary">Add to cart</Button>
                </Grid>
            </Grid> 
            {/* singleproduct end */}
            <h2 style={{ backgroundColor:"#bcbbff",padding:"15px 15px",borderRadius:"5px", marginBottom:"15px"}}>Realated product</h2>
            <Grid container spacing={2}>
               
                <Grid item md={3} sm={6} xs={6}>
                    <Card className="mycard" sx={{}}>
                        <img src="https://i.postimg.cc/ydzNX7Wj/dress1.jpg" width="100%" height="300px"/>
                        <CardContent>
                            <Typography variant="h5" component="div">
                               Dress four
                            </Typography>
                         
                        </CardContent>
                        <CardActions>
                            <ButtonGroup disableElevation variant="contained" style={{ width: "100%" }}>
                                <Button variant="contained" style={{ width: "50%", }}>Details</Button>
                                <Button variant="contained" color="secondary" style={{ width: "50%" }}>Add to cart</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Card> 
                </Grid>

                <Grid item md={3} sm={6} xs={6}>
                    <Card className="mycard" sx={{}}>
                        <img src="https://i.postimg.cc/CL4Qs0LN/ladies-dresses.jpg" width="100%" height="300px" />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Dress one
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <ButtonGroup disableElevation variant="contained" style={{ width: "100%" }}>
                                <Button variant="contained" style={{ width: "50%", }}>Details</Button>
                                <Button variant="contained" color="secondary" style={{ width: "50%" }}>Add to cart</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={3} sm={6} xs={6} >
                    <Card className="mycard">
                        <img src="https://i.postimg.cc/ydzNX7Wj/dress1.jpg" width="100%" height="300px"/>
                        <CardContent>
                            <Typography variant="h5" >
                                Dress two
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <ButtonGroup disableElevation variant="contained" style={{width:"100%"}}>
                                <Button variant="contained" style={{ width: "50%",}}>Details</Button>
                                <Button variant="contained" color="secondary" style={{ width: "50%"}}>Add to cart</Button>
                            </ButtonGroup>
                         </CardActions>
                    </Card>
                </Grid>

                <Grid item md={3} sm={6} xs={6}>
                    <Card className="mycard" sx={{}}>
                        <img src="https://i.postimg.cc/g0Gv4jm0/ladis4.jpg" width="100%" height="300px" />
                        <CardContent>
                            <Typography  variant="h5" component="div">
                                Dress three
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <ButtonGroup disableElevation variant="contained" style={{ width: "100%" }}>
                                <Button variant="contained" style={{ width: "50%", }}>Details</Button>
                                <Button onClick={addToCart} variant="contained" color="secondary" style={{ width: "50%" }}>Add to cart</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Card>
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default Singlepage
