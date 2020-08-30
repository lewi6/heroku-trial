import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button} from '@material-ui/core/'


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  media: {
    height: 140,
    // height: 0,
    paddingTop: '25.25%', // 16:9,
    // marginTop:'50'
  },
  
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedComponent(props) {
  const classes = useStyles();
  const { featured } = props;

  return (
    <Grid
      item
      md={6}
      xs={12}
    >
      <CardActionArea
        component="a"
        href="#"
      >
        <CardMedia
          className={classes.media}
          image={featured.image}
          title={featured.imageTitle}
        />
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography
                component="h2"
                variant="h5"
              >
                {featured.title}
              </Typography>
              {/* <Typography
                color="textSecondary"
                variant="subtitle1"
              >
                {featured.date}
              </Typography> */}
              <Typography
                paragraph
                variant="subtitle1"
              >
                {featured.description}
              </Typography>
              <Button
                color="primary"
                href={featured.to}
                variant="subtitle1"
              >
                {featured.text}
              </Button>
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={featured.image}
              title={featured.imageTitle}
            />
          </Hidden> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedComponent.propTypes = {
  featured: PropTypes.object,
};