// import {useState,useRef } from "react";
// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Myposts from "./myposts"


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding:90,
//     display:'flex',
//     flexDirection:"column"
//   },
//   paper: {
//     height:430,
//     width:370,
//     backgroundColor:"#eeeeee",
//    padding:40,
//   display:"block",
//   marginLeft:"auto",
//   marginRight:"auto"
//   },
 
//   heading :{
//     color:'white',
//      display:"block",
//   marginLeft:"auto",
//   marginRight:"auto",
//    fontSize:30,
//     fontWeight:"bold"

//   },
//   subheading:{
//     color:'#002884',
//     marginLeft:15,
//     fontSize:20
//   },
//   input:{
//     backgroundColor:"white"
//   },
//   album :{
//     color:"pink",
//     fontSize:40
//   },
//   image:{
//     height:100,
//     width:100},
//   div1 :{
//     display:"flex",
//     flexDirection:"row"
//   } ,
//   upload :{
//      display:"flex"
//   } ,
//   link:{
//     textDecoration:"none",
//     color:"white"
//   }

// }));


// export default function AddAlbum(props) {
//  const classes = useStyles();

//    const fileInputRef = useRef();
//   const {posts, setPosts } = props;
 
//   const [post, setPost] = useState("");

//   const handleChange = (e) =>{
//     setPosts([...posts, URL.createObjectURL(e.target.files[0])]);
// }


 
//   return (
    
//      <>
//       <>
//       <div>
//         <form >
//         <h1 style={{color:'white',marginRight:200}}>Add Albums</h1>
//            <input
//            margin="normal"
//          type="file" onChange={handleChange} />
//           </form>
//           </div>
//        <div >
//     <br/><br/>

//      <br/>
    
      

   
//     </div>
//    </>
//    </>
//   );
// }
