import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BookshelfNavbar from "./BookshelfNavbar";
import BookSearch from "./BookSearch";
import LibraryView from "./LibraryView";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <BookshelfNavbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path="/library" component={LibraryView} />
        <Route exact path="/search" component={BookSearch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
