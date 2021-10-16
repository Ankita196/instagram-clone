import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  
  },
  imageList: {
    width: 300,
    height: 650,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  imageList1: {
    width: 600,
    height: 550,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  chat:{
display:"flex",
marginLeft:350,
marginTop:30
  }

}));



export default function AdvancedImageList() {
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
  return (<div>
    <div>
<div className={}>
  </div>
  <div>

  </div>
</div>
    <div className={classes.chat}>
    <div className={classes.root}>
      <ImageList rowHeight={200} rowWidth={100} gap={1} className={classes.imageList}>
        {post.map((item) => (
          <h1></h1>
        ))}
      </ImageList>
    </div>
    <div className={classes.root}>
      <ImageList rowHeight={200} rowWidth={100} gap={1} className={classes.imageList1}>
        {post.map((item) => (
          <h1></h1>
        ))}
      </ImageList>
    </div>

    </div>
    </div>
  );
}
