import Friend from "./Friend/Friend"
import s from "./Friends.module.css"

const Friends = (props) => {
    let friends = props.state.friends
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