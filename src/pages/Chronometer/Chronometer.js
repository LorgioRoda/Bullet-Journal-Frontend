import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import Chronometer from "../../components/Chronometer/Chronometer";
import Task from "../Task/task";

function ChronometerPage() {
  return (
    <div>
      <Chronometer />
      <Task />
    </div>
  );
}
export default withAuth(ChronometerPage);
