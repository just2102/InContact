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
import FriendsContainer from "./Components/Friends/FriendsContainer";
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
      //state={props.state.profilePage}
      //dispatch={props.dispatch}
      store={props.store}
      />}
      />

      <Route 
      path="/news" 
      element={<News/>}/>

      <Route 
      path="/messenger/*" 
      element={<Messenger

      // state={props.state.messengerPage}
      // dispatch={props.dispatch}
      store={props.store}
      />}
      />
      
      <Route 
      path="/friends" 
      element={<FriendsContainer
      // state={props.state.friendsPage}
      // dispatch={props.dispatch}
      store={props.store}
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

