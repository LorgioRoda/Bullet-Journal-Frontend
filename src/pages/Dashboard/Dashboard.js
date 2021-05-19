import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { withAuth } from "../../context/auth.context";

function Dashboard(props) {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default withAuth(Dashboard);
