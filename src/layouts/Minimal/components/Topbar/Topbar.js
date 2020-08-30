import React,{ useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import { AppBar, Toolbar ,Button, IconButton, Drawer} from '@material-ui/core';
import {Menu} from '@material-ui/icons'
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

  // console.log(isMobile);
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
              <Menu />  
            </IconButton>
            <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/logo.png"
            />
            </RouterLink>
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
