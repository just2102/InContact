import mainLogo from "../../img/inco_large.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Preloader from "../Common/Preloader"


const Header = (props) => {

  return (
    <header className={s.header}>
      <img src={mainLogo} alt="" />

      {props.isFetching && <Preloader loadingText='Loading your info...'/>}
      <div className={s.login_block}>
        {!props.isAuthorized
        ? <NavLink to="/login">Login</NavLink> 
        : <h4>Hi, {props.currentUser.login}</h4>}
        {/* {!props.currentUser.avatar ? <img src={lenin} alt="" /> : <img src={props.currentUser.avatar} alt="" />}  */}
      </div>
    </header>
  );
};

export default Header;
