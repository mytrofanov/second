import {addPostActionCreator} from "../../../Redux/profile-reducer";
import Posts, {DispatchPropsType, MapPropsType} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";




const mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
         }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: (newPost:string) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
};


const MyPostsContainer = connect<MapPropsType,DispatchPropsType, {},AppStateType >
(mapStateToProps, mapDispatchToProps)(Posts);

export default MyPostsContainer;