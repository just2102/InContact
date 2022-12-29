import { connect } from "react-redux";
import { followCreator, 
    setUsersCreator, 
    unfollowCreator, 
    setCurrentPageCreator, 
    setTotalUsersCreator } 
from "../../Redux/usersReducer";
import { Component } from "react";
import axios from "axios"
import Users from './Users';


class UsersAPIComponent extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numOfUsersOnPage}&page=${this.props.currentPage}`)
        .then(response => { 
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        })
    }
    onUnfollow = (userId) => {
        this.props.unfollow(userId)
    }
    onFollow   = (userId) => {
        this.props.follow(userId)
    }
    onPageClick= (page)   => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numOfUsersOnPage}&page=${page}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (
            <Users 
            onPageClick = {this.onPageClick} 
            onFollow={this.onFollow} 
            onUnfollow={this.onUnfollow}

            usersData={this.props.usersData}
            totalUsers={this.props.totalUsers}
            numOfUsersOnPage={this.props.numOfUsersOnPage}
            currentPage={this.props.currentPage}></Users>
        );
    }
}

function mapStateToProps (state) {
    return {
        usersData: state.usersPage.usersData,
        totalUsers: state.usersPage.totalUsers,
        numOfUsersOnPage: state.usersPage.numOfUsersOnPage,
        currentPage: state.usersPage.currentPage
    }
}
function mapDispatchToProps (dispatch) {
    return {
        follow: (userId) => {dispatch(followCreator(userId))},
        unfollow: (userId) => {dispatch(unfollowCreator(userId))},
        setUsers: (users) => {dispatch(setUsersCreator(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageCreator(page))},
        setTotalUsers: (number) => {dispatch(setTotalUsersCreator(number))}
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)

export default UsersContainer