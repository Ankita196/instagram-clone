import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop:20
  },
  imageList: {
    width: 900,
    height: 450,
  },
  image:{
    width:"100%",
    height:"100%"
  }
}));


export default function Explore() {
  const classes = useStyles();
  const [story, setStories] = useState([
    {
      id: 1,
     
     title: "sapana",
      img:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
    
    },
    {
      id: 2,
   
     title: "raghvendra",
      img:
        "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
     
    },
    {
      id: 3,
    
     title: "ankita",
      img:
        "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
     
    },
    {
      id: 4,
     
     title: "tushar",
      img:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      
    },
    {
      id: 5,
   
     title: "milind",
      img:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
     
    },
    {
      id: 6,
     
     title: "yogesh",
      img:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      
    },
    
    {
      id: 7,
   
     title: "bholesh",
      img:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
     
    },
    {
      id: 9,
   
     title: "Hits Of Atif",
      img:
        "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
     
    }
  
  ])
  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {story.map((item) => (
          <ImageListItem key={item.id} cols={item.cols || 1}>
            <img src={item.img} alt={item.title}  className={classes.image}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
