import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography
      align="center"
      color="textSecondary"
      variant="body2"
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://bit.ly/dscauca"
      >
        AUCA DSC Member
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    // borderTop: `1px solid ${theme.palette.divider}`,
    // marginTop: theme.spacing(0),
    // marginBottom: theme.spacing(0),,
    backgroundColor: '#0B1327',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
}));

const footers = [
  {
    title: 'US',
    description: [
      { name: 'About Us', href: '/about#whoWeAre' },
      { name: 'Our Partners', href: '/welcome#parterners' },
      { name: 'Our Values', href: '/about#value' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    title: 'Community',
    description: [
      {
        name: 'Developer student club',
        href: '/club/sdsddsds',
      },
      { name: 'AUCASA', href: '/clubs' },
      {
        name: 'Club Three',
        href: '/clubs',
      },
    ],
  }
];

const Footer = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={classes.footer}
    >
      <Container
        className={classes.footer}
        component="footer"
        maxWidth="md"
      >
        <Grid
          container
          justify="space-evenly"
          spacing={4}
        >
          {footers.map(footer => (
            <Grid
              item
              key={footer.title}
              sm={6}
              xs={6}
            >
              <Typography
                color="Primary"
                gutterBottom
                variant="h6"
              >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item.name}>
                    <Link
                      color="textSecondary"
                      href={item.href}
                      variant="subtitle1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
