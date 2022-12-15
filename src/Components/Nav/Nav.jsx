import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'
const Nav = () => {

    return ( 
    <nav className={s.nav}>
     <div className={s.nav_item}>
        <NavLink to="/profile" className={myFunc=>myFunc.isActive ? s.active : s.nav_item} >Profile</NavLink> 
     </div>
     <div className={s.nav_item}>
        <NavLink to="/news" className={myFunc=>myFunc.isActive?s.active:s.nav_item} >News</NavLink> 
     </div>
     <div className={s.nav_item}>
        <NavLink to="/messenger" className={myFunc=>myFunc.isActive?s.active:s.nav_item}>Messenger</NavLink> 
     </div>
     <div className={s.nav_item}>
        <NavLink to="/friends"className={myFunc=>myFunc.isActive ? s.active : s.nav_item}>Friends</NavLink> 
     </div>
     <div className={s.nav_item}>
        <NavLink to="/music"className={myFunc=> myFunc.isActive ? s.active : s.nav_item} >Music</NavLink> 
     </div>
     <div className={s.nav_item}>
        <NavLink to="/settings" className={myFunc=> myFunc.isActive ? s.active : s.nav_item}>Settings</NavLink> 
     </div>
    </nav>
     );
}
 
export default Nav;