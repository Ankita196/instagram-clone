import React,{useState} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import TelegramIcon from '@material-ui/icons/Telegram';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AlbumIcon from '@material-ui/icons/Album';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import SettingsIcon from '@material-ui/icons/Settings';
import AutorenewIcon from '@material-ui/icons/Autorenew';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    
    borderTop:"ridge",
    borderBottom:"ridge",
    backgroundColor:"white"
   
   
  },
  title: {
    color: 'black',
    fontSize:25,
    fontFamily:"cursive"
  },
  app: {
    display: 'flex',
    flexDirection: 'row',
    width:1000,
    marginLeft:400,
   
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
  
   
   
  },
  input1:{
display:"flex",
flexDiection:"row",
backgroundColor:"#eeeeee",
height:30,
color:"black",
marginLeft:150,
marginRight:150,
marginTop:10
  },
  link:{
    color:"black",
    textDecoration:"none"
  } 
  
}));

export default function Navbar() {
  const classes = useStyles();
  const [profile, setProfile] = useState([
    {
      id: 1,
     
     username: "its_ankita",
     name:"Ankita Makade",
    img:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
     followers:[
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
      location:"hydrabad",
      profile:
          "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
          posts:
          "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
       
      },
      {
        id: 3,
      
      username: "ankita",
      name:"Ankita Makade",
      location:"Nagpur",
      profile:
          "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      },
      {
        id: 4,
       
      username: "tushar",
      name:"Tushar Dighe",
      location:"Nashik",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
        
      },
      {
        id: 5,
     
      username: "milind",
      name:"Milind Waghmare",
      location:"nagpur",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
         posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
       
      },
      {
        id: 4,
       
      username: "yogesh",
      name:"Yogesh kumar",
      location:"Delhi",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
        
      },
      
      {
        id: 5,
     
      username: "lalit",
      name:"lalit Prajapati",
      location:"nagpur",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      },
      {
        id: 6,
     
      username: "neha",
      name:"Neha Sontake",
      location:"Pune",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      }
    
    ],

     
     following:[
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
      location:"hydrabad",
      profile:
          "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
          posts:
          "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
       
      },
      {
        id: 3,
      
      username: "ankita",
      name:"Ankita Makade",
      location:"Nagpur",
      profile:
          "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      },
      {
        id: 4,
       
      username: "tushar",
      name:"Tushar Dighe",
      location:"Nashik",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
        
      },
      {
        id: 5,
     
      username: "milind",
      name:"Milind Waghmare",
      location:"nagpur",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
         posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
       
      },
      {
        id: 4,
       
      username: "yogesh",
      name:"Yogesh kumar",
      location:"Delhi",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
        
      },
      
      {
        id: 5,
     
      username: "lalit",
      name:"lalit Prajapati",
      location:"nagpur",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      },
      {
        id: 6,
     
      username: "neha",
      name:"Neha Sontake",
      location:"Pune",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      }
    
    ],

     posts: [ "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"] ,
    
   
    igtv:[ "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",]
    }
  ])

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.grow}>
      <div position="static" className={classes.appbar}>
        <div className={classes.app}>
          <div>
            <Typography className={classes.title} variant="h6" noWrap>
              Instagram
            </Typography>
          </div>
      <div className={classes.input1}>
     <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="submit"  aria-label="search">
        <SearchIcon />
      </IconButton>
      </div>
          <div />
          <div >
           <Link to="/" className={classes.link}> <IconButton aria-label="show 4 new mails" color="inherit">
              <HomeIcon />
            </IconButton></Link>
            <Link to="/chat" className={classes.link}><IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                < TelegramIcon />
              </Badge>
            </IconButton></Link>
            <Link to="/explore" className={classes.link}><IconButton  color="inherit">
            <AlbumIcon /> </IconButton>
            <IconButton  color="inherit">
              <FavoriteBorderIcon />
            </IconButton></Link>
           
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            </IconButton>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/profile" className={classes.link}><MenuItem onClick={handleClose}><AccountCircle />Profile</MenuItem></Link>
        <MenuItem onClick={handleClose}><TurnedInNotIcon />Saved</MenuItem>
        <MenuItem onClick={handleClose}>< SettingsIcon />settings</MenuItem>
        <MenuItem onClick={handleClose}><AutorenewIcon />Switch Account</MenuItem>
        
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </div>
        </div>
      </div>
     
    </div>
  );
}
