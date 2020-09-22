import React,{ useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import { AppBar, Toolbar ,Button, IconButton, Drawer, Menu} from '@material-ui/core';
import { AccountCircle} from '@material-ui/icons'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const[open, setOpen] = useState(false)
  const handleDrawer = () => {
    setOpen(true)
  }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  // menu things
  const [auth, setAuth] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const topen = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
  
    
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color='secondary'
      position="fixed"
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton style={{paddingLeft:"0px"}} onClick={handleDrawer} color="inherit" edge="static" arial-label="menu">
              <MenuIcon />  
            </IconButton>
            <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/logo.png"
            />
            </RouterLink>
            <IconButton style={{paddingLeft:"10px",fontSize:"large"}} color="inherit" edge="static" aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}>
              <AccountCircle />  
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                topen={topen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
          </>
        ) : (
          <>
            <RouterLink to="/">
              <img
                alt="Logo"
                src="/images/logo.png"
              />
            </RouterLink>
            <Button
            className="nav-join-button"
            href="/clubs"
            style={{color:"white"}}
            >
                  Clubs
            </Button>
            <Button
              className="nav-join-button"
              style={{color:"white"}}
              href="/events"
            >
                  Events
            </Button>
            <Button
              className="nav-join-button"
              style={{color:"white"}}
              href="/contact"
            >
                  Contact us
            </Button>
            
            <Typography type="title" color="inherit" style={{flex: 1 }}>
              
            </Typography>
            <div>
              <Button raised color="accent" style={{color:"white"}} href="/sign-in">
              
                Login
              </Button>
            </div>
        </>       
          )
        }
        
      </Toolbar>
        
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        style={{BackgroundColor:"primary"}}

      >
        <div style={{height:"100%", paddingTop:'5px' ,paddingLeft:"23px",paddingRight:"23px"}}>
          <RouterLink to="/">
            <img

              alt="Logo"
              src="/images/logo.png"
            />
          </RouterLink>
     
          <Button
          className="nav-join-button"
          href="/clubs"
          style={{display:"block"}}
          color='primary'
          >
                    Clubs
          </Button>
          <Button
            className="nav-join-button"
            style={{display:"block"}}
            href="/events"
            color='primary'
          >
                    Events
          </Button>
          <Button
            className="nav-join-button"
            href="/contact"
            style={{display:"block"}}
            color='primary'
          >
                    Contact us
          </Button>
        </div>
      </Drawer>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
