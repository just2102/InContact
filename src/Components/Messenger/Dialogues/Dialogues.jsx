import s from "./Dialogues.module.css";
// import Dialogue from "./Dialogue/Dialogue";
import lenin from "../../../img/lenin.png"
import { NavLink } from "react-router-dom";

const Dialogues = (props) => {
  let dialogues = props.dialoguesData;

  let mappedDialogues = dialogues.map((user) => {
    return (
      <NavLink to={`/messenger/${user.id}`} className={myFunc=> myFunc.isActive ? s.dial_active : s.dial_inactive} >
      <div className={s.dialogue}>

          <div className={s.dialogue_avatar_container}> 
            {!user.photos.small && <img src={lenin} alt="" /> }
            {user.photos.small && <img src={user.photos.small} alt="" />}
          </div>
          <span>{user.userName}</span>
          <div>{user.hasNewMessages && <span>{user.newMessagesCount} new messages</span>}</div>
      </div>
      </NavLink>
    );
  });

  return <div className={s.dialogues}>{mappedDialogues}</div>;
};

export default Dialogues;
