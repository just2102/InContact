import { useState } from "react";
import './index.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";
function App() {

  return (
    <div className="app-wrapper">
      <Header></Header>
      <Nav></Nav>
      <Profile></Profile>
    </div>
  );
}




export default App;

