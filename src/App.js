import React from "react";
import "./style.css";
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import Posts from "./components/Posts"
import Explore from "./components/explore"

export default function App() {
  return (
    <div class="App">
      <Navbar />
      <Explore />
      {/* <Story />
      <Posts/> */}
    </div>
  );
}
