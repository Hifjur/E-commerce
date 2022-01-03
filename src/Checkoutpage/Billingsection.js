import React,{useState} from 'react'
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
function Billingsection() {
    const [pageoption, setPageoption] = useState(true);
    

    return (
            <Grid container spacing={2}>
                <Grid item xs={8}>
               
                  <Box>
                    <Typography variant='h4' style={{ backgroundColor: "#bcbbff", padding: "8px 15px", borderRadius: "5px"}}>
                        {
                            pageoption ?"Billing information":"Payment information"  
                        } 
                    </Typography>
                    <form>
                        {
                            pageoption ? <>
                                <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                    <TextField id="outlined-basic" name="username" label="User name" variant="outlined" />
                                </FormControl>
                                <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                    <TextField id="outlined-basic" name="address" label="Address" variant="outlined" />
                                </FormControl>
                                <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                    <TextField id="outlined-basic" name="city" label="City name" variant="outlined" />
                                </FormControl>
                                <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                    <TextField id="outlined-basic" name="phonenumber" label="Phonenumber" variant="outlined" />
                                </FormControl>
                                <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                    <TextField id="outlined-basic" name="postalcode" label="Postalcode" variant="outlined" />
                                </FormControl>

                                <FormControl fullWidth style={{ margin: "10px 0px" }} variant="standard">
                                    <Button variant='contained' onClick={() =>setPageoption(false)}>Next</Button>
                                </FormControl>
                            </>:"gfhfghg"
                                
                        }
                       


                    </form>
                </Box>
                </Grid>
                <Grid item xs={4}>
                    
                </Grid>
                
                </Grid>
        
    )
}

export default Billingsection
