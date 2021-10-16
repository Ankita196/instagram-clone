import React from "react";
import "./style.css";
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import Posts from "./components/Posts"
import Chat from "./components/Chat.js"

export default function App() {
  return (
    <div class="App">
      <Navbar />
      <Chat />
      {/* <Story />
      <Posts/> */}
    </div>
  );
}
