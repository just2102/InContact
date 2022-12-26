import saniaAvatar from "../../img/sania.png"
import kostiaAvatar from "../../img/kostia.png"
import vasiaAvatar from "../../img/vasia.png"
import masiaAvatar from "../../img/masia.png"
import kirillAvatar from "../../img/kirill.png"
import leninAvatar from "../../img/lenin.png"
import s from "./User/User.module.css"

const Users = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers (
            [
            {id:1,followed: true, name:'Sania', status:'Some status...', location:{city:'Vladivostok',country:'Russia'}, avatar:saniaAvatar},
            {id:2,followed: true, name:'Kostia',status:'Some status...', location:{city:'Moscow',country:'Russia'}, avatar:kostiaAvatar},
            {id:3,followed: true, name:'Vasia', status:'Some status...', location:{city:'Kyiv',country:'Ukraine'}, avatar:vasiaAvatar},
            {id:4,followed: false, name:'Masia', status:'Some status...', location:{city:'Dalnegorsk',country:'Russia'}, avatar:masiaAvatar},
            {id:5,followed: false, name:'Kirill',status:'Some status...', location:{city:'Tokyo',country:'Japan'}, avatar:kirillAvatar},
            {id:6,followed: false, name:'Lenin', status:'Some status...', location:{city:'Toronto',country:'Canada'}, avatar:leninAvatar}
            ]    
        )
    }

    function onUnfollow (userId) {
        props.unfollow(userId)
    }
    function onFollow (userId) {
        props.follow(userId)
    }

    return (
    <div className={s.users}>
        {
        props.usersData.map (user => {
        return (
        <div className={s.user}>
            <div className={s.avatar}><img src={user.avatar} alt="" /></div>
            {
            user.followed 
            ? <button className={s.follow_button} onClick={ () => onUnfollow(user.id)}>Unfollow</button>
            : <button className={s.follow_button} onClick={ () => onFollow(user.id)}>Follow</button>
            }
            <div className={s.user_info}>
                <div className={s.name_container}>{user.name}</div>
                <div className={s.status_container}>{user.status}</div>
                <div className={s.location_container}>{user.location.city}, {user.location.country}</div>
            </div>
        </div>
        )
        })
        }
    </div>
    )

}
 
export default Users;