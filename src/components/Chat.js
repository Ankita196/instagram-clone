import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    border:"ridge",
   width:300,
    marginTop:20,
    backgroundColor:"#eeeeee",
    marginLeft:300,
    backgroundColor:"white"
  },
  imageList: {
    width: 300,
    height: 550,
   
  },
  image:{
    width:"100%",
    height:"100%"
  },
  avtar:{
    display:"flex",
    flexDirection:"column",
    marginLeft:20,
    marginTop:10
  },
  header:{
    display:"flex",
    flexDirection:"row" ,
    padding:10

  },
  username:{
    margin:20
  },
  username1:{
    marginLeft:60,
    marginTop:10,
    
  },
  root1:{
    border:"ridge",
    width:600,
     marginTop:20,
     backgroundColor:"#eeeeee",
  
     backgroundColor:"white"
  },
  root2:{
    borderBottom:"ridge",
    height:40 ,
    display:"flex"

  },
  icon:{
    marginTop:10,
    marginLeft:50
  }
}));


export default function Explore() {
  const classes = useStyles();
  const [data, setStories] = useState([
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
    <div className={classes.header}> 
    <div className={classes.root}>
     
     <div  className={classes.root2}><Typography className={classes.username1} >Ankita Makade</Typography>
 < EditIcon className={classes.icon}/></div>
        {data.map((item) => (
          
           <div className={classes.header}>

       <div className={classes.avtar}>
          <Avatar src={item.img} />
         </div>
<div>
<Typography className={classes.username} >{item.title}</Typography>

</div>

</div>
        
        ))}
     
    </div>
     <div className={classes.root1}>
    


  
 </div>
 </div>

  );
}
