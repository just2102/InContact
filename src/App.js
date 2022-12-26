import { useState } from "react";
import './index.css';
import {
  Route,
  Routes,
// @ts-ignore
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News"
import Messenger from "./Components/Messenger/Messenger";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";



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
      //store={props.store}
      />}
      />

      <Route 
      path="/news" 
      element={<News/>}/>

      <Route 
      path="/messenger/*" 
      element={<Messenger
      //store={props.store}
      />}
      />
      
      <Route 
      path="/friends" 
      element={<FriendsContainer
      //store={props.store}
      />}
      />

      <Route 
      path="/users" 
      element={<UsersContainer
      //store={props.store}
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

