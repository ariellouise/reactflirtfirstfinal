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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/match" component={Match} />
          <Route path="/compare" component={Compare} />
          <Route path="/inbox" component={Inbox} />
          <Route path="/myaccount" component={Myaccount} />
          <Route path="/myprofile" component={Myprofile} />
          <Route path="/userprofile" component={Userprofile} />
          <Route path="/chat" component={Chat} />
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
