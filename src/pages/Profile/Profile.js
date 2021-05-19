import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import User from "../../components/User/User";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <div>
      <User user={props.user} />
      <Link to="/edit-profile">Edit</Link>
    </div>
  );
}

export default withAuth(Profile);
