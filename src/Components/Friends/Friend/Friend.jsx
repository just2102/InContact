import s from "../Friends.module.css"

const Friend = (props) => {
    return ( 
        <div className={s.friend}>
            <div className={s.friend_avatar}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={s.friend_name}>
                {props.name}
            </div>
        </div>
     );
}
 
export default Friend;