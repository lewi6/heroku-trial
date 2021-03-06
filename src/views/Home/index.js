/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import Link from '@material-ui/core/Link';
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
  Container,
  Collapse,
  TextField,
  Toolbar,
} from '@material-ui/core';
import {events,clubs,post,featured} from '../../dummy/data'
import FeaturedComponent from '../../components/Featured'
import ClubsViewComponent from '../../components/Club'
import EventViewCompoment from '../../components/Event'


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
    // marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  featuredP: {
    position: 'relative',
    // backgroundColor: theme.palette.common.default,
    // color: theme.palette.common.white,
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

const HomeComponent = props => {
  let { className, ...rest } = props;

  
  const [rowsPerPage, setRowsPerPage] = useState(100);
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
            <div className={classes.mainFeaturedPostContent} >
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
      
      <Paper
        className={classes.featuredP}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
          >
            {featured.map((feature) => (
              <FeaturedComponent
                featured={feature}
                key={post.title}
              />
            ))}
          </Grid>

          
        </Container>
      </Paper>

      <div
        className={classes.featuredP}
      >
        <Typography
          align="center"
          color="textPrimary"
          component="h1"
          gutterBottom
          variant="h1"
        >
              Communities to Join
        </Typography>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
          >
            {clubs.slice(0, 4).map((club) => (
              <ClubsViewComponent
                featured={club}
                key={club._id}
              />
            ))}
          </Grid>

          
        </Container>
        <Button
          align="center"
          color="textPrimary"
          href="/clubs"
          variant="h1"
        >
              View All Comunities..
        </Button>
      </div>
      <Paper
        className={classes.featuredP}
      >
        <Typography
          align="center"
          color="textPrimary"
          component="h1"
          gutterBottom
          variant="h1"
        >
              Upcomming Events
        </Typography>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
          >
            {events.slice(0, 6).map((event) => (
              <EventViewCompoment
                event={event}
                key={post.title}
              />
            ))}
          </Grid>
        </Container>
        <Button
          align="center"
          color="textPrimary"
          href="/events"
          variant="h1"
        >
              View All Events..
        </Button>
      </Paper>
      
      
    </>
  );
};

HomeComponent.propTypes = {
  className: PropTypes.string,
  events: PropTypes.array.isRequired,
};

export default HomeComponent;