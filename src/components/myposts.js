import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  imageList: {
    width: 700,
    height: 650,
   
  },
  image:{
    width:"100%",
    height:"100%"
  },
  button:{
    marginLeft:900,
    width:200,
    height:30
  }
  
}));


export default function Myposts(props) {
  const classes = useStyles();
  const posts=props.posts.posts
  return (
    <>
    <button className={classes.button}>upload</button> 
    <div className={classes.root}>
  
      <ImageList rowHeight={160} className={classes.imageList} cols={2}>
        {posts.map((item) => (
          <ImageListItem key={item.id} cols={item.cols || 1}>
           <img src={item}   className={classes.image}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </>
  );
}
