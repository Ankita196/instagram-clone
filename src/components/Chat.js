import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme) => ({
  root: {
    border:"ridge",
   width:300,
    marginTop:20,
    backgroundColor:"#eeeeee",
    marginLeft:300,
    backgroundColor:"white"
  },
  imageList: {
    width: 300,
    height: 550,
   
  },
  image:{
    width:"100%",
    height:"100%"
  },
  avtar:{
    display:"flex",
    flexDirection:"column",
    marginLeft:20,
    marginTop:10
  },
  header:{
    display:"flex",
    flexDirection:"row" ,
    padding:10

  },
  username:{
    margin:20
  },
  username1:{
    marginLeft:60,
    marginTop:10,
    
  },
  root1:{
    border:"ridge",
    width:600,
     marginTop:20,
     backgroundColor:"#eeeeee",
  
     backgroundColor:"white"
  },
  root2:{
    borderBottom:"ridge",
    height:40 ,
    display:"flex"

  },
  icon:{
    marginTop:10,
    marginLeft:50
  }
}));


export default function Chat(props) {
  const classes = useStyles();
 const data=props.posts
  return (
    <div className={classes.header}> 
    <div className={classes.root}>
     
     <div  className={classes.root2}><Typography className={classes.username1} >Ankita Makade</Typography>
 < EditIcon className={classes.icon}/></div>
        {data.map((item) => (
          
           <div className={classes.header}>

       <div className={classes.avtar}>
          <Avatar src={item.profile} />
         </div>
<div>
<Typography className={classes.username} >{item.username}</Typography>

</div>

</div>
        
        ))}
     
    </div>
     <div className={classes.root1}>
    
<TelegramIcon className={classes.icon1} /> 

  
 </div>
 </div>

  );
}
