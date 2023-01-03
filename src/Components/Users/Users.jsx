import styles from "./User/User.module.css"
import leninAvatar from "../../img/lenin.png"
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../API/api";

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
                ? <button disabled={props.followingInProgress.userId===user.id} className={styles.unfollow_button} onClick={ () => {
                    props.toggleFollowingInProgress(true, user.id)

                    usersAPI.unfollowUser(user.id).then(data=>{
                        if (data.resultCode===0) {
                            props.onUnfollow(user.id)
                        } props.toggleFollowingInProgress(false, null)
                    })
                  }}>Following</button>
                : <button disabled={props.followingInProgress.userId===user.id} className={styles.follow_button} onClick={ () => {
                    props.toggleFollowingInProgress(true, user.id)

                    usersAPI.followUser(user.id).then(data=>{
                        if (data.resultCode===0) {
                            props.onFollow(user.id)
                        } props.toggleFollowingInProgress(false, null)
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