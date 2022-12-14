import s from './Nav.module.css'
const Nav = () => {
    return ( 
    <nav className={s.nav}>
     <div className={s.nav_item+" "+ s.active}>Profile</div>
     <div className={s.nav_item}>News</div>
     <div className={s.nav_item}>Messenger</div>
     <div className={s.nav_item}>Friends</div>
     <div className={s.nav_item}>Music</div>
     <div className={s.nav_item}>Settings</div>
    </nav>
     );
}
 
export default Nav;