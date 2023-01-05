import { connect } from "react-redux";
import { Component } from "react";
import {
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching,
  toggleFollowingInProgress,
  //thunks
  getUsers,
  follow,
  unfollow,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.getUsers(this.numOfUsersOnPage,this.currentPage)
  };
  onUnfollow = (userId) => {
    this.props.unfollow(userId);
  };
  onFollow = (userId) => {
    this.props.follow(userId);
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


            usersData={this.props.usersData}
            totalUsers={this.props.totalUsers}
            numOfUsersOnPage={this.props.numOfUsersOnPage}
            currentPage={this.props.currentPage}

            followingInProgress={this.props.followingInProgress}

            isAuthorized={this.props.isAuthorized}
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
    followingInProgress: state.usersPage.followingInProgress,

    isAuthorized: state.auth.isAuthorized
  };
}

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  setTotalUsers,

  toggleIsFetching,
  toggleFollowingInProgress,

  getUsers,
  follow,
  unfollow
})(UsersAPIComponent);

export default UsersContainer;
