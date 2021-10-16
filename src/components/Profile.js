import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    width:800,
    height:270,

    marginLeft:370,
    marginTop:10,
   
   
   
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
  fontSize:25,
  
  padding:20
  },
 subtitle:{
  fontSize:15,
 
 marginLeft:50
 
 },
 subtitle1:{
  fontSize:15,
  marginLeft:10,
  fontWeight:"bold",
 
 },
 
  image:{
    width:170,
    height:170,
    borderRadius:100,
    marginTop:20,
   

  },
  head1:{
    display:"flex",
    padding:30
  },
  head2:{
    display:"flex",
    marginLeft:30
  
  },
  head3:{
    marginLeft:70,
    marginTop:10
  },
  head:{
    display:'flex',
    flexDirection:"column"
  },
  button:{
    width:170,
    height:30,
    marginLeft:20,
    marginTop:30,
    color:"black"
  },
  icon:{
    marginLeft:20,
    marginTop:30
  }
  
}));



export default function Story() {
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

  return (
    <div className={classes.grow}>
      <div>
        <img src={profile[0].img} className={classes.image}/>
      </div>
      <div className={classes.head}>
      <div className={classes.head1}>
      <div>
      <Typography className={classes.title} variant="h6" noWrap>
            {profile[0].username}
            </Typography> </div>  <div><Button variant="outlined" color="primary" className={classes.button}>
 Edit Profile
</Button></div>  <div className={classes.icon}> < SettingsIcon/></div>
      </div>
    
      <div className={classes.head2}>
      <div className={classes.subtitle} >post<br/><Typography className={classes.subtitle1} variant="h6" noWrap>{profile[0].posts.length}</Typography></div>  <div className={classes.subtitle}>followers<br/><Typography className={classes.subtitle1} variant="h6" noWrap>{ profile[0].followers.length} </Typography></div>  <div className={classes.subtitle}>following<br/><Typography className={classes.subtitle1} variant="h6" noWrap>{profile[0].following.length}  </Typography></div>
      </div>
      <div className={classes.head3}> <Typography className={classes.subtitle1} variant="h6" noWrap>
            {profile[0].name}
            </Typography></div></div>
    </div>
  );
}
