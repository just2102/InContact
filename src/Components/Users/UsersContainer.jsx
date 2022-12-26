import { connect } from "react-redux";
import { followCreator, setUsersCreator, unfollowCreator } from "../../Redux/usersReducer";
import Users from "./Users";




function mapStateToProps (state) {
    return {
        usersData: state.usersPage.usersData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        follow: (userId) => {dispatch(followCreator(userId))},
        unfollow: (userId) => {dispatch(unfollowCreator(userId))},
        setUsers: (users) => {dispatch(setUsersCreator(users))}
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)


export default UsersContainer