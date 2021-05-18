import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import User from "../../components/User/User";
import { Link } from "react-router-dom";
import SCProfile from "./Profile.styled";

function Profile(props) {
  return (
    <SCProfile>
      <User user={props.user} />
      <Link className="link-edit" to="/edit-profile">
        Editar
      </Link>
    </SCProfile>
  );
}

export default withAuth(Profile);
