import React from "react";
import "./App.css";
import { Router, RouteComponentProps } from "@reach/router";
import Header from "./component/Header";
import SignIn from "./page/SignIn";

function App() {
  return (
    <>
      <Header />
      <Router>
        <NotFound default />
        <Home path="/" />
        <SignIn path="signin" />
      </Router>
    </>
  );
}

export default App;

const NotFound = (props: RouteComponentProps) => <p>Sorry, nothing here</p>;

const Home = (props: RouteComponentProps) => (
  <div>
    <h2>Home</h2>
  </div>
);
