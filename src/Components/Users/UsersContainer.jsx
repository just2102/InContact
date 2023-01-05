import { connect } from "react-redux";
import { Component } from "react";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching,
  toggleFollowingInProgress,
  //thunks
  getUsers,
  followThunk,
  unfollowThunk
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.getUsers(this.numOfUsersOnPage,this.currentPage)
  };
  onUnfollow = (userId) => {
    this.props.unfollowThunk(userId);
  };
  onFollow = (userId) => {
    this.props.followThunk(userId);
  };
  onPageClick = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(this.props.numOfUsersOnPage, page)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            onPageClick={this.onPageClick}
            onFollow={this.onFollow}
            onUnfollow={this.onUnfollow}

            toggleFollowingInProgress={this.props.toggleFollowingInProgress}

            usersData={this.props.usersData}
            totalUsers={this.props.totalUsers}
            numOfUsersOnPage={this.props.numOfUsersOnPage}
            currentPage={this.props.currentPage}

            followingInProgress={this.props.followingInProgress}
          ></Users>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersData: state.usersPage.usersData,
    totalUsers: state.usersPage.totalUsers,
    numOfUsersOnPage: state.usersPage.numOfUsersOnPage,
    currentPage: state.usersPage.currentPage,

    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
}

const UsersContainer = connect(mapStateToProps, {
  setUsers,
  setCurrentPage,
  setTotalUsers,

  toggleIsFetching,
  toggleFollowingInProgress,

  getUsers,
  followThunk,
  unfollowThunk
})(UsersAPIComponent);

export default UsersContainer;
