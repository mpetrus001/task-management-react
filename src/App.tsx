import React from "react";
import "./App.css";
import { Router, RouteComponentProps } from "@reach/router";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
      </Router>
    </>
  );
}

export default App;

const Home = (props: RouteComponentProps) => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = (props: RouteComponentProps) => (
  <div>
    <h2>Dashboard</h2>
  </div>
);
