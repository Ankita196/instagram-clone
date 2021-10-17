import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import GridOnIcon from '@material-ui/icons/GridOn';
import TvOffIcon from '@material-ui/icons/TvOff';
import ContactsIcon from '@material-ui/icons/Contacts';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    width: 800,
    height: 270,
    borderBottom: 'ridge',
    marginLeft: 370,
    marginTop: 10,
  },
  root1: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: 20,
    backgroundColor: '#eeeeee',
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 700,
    backgroundColor: '#eeeeee',
    marginLeft: 450,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    fontSize: 25,

    padding: 20,
  },
  subtitle: {
    fontSize: 15,

    marginLeft: 50,
  },
  subtitle1: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },

  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginTop: 20,
  },
  head1: {
    display: 'flex',
    padding: 30,
  },
  head2: {
    display: 'flex',
    marginLeft: 30,
  },
  head3: {
    marginLeft: 70,
    marginTop: 10,
  },
  head: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    width: 170,
    height: 30,
    marginLeft: 20,
    marginTop: 30,
    color: 'black',
  },
  icon: {
    marginLeft: 20,
    marginTop: 30,
  },
  icon1: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 30,
  },
  imageList: {
    width: 700,
    height: 450,
  },
  image1: {
    width: '100%',
    height: '100%',
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  const profile = props.profile;
  const posts=props.posts

  return (
    <>
      <div className={classes.grow}>
        <div>
          <img src={profile.profile} className={classes.image} />
        </div>
        <div className={classes.head}>
          <div className={classes.head1}>
            <div>
              <Typography className={classes.title} variant="h6" noWrap>
                {profile.username}
              </Typography>{' '}
            </div>{' '}
            <div>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Edit Profile
              </Button>
            </div>{' '}
            <div className={classes.icon}>
              {' '}
              <SettingsIcon />
            </div>
          </div>

          <div className={classes.head2}>
            <div className={classes.subtitle}>
              post
              <br />
              <Typography className={classes.subtitle1} variant="h6" noWrap>
                {posts.length}
              </Typography>
            </div>{' '}
            <div className={classes.subtitle}>
              followers
              <br />
              <Typography className={classes.subtitle1} variant="h6" noWrap>
                {profile.followers.length}{' '}
              </Typography>
            </div>{' '}
            <div className={classes.subtitle}>
              following
              <br />
              <Typography className={classes.subtitle1} variant="h6" noWrap>
                {profile.following.length}{' '}
              </Typography>
            </div>
          </div>
          <div className={classes.head3}>
            {' '}
            <Typography className={classes.subtitle1} variant="h6" noWrap>
              {profile.name}
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.root2}>
       <Link to="/myposts"> <div>
          POSTS <GridOnIcon className={classes.icon1} />
        </div></Link>
        <div>
         <Link to="/igtv"> IGTV</Link>
          <TvOffIcon className={classes.icon1} />
        </div>
        <div>
          SAVED <TurnedInNotIcon className={classes.icon1} />
        </div>
        <div>
          TAGS
          <ContactsIcon className={classes.icon1} />
        </div>
      </div>
    
    </>
  );
}
