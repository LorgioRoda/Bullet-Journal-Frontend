import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Task from "./pages/Task/task";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={Task} />
      </Switch>
    </div>
  );
}

export default App;
