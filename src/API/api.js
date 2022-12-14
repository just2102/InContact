import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
  }
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
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
    .then(response=> {
      return response.data
    })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
    .then(response=> {
      return response.data
    })
  }
}

export const authAPI = {
  whoAmI() {
    return instance.get(`auth/me`)
    .then(response=>{
      return response.data
    })
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    .then(response=> {
      return response
    })
  },
  logout () {
    return instance.delete(`auth/login`).then(response=>{
      return response
    })
  },
  getCaptcha () {
    return instance.get(`security/get-captcha-url`).then(response=>{
      return response
    })
  }
}

export const messengerAPI = {
  getDialogues () {
    return instance.get(`dialogs`).then(response=>{
      return response
    })
  },
  getMessages (friendId) {
    return instance.get(`dialogs/${friendId}/messages`).then(response=> {
      return response
    })
  },
  sendMessage (friendId, msg) {
    return instance.post(`dialogs/${friendId}/messages`, {body: msg}).then(response=> {
      debugger
      return response.data
    })
  },

}