import styles from "./User/User.module.css"
import leninAvatar from "../../img/lenin.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let numberOfPages = Math.ceil(props.totalUsers / props.numOfUsersOnPage)
    let pages = [];
    // push all pages as separate integers into pages array to display them on page
    for (let i = 1 ; i<=numberOfPages; i++) {
        pages.push(i)
    }
    let mappedUsers = props.usersData.map (user => {
        return (

            <div className={styles.user}>
                <NavLink to={`/profile/${user.id}`}>
                    <div className={styles.avatar}><img src={user.photos.small ? user.photos.small : leninAvatar} alt="" /></div>
                </NavLink>
                {
                user.followed 
                ? <button className={styles.unfollow_button} onClick={ () => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{withCredentials:true})
                    .then(response=>{
                        if (response.data.resultCode===0) {
                            
                            props.onUnfollow(user.id)
                        }
                    })
                  }}>Following</button>
                : <button className={styles.follow_button} onClick={ () => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{withCredentials:true})
                    .then(response=>{
                        debugger
                        if (response.data.resultCode===0) {
                            props.onFollow(user.id)
                        }
                    })
                  }}>Not following</button>
                }
                <div className={styles.user_info}>
                    <div className={styles.name_container}>{user.name}</div>
                    <div className={styles.status_container}>{user.status}</div>
                    {/* <div className={styles.location_container}>{user.location.city}, {user.location.country}</div> */}
                </div>
            </div>
            )
    })
    let mappedPages = pages.map(page => {
        return <span 
        className={page===props.currentPage ? styles.selected_page : styles.unselected_page}
        onClick={() => props.onPageClick(page)}>{page}</span>
    })

    return ( 
        <div className={styles.users}>
            {mappedUsers}
            <div className={styles.pages}>
                {mappedPages}
            </div>
        </div>
     );
}
 
export default Users;