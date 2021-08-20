import Header from "/Users/arielmurphy/Desktop/reactflirtfirstfinal/src/components/Header.js";
import React, { Component } from "react";
import { MessageList } from "../pages/MessageList";
import { MessageInput } from "../pages/MessageInput";
import { useState, useEffect } from "react";
import "../chatstyle.css";

// class Chat extends React.Component {
//   render() {
//     return (
//       <div>
//         <div class="container">
//           <header class="text-center row">
//             <h1>Message with Zak Bagans</h1>
//           </header>

//           <div id="messages"></div>
//           <form class="inputBar row" onsubmit="sendMessage(event)">
//             {/*https://flirtfirstback.herokuapp.com/messages*/}
//             <div class="col-10">
//               <input class="form-control" type="text" id="messageInput" />
//             </div>
//             <div class="col-2">
//               <button class="btn btn-info" type="submit">
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// export default Chat;
function App() {
  const [messages, setMessages] = useState([]);
  const loadMessages = () => {
    fetch(`http://localhost:3002/chat`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessages(data.messages);
      });
  };
  useEffect(() => {
    loadMessages();
    setInterval(() => {
      loadMessages();
    }, 10000);
  }, []);

  return (
    <div className="App container">
      <MessageList messages={messages} setMessages={setMessages} />
      <MessageInput setMessages={setMessages} messages={messages} />
    </div>
  );
}

export default App;
