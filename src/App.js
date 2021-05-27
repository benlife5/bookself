import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import BookshelfNavbar from "./BookshelfNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Redirect to="/search" />
      <BookshelfNavbar />
      <Switch>
        <Route path="/library" />
        <Route path="/search" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
