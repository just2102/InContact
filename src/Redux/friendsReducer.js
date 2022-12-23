import saniaAvatar from "../img/sania.png"
import kostiaAvatar from "../img/kostia.png"
import vasiaAvatar from "../img/vasia.png"
import masiaAvatar from "../img/masia.png"
import kirillAvatar from "../img/kirill.png"
import leninAvatar from "../img/lenin.png"

let initialState = {
    friends:
    [

    ]
}
initialState.friends.push({id:1,name:'Sania',avatar:saniaAvatar})
initialState.friends.push({id:2,name:'Kostia',avatar:kostiaAvatar})
initialState.friends.push({id:3,name:'Vasia',avatar:vasiaAvatar})

const friendsReducer = (state = initialState, action) => {
    
    return state;
}

export default friendsReducer