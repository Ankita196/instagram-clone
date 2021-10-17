import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Link } from 'react-router-dom';
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
    marginTop: 20,
    backgroundColor: '#eeeeee',
  },
  imageList: {
    width: 700,
    height: 650,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    marginLeft: 900,
    width: 200,
    height: 30,
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

export default function Upload(props) {
  const classes = useStyles();
 const { posts,setPosts }=props
 
  const [post, setPost] = useState('');

  const fileInputRef = useRef();

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
    setPosts([
      ...posts,

      {
        id: new Date().getTime().toString(),

        post: post,
      },
    ]);

    setPost('');
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
        <button className={classes.button} onClick={handleOpen}>
          upload
        </button>{' '}
        <form
                onSubmit={(e) => {
                  onsubmit(e);
                }}
              >
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
         
          
        >
        
            <div className={classes.paper}>
             
                {' '}
                <div>
                  <input
                    margin="normal"
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      onSelectFile(e);
                    }}
                    required
                  />
                </div>
                <button variant="contained" color="primary" type="submit">
                  {' '}
                  Submit
                </button>
              
            </div>
         
        </Modal>
        </form>
      </div>
      <div className={classes.root}>
        <ImageList rowHeight={160} className={classes.imageList} cols={2}>
          {posts.map((item) => (
            <ImageListItem key={item.id} cols={item.cols || 1}>
              <img src={item.post} className={classes.image} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}
