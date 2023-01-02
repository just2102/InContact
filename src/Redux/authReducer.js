import lenin from "../img/lenin.png"

const SET_CURRENT_USER          = "SET_CURRENT_USER"
const SET_CURRENT_USER_AVATAR   = "SET_CURRENT_USER_AVATAR"
const TOGGLE_IS_FETCHING        = "TOGGLE_IS_FETCHING"
const SET_USER_NOT_FOUND        = "SET_USER_NOT_FOUND"




let initialState = {
    currentUser: undefined,
    isFetching: false,
    isAuthorized: false,
    doesUserExist: undefined
}

export const setCurrentUser     = (id, login, email)    =>  ({type:SET_CURRENT_USER,    currentUser:{id,login,email}})
export const setCurrentUserAvatar   = (avatar)                  =>  ({type:SET_CURRENT_USER_AVATAR, avatar})
export const toggleIsFetching       = (status)                  =>  ({type:TOGGLE_IS_FETCHING,  status:status})
export const setUserNotFound        = ()                =>  ({type:SET_USER_NOT_FOUND})

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
                isAuthorized: true,
                doesUserExist: true
            }
        case SET_CURRENT_USER_AVATAR:
            if (action.avatar) {
                let stateCopy = {...state}
                stateCopy.currentUser = {...state.currentUser}
                stateCopy.currentUser.avatar = action.avatar
                return stateCopy
            } else {
                return state}
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }
        case SET_USER_NOT_FOUND:
            return {
                ...state,
                doesUserExist:false
            }
        default:
            return state
    }
}
export default authReducer