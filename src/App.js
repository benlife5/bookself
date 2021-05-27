import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BookshelfNavbar from "./BookshelfNavbar";
import BookSearch from "./BookSearch";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <BookshelfNavbar />
      <Switch>
        <Route exact path="/" component={Redirect} to="/search" />
        <Route path="/library" />
        <Route path="/search" component={BookSearch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
