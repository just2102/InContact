import { connect } from "react-redux";
import { Component } from "react";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching,
  toggleFollowingInProgress
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {usersAPI} from "../../API/api"

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.numOfUsersOnPage,this.currentPage).then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsers(data.totalCount);

        this.props.toggleIsFetching(false);
      });
  }
  onUnfollow = (userId) => {
    this.props.unfollow(userId);
  };
  onFollow = (userId) => {
    this.props.follow(userId);
  };
  onPageClick = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    usersAPI.getUsers(this.props.numOfUsersOnPage, page).then(data => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
      });
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,

  toggleIsFetching,
  toggleFollowingInProgress
})(UsersAPIComponent);

export default UsersContainer;
