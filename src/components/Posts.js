import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import TelegramIcon from '@material-ui/icons/Telegram';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width:600,
    height:900,
    border:"ridge",
    marginLeft:470,
    marginTop:10,
    backgroundColor:"white"
   
   
  },
  username:{
   fontSize:14,
   fontweight:"bold" ,
   color:"black",
  
  },
  username1:{
    fontSize:12,
    fontweight:"bold" ,
    color:"black",
   
   },
  
  avtar:{
    marginLeft:20,
    marginTop:10
  },
 icon:{
    marginLeft:410,
    marginTop:20
  },
  header:{
    display:"flex",
    borderBottom:"ridge",
    height:60,
    width:600
  },
 image:{
    display:"flex",
    borderBottom:"ridge",
    height:600,
   
  },
  icon1:{
   display:'flex',
   marginTop:10
  },
  icons:{
    fontSize:40,
    marginLeft:10,
   color:"#424242"
  },
  icons3:{
    fontSize:40,
    marginTop:10,
    marginLeft:10,
   color:"#424242"
  },
  icons1:{
    fontSize:40,
    marginLeft:370,
    color:"#424242"
  },
  icons2:{
    color:'red',
    fontSize:40,
    marginLeft:10,
  }
 
 
  
}));



export default function Posts() {
  const classes = useStyles();
  const [post, setPosts] = useState([
    {
      id: 1,
     
    username: "sapana",
    location:"nagpur",
    profile:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      posts:"https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg"

    
    },
    {
      id: 2,
   
    username: "raghvendra",
    location:"nagpur",
    profile:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
        posts:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
     
    },
    {
      id: 3,
    
    username: "ankita",
    location:"nagpur",
    profile:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
    posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
    },
    {
      id: 4,
     
    username: "tushar",
    location:"nagpur",
    profile:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
        posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      
    },
    {
      id: 5,
   
    username: "milind",
    location:"nagpur",
    profile:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
       posts:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
     
    },
    {
      id: 4,
     
    username: "yogesh",
    location:"nagpur",
    profile:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
        posts:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      
    },
    
    {
      id: 5,
   
    username: "lalit",
    location:"nagpur",
    profile:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
        posts:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
    },
    {
      id: 6,
   
    username: "neha",
    location:"nagpur",
    profile:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
        posts:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
    }
  
  ])

  return (
    <>
  

    {
          post.map((data) =>
          <>
            <div className={classes.grow}>
          <div className={classes.header}>

      <div className={classes.avtar}>
      <Avatar src={data.profile} />
</div>
<div className={classes.avtar}>
      <Typography className={classes.username} >{data.username}</Typography>
      <Typography className={classes.username1} >{data.location}</Typography>
    
      </div>
      <div className={classes.icon}>
      <MoreHorizIcon />
      </div>
</div>


<div className={classes.image}
>
<img src={data.posts} className={classes.image} />
  </div>
  <div className={classes.icon1}>
    <div className={classes.icons}> <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder className={classes.icons} />} checkedIcon={<Favorite className={classes.icons2} />} />}
        
      /> </div> <div><ChatBubbleOutlineIcon  className={classes.icons3} /></div> <div><TelegramIcon className={classes.icons3} />
    </div>
    <FormControlLabel
        control={<Checkbox icon={<TurnedInNotIcon className={classes.icons1} />} checkedIcon={<BookmarkIcon className={classes.icons1} />}  />}
        
      /> 
  
  <div 
>
    </div>
 
  

  </div>
  </div>
      </>     )}
      
    
   
    </>
  );
}
