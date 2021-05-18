import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Task from "./pages/Task/task";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AnonRoute from "./components/AnonRoute/AnonRoute";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/task" exact component={Task} />{" "}
        {/* Path and Exact props */}
        <AnonRoute exact path="/signup" component={Signup} redirectPath="/" />
        <AnonRoute exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
