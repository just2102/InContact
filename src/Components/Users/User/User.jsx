import s from "./User.module.css"

const User = (props) => {
    function onUnfollow () {
        props.unfollow()
    }
    function onFollow () {
        props.follow()
    }

    return ( 
        <div className={s.user}>
            <div className={s.avatar}><img src={props.avatar} alt="" /></div>
            {
            props.followed ? 
            <button className={s.follow_button} onClick={onUnfollow}>Unfollow</button>
            : 
            <button className={s.follow_button} onClick={onFollow}>Follow</button>
            }
            <div className={s.user_info}>
                <div className={s.name_container}>{props.name}</div>
                <div className={s.status_container}>{props.status}</div>
                <div className={s.location_container}>{props.city}, {props.country}</div>
            </div>
        </div>
     );
}
 
export default User;