import React,{useState} from 'react'
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
function Billingsection() {
    const [pageoption, setPageoptoin] = useState(false);

    return (
        <Box>
            <form>
                <input type="text" name="username" />
                <input type="text" name="address" />
                <input type="text" name="city" />
                <input type="text" name="phonenumber" />
                <input type="text" name="postalcode"/>
           </form>
        </Box>
    )
}

export default Billingsection
