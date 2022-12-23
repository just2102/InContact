import Friends from "./Friends"

const FriendsContainer = (props) => {
    let state = props.store.getState().friendsPage
    return ( 
        <Friends state={state}></Friends>
     );
}
 
export default FriendsContainer;