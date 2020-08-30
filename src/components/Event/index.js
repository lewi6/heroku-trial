import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


import {CardActions,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Card,
  Grid,
  Button,} from '@material-ui/core/'


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  media: {
    height: 140,
    paddingTop: '25.25%', // 16:9,
    
  },
  
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function EventComponent(props) {
  const classes = useStyles();
  const { event } = props;

  return (
    <Grid
      item
      key={event._id}
      md={4}
      sm={6}
      xs={12}
    >
      <Card className={classes.root2}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={event.avatar}
            title={event.title}
          />
          <CardContent>
            <Typography
              component="h2"
              gutterBottom
              variant="h5"
            >
              {event.title} 
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              variant="body2"
            >
              {event.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions disableSpacing>
          <Button
            color="primary"
            href={'/event/'+event.id}
            size="small"
          >
          View Details
          </Button>
        
        
        </CardActions>
      
      </Card>
    </Grid>
  );
}

EventComponent.propTypes = {
  event: PropTypes.object,
};