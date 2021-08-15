import React from "react";
import styles from "./friends.module.css";
import userPhoto from "../../assets/images/user.png";


let Friend = (props) => {

    return (
        <div>
            <div>
                Друзья
                {props.friends}

            </div>


        </div>)

}


export default Friend;