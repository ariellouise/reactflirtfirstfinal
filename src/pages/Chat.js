import React, { Component } from "react";

class Chat extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <header class="text-center row">
            <h1>Message with Zak Bagans</h1>
          </header>
          <div id="messages"></div>
          <form class="inputBar row" onsubmit="sendMessage(event)">
            <div class="col-10">
              <input class="form-control" type="text" id="messageInput" />
            </div>
            <div class="col-2">
              <button class="btn btn-info" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Chat;
