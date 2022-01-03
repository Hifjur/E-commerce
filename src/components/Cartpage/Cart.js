import React from 'react'
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
function Cart() {
    return (
        <Container style={{marginTop:"10px"}}>

            <Grid container spacing={2}>
                <Grid item md={9} sm={12} xs={12}>
                    <Typography variant='h4' style={{ backgroundColor: "#bcbbff",padding:"8px 15px",borderRadius:"5px"}}>
                       Cart page 
                    </Typography>

                    <Box style={{marginTop:"20px"}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead style={{backgroundColor:"#bcbbff"}}>
                                    <TableRow>
                                        <TableCell>image</TableCell>
                                        <TableCell align="center">product name</TableCell>
                                        <TableCell align="center">quantity</TableCell>
                                        <TableCell align="center">price</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        [...Array(5).keys()].map(() => {
                                            return (
                                                <TableRow

                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        <img src="https://i.postimg.cc/ydzNX7Wj/dress1.jpg" style={{ width: "100px", height: "100px" }} />
                                                    </TableCell>
                                                    <TableCell align="center">Dress name</TableCell>
                                                    <TableCell align="center">
                                                        <input type="number" min="1" style={{ width: "80px" }} />
                                                    </TableCell>
                                                    <TableCell align="center">price</TableCell>
                                                    <TableCell align="center">
                                                        <IconButton color="secondary">
                                                            <DeleteIcon/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                        
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                      
                    </Box>
                </Grid>
                <Grid item md={3} sm={12} xs={12}>
                    <Box style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",borderRadius:"5px"}}>
                        <h4 style={{textAlign:"center",backgroundColor:"black",color:"white",padding:"10px",borderTopRightRadius:"5px",borderTopLeftRadius:"5px"}}>Order summery</h4>
                       
                        <List>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        1
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Product Quantity"
                                />
                            </ListItem>

                                <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                $1000
                                            </IconButton>
                                        }
                                  >
                                     <ListItemText
                                         primary="Product total"
                                     />
                            </ListItem>
                            
                            

                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        $20
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Delivary charge"
                                />
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        $102
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Tax(10%)"
                                />
                            </ListItem>
                            <Divider/>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        $1122
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary="Total"
                                />
                               
                            </ListItem>
                            <Divider />
                           
                            
                                    <Button style={{width:"100%",padding:"15px"}}>
                                       Proceed to checkout
                                    </Button>
                                
                           
                          
                         </List>
                        
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default Cart