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
  followUser (id) {
    return instance.post(`follow/${id}`)
    .then(response=> {
      return response.data
    })
  },
  unfollowUser (id) {
    return instance.delete(`follow/${id}`)
    .then(response=> {
      return response.data
    })
  }
}
