import React from "react";
import SCUser from "./User.styled";

export default function User({ user }) {
  return (
    <SCUser>
      <img className="foto-background" src={user.profile_Background} />
      <h2 className="h2">PROFILE</h2>
      <div className="contenedor-principal">
        <div className="border">
          <img className="foto-perfil" src={user.photo} />
          <h3 className="h3">{user.username}</h3>
          <p className="p">{user.description}</p>
        </div>
      </div>
    </SCUser>
  );
}
