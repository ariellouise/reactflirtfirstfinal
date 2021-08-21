import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Match from "./pages/Match";
import Compare from "./pages/Compare";
import Inbox from "./pages/Inbox";
import Myaccount from "./pages/Myaccount";
import Myprofile from "./pages/Myprofile";
import Chat from "./pages/Chat";
import Userprofile from "./pages/Userprofile";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* <div style={{ marginBottom: 130 }}> */}
        <Header />
        {/* </div> */}
        <Switch>
          <Route path="/index.html" component={Home} />
          <Route path="/match.html" component={Match} />
          <Route path="/compare.html" component={Compare} />
          <Route path="/inbox.html" component={Inbox} />
          <Route path="/my-account.html" component={Myaccount} />
          <Route path="/my-profile.html" component={Myprofile} />
          <Route path="/userprofile.html" component={Userprofile} />
          <Route path="/Login" component={Login} />
          <Route path="/chat.html" component={Chat} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Modal />
        <Search />
        <Cart />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
