import { useState } from "react";
import './index.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News"
import Messenger from "./Components/Messenger/Messenger";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Nav></Nav>
      <div className="app-wrapper-content">
      <Routes>
      <Route 
      path="/profile" 
      element={<Profile
      state={props.state.profilePage}
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}/>}
      />

      <Route 
      path="/news" 
      element={<News/>}/>

      <Route 
      path="/messenger/*" 
      element={<Messenger
      state={props.state.messengerPage}
      sendMessage={props.sendMessage}
      updateNewMessageText={props.updateNewMessageText}
      />}
      />
      
      <Route 
      path="/friends" 
      element={<Friends
      state={props.state.friends}
      />}
      />
      

      <Route 
      path="/music" 
      element={<Music/>}/>

      <Route 
      path="/settings" 
      element={<Settings/>}/>
      </Routes>
      </div>
    </div>
  );
}




export default App;

