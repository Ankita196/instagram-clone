import React, { useState } from 'react';
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

import TelegramIcon from '@material-ui/icons/Telegram';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: 600,
    height: 900,
    border: 'ridge',
    marginLeft: 470,
    marginTop: 10,
    backgroundColor: 'white',
  },
  username: {
    fontSize: 14,
    fontweight: 'bold',
    color: 'black',
  },
  username1: {
    fontSize: 12,
    fontweight: 'bold',
    color: 'black',
  },

  avtar: {
    marginLeft: 20,
    marginTop: 10,
  },
  icon: {
    marginLeft: 410,
    marginTop: 20,
  },
  header: {
    display: 'flex',
    borderBottom: 'ridge',
    height: 60,
    width: 600,
  },
  image: {
    display: 'flex',
    borderBottom: 'ridge',
    height: 600,
  },
  icon1: {
    display: 'flex',
    marginTop: 10,
  },
  icons: {
    fontSize: 40,
    marginLeft: 10,
    color: '#424242',
  },
  icons3: {
    fontSize: 40,
    marginTop: 10,
    marginLeft: 10,
    color: '#424242',
  },
  icons1: {
    fontSize: 40,
    marginLeft: 370,
    color: '#424242',
  },
  icons2: {
    color: 'red',
    fontSize: 40,
    marginLeft: 10,
  },
  text:{
    height:30,
  
  },
  comment:{
    marginLeft:30,
    marginTop:20,
    
    
    fontSize:15
  },
  see:{
    color:"blue"
  }
}));



export default function Posts(props) {
  const classes = useStyles();
  const post = props.posts;
  const [comments,setComments]=useState([{id:1,comment:'nice awesome'}])
  const [comment,setComment]=useState(""),
  const [show,setShow]=useState(false)

const [like,setLike]=useState(10)
const liked= ()=>{
  if(like>10){
  setLike(like-1)
  }else{
    setLike(like+1)
  }
}
const dislike= ()=>{
  setLike(like-1)
}


const onsubmit = (e) => {
  e.preventDefault();
  setComments([
    ...comments,

    {
      id: new Date().getTime().toString(),
     comment:comment,
     
    },
  ]);
  setComment("");
  
};

  return (
    <>
      {post.map((data) => (
        <>
          <div className={classes.grow} key={post.id}>
            <div className={classes.header}>
            <div className={classes.avtar}>
                <Avatar src={data.profile} />
              </div>
           <div className={classes.avtar}>
                <Typography className={classes.username}>
                  {data.username}
                </Typography>
                <Typography className={classes.username1}>
                  {data.location}
                </Typography>
              </div>
              <div className={classes.icon}>
                <MoreHorizIcon />
              </div>
            </div>

            <div className={classes.image}>
              <img src={data.posts} className={classes.image} />
            </div>
            <div className={classes.icon1}>
              <div className={classes.icons}>
                {' '}
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder className={classes.icons} />}
                      checkedIcon={<Favorite className={classes.icons2}  />}
                    onClick={liked}/>
                  }
                />{' '}
              </div>{' '}
              <div>
                <ChatBubbleOutlineIcon className={classes.icons3} />
              </div>{' '}
              <div>
                <TelegramIcon className={classes.icons3} />
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<TurnedInNotIcon className={classes.icons1} />}
                    checkedIcon={<BookmarkIcon className={classes.icons1} />}
                  />
                }
              />
            
            </div>
            <div className={classes.comment}>
            <div>Total likes{like}</div>
            <div>{comments[comments.length-1].comment}</div>
           
           {
             show?comments.map((item)=>(
               <div>{item.comment}</div>
             )) :null
           }
           <div onClick={()=>setShow(!show)} className={classes.see}>see all</div>
            <div> <form onSubmit={(e) => {
          onsubmit(e);
        }} > Post Comments <input
         
          placeholder="comment"
         className={classes.text}
          variant="outlined"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        /><Button  type="submit" variant="outlined" color="secondary"><TelegramIcon/></Button></form>
        </div>
        </div>
          </div>
        </>
      ))}
    </>
  );
}
