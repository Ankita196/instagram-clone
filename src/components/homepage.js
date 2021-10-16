import React from "react";

import Story from "./Story"
import Posts from "./Posts"
import {useLocation} from "react-router-dom"


export default function Home() {
  const {state}=useLocation()
  const stories=state.profile[0].followers
  return (
    <div >
      
    
     <Story stories={stories}/>
     <Posts />
    
     
    
    </div>
  );
}
