import { Navigate } from "react-router-dom"
import Friend from "./Friend/Friend"
import s from "./Friends.module.css"

const Friends = (props) => {
    if (!props.isAuthorized) {
      return <Navigate to="/login"></Navigate>
    }

    let friends = props.friends
    let friendsMapped = friends.map(friend=> {
      return <Friend name={friend.name} avatar={friend.avatar}></Friend>
    })

    return ( 
        <div className={s.container}>
            {friendsMapped}
        </div>
     );
}
 
export default Friends;