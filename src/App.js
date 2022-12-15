import { useState } from "react";
import './index.css';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News"
import Messenger from "./Components/Messenger/Messenger";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


function App() {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header></Header>
      <Nav></Nav>
      <div className="app-wrapper-content">
      <Routes>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/news" element={<News/>}/>
      <Route path="/messenger" element={<Messenger/>}/>
      <Route path="/friends" element={<Friends/>}/>
      <Route path="/music" element={<Music/>}/>
      <Route path="/settings" element={<Settings/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}




export default App;

