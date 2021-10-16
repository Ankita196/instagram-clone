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

  return (
    <div className={classes.grow}>
      
     
    </div>
  );
}
