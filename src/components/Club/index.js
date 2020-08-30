import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from '@material-ui/core/'
import Hidden from '@material-ui/core/Hidden';

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

export default function ClubComponent(props) {
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
        href={'/event/'+featured.id}
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography
                component="h2"
                variant="h5"
              >
                {featured.title}
              </Typography>
              
              <Typography
                paragraph
                variant="subtitle1"
              >
                {featured.bio}
              </Typography>
              <Link
                href={'/club/'+featured.id}
                variant="subtitle1"
              >
                Read more..
              </Link>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={featured.avatar}
              title={featured.title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ClubComponent.propTypes = {
  featured: PropTypes.object,
};