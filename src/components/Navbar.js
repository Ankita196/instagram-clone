import React from 'react';
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
    color:"black"
  } 
  
}));

export default function Navbar() {
  const classes = useStyles();
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Saved</MenuItem>
        <MenuItem onClick={handleClose}>settings</MenuItem>
        <MenuItem onClick={handleClose}>Switch Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </div>
        </div>
      </div>
     
    </div>
  );
}
