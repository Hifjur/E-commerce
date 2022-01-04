import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import Addproduct from './Addproduct/Addproduct';
import Dashboardhome from './Dashboardhome/Dashboardhome';
import { Button, MenuItem } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
const drawerWidth = 240;
const {admin} =useAuth
function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box style={{ backgroundColor: "#55bdca", height: "100%" }}>
      <Toolbar />
      <Divider />
      <div>
        <NavLink
          style={{
            display: "block",
            marginY: 3,
            textDecoration: "none",
              color: "white",
              padding:"10px"
          }}
          to="/dashboard/home"
        >
          
            Home Page
          
        </NavLink>
        {!admin && (
          <Box>
            <NavLink
              style={{
                display: "block",
                marginY: 3,
                textDecoration: "none",
                  color: "white",
                  padding: "10px"
              }}
                to="/dashboard/addproduct"
            >
                <Button>
                  Add product
                </Button>
                
              
            </NavLink>
            <NavLink
              style={{
                display: "block",
                marginY: 3,
                textDecoration: "none",
                  color: "white",
                  padding: "10px"
              }}
              to="/dashboard/addproduct"
            >
              
               Manage product
              
            </NavLink>
          </Box>
        )}
        {admin && (
          <Box>
            <NavLink
              style={{
                display: "block",
                marginY: 3,
                textDecoration: "none",
                color: "white",
              }}
              to={`/dashboard`}
            >
              <Button
                sx={{ backgroundColor: "#55bdca", color: "whtie" }}
                color="inherit"
              >
                Mange All Orders
              </Button>
            </NavLink>
            <NavLink
              style={{
                display: "block",
                marginY: 3,
                textDecoration: "none",
                color: "white",
              }}
              to={`/dashboard/makeAdmin`}
            >
              <Button
                sx={{ backgroundColor: "#55bdca", color: "whtie" }}
                color="inherit"
              >
                Make Admin
              </Button>
            </NavLink>
            <NavLink
              style={{
                display: "block",
                marginY: 3,
                textDecoration: "none",
                color: "white",
              }}
              to={`/dashboard/addhotel`}
            >
              <Button
                sx={{ backgroundColor: "#55bdca", color: "whtie" }}
                color="inherit"
              >
                Add New Hotel
              </Button>
            </NavLink>
            <NavLink
              style={{
                display: "block",
                marginY: 3,
                textDecoration: "none",
                color: "white",
              }}
              to={`/dashboard/managehotels`}
            >
              <Button
                sx={{ backgroundColor: "#55bdca", color: "whtie" }}
                color="inherit"
              >
                Manage Hotels
              </Button>
            </NavLink>
          </Box>
        )}
      </div>
    </Box>
        
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, bgcolor: "#F8C471",height:"66px"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Ecommerce-Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                       
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
               
                {/* <Routes>
                    <Route exact path="/dashboard" element={<Dashboardhome />}>
                      <Route path="addproduct" element={<Addproduct />} />
                    </Route>
                </Routes> */}

               
                    
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;