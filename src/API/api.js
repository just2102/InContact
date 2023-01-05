import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  //headers: {}
})

export const usersAPI = {
  getUsers(numOfUsersOnPage, currentPage) {
    return instance.get(`users?count=${numOfUsersOnPage}&page=${currentPage}`)
    .then(response=>{
      return response.data
    })
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`)
    .then(response=>{
      return response.data
    })
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
    .then(response=>{
      return response.data
    })
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then(response => {
      return response.data
    });
  }
}

export const authAPI = {
  whoAmI() {
    return instance.get(`auth/me`)
    .then(response=>{
      return response.data
    })
  }
}