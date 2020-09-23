import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
