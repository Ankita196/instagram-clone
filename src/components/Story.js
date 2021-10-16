import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import {useLocation } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    width:600,
    height:120,
    border:"ridge",
    marginLeft:470,
    marginTop:10,
    backgroundColor:"white"
   
   
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
  fontSize:15,
  marginLeft:20
  },
 
  image:{
    width:60,
    height:60,
    borderRadius:50,
    marginTop:20,
    border:"solid",
    borderColor:"#c51162"

  }
  
}));



export default function Story(props) {
  const classes = useStyles();
  

 
  const { state } = useLocation();
 const stories=props.stories
  return (
    <div className={classes.grow}>
      
      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={6.5}>
        {stories.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.story} alt={item.id}  className={classes.image}/>
            <Typography className={classes.title} variant="h6" noWrap>
            {item.username}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}
