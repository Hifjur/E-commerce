import { Container, Grid } from '@mui/material'
import React,{useState} from 'react'
import stylesinglepage from './singlepage.module.css'


function Singlepage() {
    const [indexNumber, setIndexNumber] = useState(0);
    const [product, setProduct] = useState({
        "id": 1,
        "title": "lehenga",
        "src": [
            "https://i.postimg.cc/CL4Qs0LN/ladies-dresses.jpg",
            "https://i.postimg.cc/ydzNX7Wj/dress1.jpg",
            "https://i.postimg.cc/CL4Qs0LN/ladies-dresses.jpg",
            "https://i.postimg.cc/ydzNX7Wj/dress1.jpg"
        ],
        "description": "le furieux anses dérades drames, de  pareille monté taché, sur nuits les ô qui plein par, désire plus morves exquise dans sont. Dont lents a le porteur avec poeme fileur. Je douce j'ai lents voulais - de et vu peaux-rouges. L'europe pieds ou tout je pôles a léviathan du l'horizon, verts aux ni sous des nuits aux noirs. Sous de les bateau traverser je. Éternel des des noirs verte sentant je restais pleuré électriques. Des voulu je de béhémots furieux noirs bleme. Mes soir archipels plus juillets j'ai lors. Horribles lâche poeme plus choient cinquante pourrit entonnoirs, pareils de par que maries cieux ô yeux roulis, les un d'oiseaux le sidéraux au en les, crouler ont porteurs qu'un chair dévorés ni pas et que, montait j'ai plus noyé atroce aux avec ardents a quand, mes chantants fleurs anglais ni comme des aux des regretter. Dorades sous les l'horizon a et archipels monté des. Que que haleurs courus au le, d'eau qu'un peuple dans reculons montrer cotons troupeaux aux monitors. Perdu le les éclate les de que plus. Écumes illuminant courus subi les pareils monté des, éternels éternel avec crouler les taché de. Ainsi un lorsqu'a pontons sans, rouleurs mer les punaises exquise, le au d'horreurs l'aube or. Des de que plus j'aurais vastes. Coup ameres punaises courus fermentent montrer un trombes dont phosphores, jaunes puis plus.",
        "price":"1000"
    })
    
    return (
        <Container sx={{mt:"30px"}}>
            <Grid container spacing={2}>
                <Grid item md={5} sm={6} xs={12} >
                    
                    <img src={product.src[indexNumber]} width="100%" height="400px" />
                    <div>
                        {product.src.map((image, index) => {
                            return (
                                <img src={image} width="112px" height="150px" style={{ marginRight: "5px",marginTop:"5px" }} onClick={(e) => { setIndexNumber(index) }} />
                            )
                        })}
                    </div>
                    
                </Grid>
                <Grid item md={7} xs={12} sm={6}>
                    <h2>{ product.title}</h2>
                    <p style={{textAlign:"justify"}}>{product.description}</p>
                    
                </Grid>
               
            </Grid> 
        </Container>
    )
}

export default Singlepage
