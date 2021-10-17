import React, {useState} from "react";
import "./style.css";
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import Posts from "./components/Posts"
import Explore from "./components/explore"
import Chat from "./components/Chat"
import Profile from "./components/Profile"
import Igtv from "./components/igtv"
import Myposts from "./components/myposts"
import Upload from "./components/Uploadpost"

import {BrowserRouter,Switch,Route} from "react-router-dom"

export default function App() {
  const [profile, setProfile] = useState([
    {
      id: 1,
     
     username: "its_ankita",
     name:"Ankita Makade",
    profile:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
     followers:[
      {
        id: 1,
       
      username: "sapana",
      location:"nagpur",
      profile:
          "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
        posts:"https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
        story:"https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg"
  
      
      },
      {
        id: 2,
     
      username: "raghvendra",
      location:"hydrabad",
      profile:
          "https://a10.gaanacdn.com/gn_img/albums/kGxbnw0Ky4/Gxbn8dG03y/size_xxl.jpg",
          posts:
          "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
       story:"https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b"
      },
      {
        id: 3,
      
      username: "ankita",
      name:"Ankita Makade",
      location:"Nagpur",
      profile:
          "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
      story:"https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg"
      },
      {
        id: 4,
       
      username: "tushar",
      name:"Tushar Dighe",
      location:"Nashik",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg",
          story:"https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b"
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
          story:"https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b"
      },
      {
        id: 6,
       
      username: "yogesh",
      name:"Yogesh kumar",
      location:"Delhi",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          story:"https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b"
      },
      
      {
        id: 7,
     
      username: "lalit",
      name:"lalit Prajapati",
      location:"nagpur",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          story:"https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b"
      },
      {
        id: 8,
     
      username: "neha",
      name:"Neha Sontake",
      location:"Pune",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          story:"https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b"
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
        id: 6,
       
      username: "yogesh",
      name:"Yogesh kumar",
      location:"Delhi",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
        
      },
      
      {
        id: 7,
     
      username: "lalit",
      name:"lalit Prajapati",
      location:"nagpur",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      },
      {
        id: 8,
     
      username: "neha",
      name:"Neha Sontake",
      location:"Pune",
      profile:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
          posts:
          "https://images.hungama.com/c/1/9e3/fdd/53988130/53988130_300x300.jpg",
      }
    
    ],

     
    
   
    igtv:[ "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg", "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"]
    }
  ])
  const [posts,setPosts]=useState([{post: "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"},{post: "https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"}, {post:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"}, {post:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"}, {post:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"}, {post:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"}, {post:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"}, {post:"https://m.media-amazon.com/images/I/81hQLmFiFNL._SS500_.jpg"}])
  return (
    <div class="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/home" ><Story stories={profile[0].followers}/><Posts posts={profile[0].followers}/></Route>
     

      
     
      <Route exact path="/chat"><Chat posts={profile[0].followers}/></Route>
      
     <Route exact path="/Explore"><Explore posts={profile[0].followers}/></Route>
     <Route exact path="/igtv"><Profile profile={profile[0]} /><Igtv igtv={profile[0]}/></Route>
     <Route exact path="/profile/myposts"><Profile profile={profile[0]} posts={posts}/><Myposts posts={posts} setPosts={setPosts}/></Route>
    
     <Route exact path="/upload"><Upload posts={posts}  setPosts={setPosts}/></Route>
    
     
     </Switch>
      </BrowserRouter>
    </div>
  );
}
