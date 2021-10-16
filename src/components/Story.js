import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    width:600,
    height:120,
    border:"ridge",
    marginLeft:470,
    marginTop:10,
    backgroundColor:"white"
   
   
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
   
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
  fontSize:15,
  marginLeft:20
  },
 
  image:{
    width:60,
    height:60,
    borderRadius:50,
    marginTop:20,
    border:"solid",
    borderColor:"#c51162"

  }
  
}));



export default function Story() {
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
    <div className={classes.grow}>
      
      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={6.5}>
        {story.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title}  className={classes.image}/>
            <Typography className={classes.title} variant="h6" noWrap>
            {item.title}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}
