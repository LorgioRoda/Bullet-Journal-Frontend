import React, { Component } from "react";
import {withAuth} from "../../context/auth.context"
import User from "../../components/User/User"

function Profile(props) {
    return (
        <div>
            <User user={props.user}/>
        </div>
    )
}

export default withAuth(Profile);
