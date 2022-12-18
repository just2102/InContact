import s from "./Dialogue.module.css"
import { NavLink } from "react-router-dom";

const Dialogue = (props) => {
    let name = props.name
    let avatar = props.avatar
    let id = props.id
    let path = "/messenger/" + id
    return ( 
        <div className={s.dialogue}>

            <NavLink to={path} className={myFunc=> myFunc.isActive ? s.dial_active : s.dial_inactive} >
                <div className={s.dialogue_avatar_container}><img src={avatar} alt="" /></div>
                <div className={s.last_message}></div>
                {name}
            </NavLink>

        </div>
     );
}
 
export default Dialogue;