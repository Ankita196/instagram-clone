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
  
}));


export default function Igtv(props) {
  const classes = useStyles();
  const igtv=props.igtv.igtv
  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={2}>
        {igtv.map((item) => (
          <ImageListItem key={item.id} cols={item.cols || 1}>
         <img src={item}   className={classes.image}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
