import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

import Link from '@material-ui/core/Link';
import {
  Grid,
  Typography,
  Container,
  Button
} from '@material-ui/core';
import {post,benefits} from '../../dummy/data'
import FeaturedComponent from '../../components/Gains'



const useStyles = makeStyles(theme => ({
  root: {},
  root2: {
    maxWidth: 345,
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  featuredP: {
    position: 'relative',
   
    marginBottom: theme.spacing(4),
    padding:theme.spacing(4)
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    paddingTop:"100px",
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12),
      paddingRight: 0,
    },
  },
  heroContent: {
    position: 'relative',
   
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12),
      paddingRight: 0,
    },
  },
  media: {
    // height: 140,
    height: 0,
    paddingTop: '75.25%', // 16:9,
    marginTop:'50'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

const ClubComponent = props => {
  let { className, ...rest } = props;

  
 
  const classes = useStyles();
 
 

  

  

  return (
    <>
      <div
        {...rest}
        className={clsx(classes.root, className)}
      />
     
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {/* Increase the priority of the hero background image */}
        {<img
          alt={post.imageText}
          src={post.image}
          style={{ display: 'none' }}
        />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid
            item
            md={6}
          >
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                color="inherit"
                component="h1"
                gutterBottom
                variant="h3"
              >
                {post.title}
              </Typography>
              <Typography
                color="inherit"
                paragraph
                variant="h5"
              >
                {post.description}
              </Typography>
              <Link
                href="#"
                variant="subtitle1"
              >
                {post.linkText}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            align="center"
            color="textPrimary"
            component="h1"
            gutterBottom
            variant="h2"
          >
              About Club 
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            paragraph
            variant="h5"
          >
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid
              container
              justify="center"
              spacing={2}
            >
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                >
                    Join The Club
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                >
                    Club website
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Paper>
      <Paper
        className={classes.featuredP}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
          >
            {benefits.map((benefit) => (
              <FeaturedComponent
                featured={benefit}
                key={benefit.title}
              />
            ))}
          </Grid>

          
        </Container>
      </Paper>

      
    </>
  );
};

ClubComponent.propTypes = {
  className: PropTypes.string,
  events: PropTypes.array.isRequired,
};

export default ClubComponent;