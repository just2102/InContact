import './index.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from "./Components/Nav/Nav";
import ProfileContainer from './Components/Profile/ProfileContainer';
import News from "./Components/News/News"
import Messenger from "./Components/Messenger/Messenger";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import Login from './Components/Login/Login';





const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer></HeaderContainer>
      <Nav></Nav>
      <div className="app-wrapper-content">
      <Routes>
      <Route path="/profile/">
      <Route path=':userId' element={<ProfileContainer/>} />
      <Route path='me' element={<ProfileContainer/>} />
      </Route>

      <Route path="/login" element={<Login/>}></Route>

      <Route 
      path="/news" 
      element={<News/>}/>

      <Route 
      path="/messenger/*" 
      element={<Messenger
      />}
      />
      
      <Route 
      path="/friends" 
      element={<FriendsContainer
      />}
      />

      <Route 
      path="/users" 
      element={<UsersContainer/>}
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

