import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import {Link} from "react-router-dom"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  
}));


export default function Myposts(props) {
  const classes = useStyles();
  const posts=props.posts.posts
const [post,setPost]=useState("")

  const onSelectFile = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files.length > 0) {
        setPost(URL.createObjectURL(e.target.files[0]));
      }
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();
    setPost([
      ...posts,

      {
        id: new Date().getTime().toString(),
       
        post: albumCover,
      },
    ]);
   
    setPost("");
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <div>
    <button className={classes.button} onClick={handleOpen}>upload</button> <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal></div>
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
