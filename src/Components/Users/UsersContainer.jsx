import { connect } from "react-redux";
import { Component } from "react";
import axios from "axios";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numOfUsersOnPage}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);

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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numOfUsersOnPage}&page=${page}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
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
            usersData={this.props.usersData}
            totalUsers={this.props.totalUsers}
            numOfUsersOnPage={this.props.numOfUsersOnPage}
            currentPage={this.props.currentPage}
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
  };
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching,
})(UsersAPIComponent);

export default UsersContainer;
