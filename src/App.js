import React from "react";
import "./style.css";
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import Posts from "./components/Posts"
import Explore from "./components/explore"
import Chat from "./components/Chat"
import {BrowserRouter,Switch,Route} from "react-router-dom"

export default function App() {
  return (
    <div class="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/chat"><Chat /></Route>
      <Route exact path="/"> <Story/> <Posts/> </Route>
     <Route exact path="/Explore"><Explore /></Route>
     <Story />
    
     
     </Switch>
      </BrowserRouter>
    </div>
  );
}
