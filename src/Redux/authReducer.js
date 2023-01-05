import { authAPI } from "../API/api"
import lenin from "../img/lenin.png"

const SET_CURRENT_USER          = "SET_CURRENT_USER"
const SET_CURRENT_USER_AVATAR   = "SET_CURRENT_USER_AVATAR"
const TOGGLE_IS_FETCHING        = "TOGGLE_IS_FETCHING"





let initialState = {
    currentUser: undefined,
    isFetching: false,
    isAuthorized: undefined,
}

const setCurrentUser                = (id, login, email)       =>  ({type:SET_CURRENT_USER,    currentUser:{id,login,email}})
export const setCurrentUserAvatar   = (avatar)                 =>  ({type:SET_CURRENT_USER_AVATAR, avatar})
const toggleIsFetching              = (status)                 =>  ({type:TOGGLE_IS_FETCHING,  status:status})

export function getCurrentUserAuthData() {
    return function (dispatch) {
        dispatch(toggleIsFetching(true));

        authAPI.whoAmI().then(data=>{
            if (data.resultCode===0) {
                dispatch(setCurrentUser(data.data.id,data.data.login,data.data.email))
            }
            dispatch(toggleIsFetching(false))
        })
    }
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
                isAuthorized: true,
            }
        case SET_CURRENT_USER_AVATAR:
            if (action.avatar) {
                let stateCopy = {...state}
                stateCopy.currentUser = {...state.currentUser}
                stateCopy.currentUser.avatar = action.avatar
                return stateCopy
            } else {return state}
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }
        default:
            return state
    }
}
export default authReducer