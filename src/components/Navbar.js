import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



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
 
  
}));

export default function Navbar() {
  const classes = useStyles();

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
            <IconButton aria-label="show 4 new mails" color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <SendIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </div>
      </div>
     
    </div>
  );
}
