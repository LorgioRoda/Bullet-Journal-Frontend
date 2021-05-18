import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import Chronometer from "../../components/Chronometer/Chronometer"


function ChronometerPage() {
  return (
    <div>
      <Chronometer/>
    </div>
  );
}
export default withAuth(ChronometerPage);