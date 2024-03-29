export const MessageList = ({ messages, setMessages }) => {
  return (
    <div id="messages">
      {messages.map((message, index) => {
        if (message.received) {
          return (
            <ReceivedMessage
              key={index}
              content={message.content}
              timestamp={message.timestamp}
            />
          );
        } else {
          return (
            <SentMessage
              key={index}
              index={index}
              message={message}
              setMessages={setMessages}
            />
          );
        }
      })}
      {/* <SentMessage />
              <ReceivedMessage /> */}
    </div>
  );
};

const SentMessage = (props) => {
  const editClicked = () => {
    const changedText = window.prompt("What did you mean to say??");
    fetch(`http://localhost:3002/chat/${props.index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: changedText }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        props.setMessages(data.messages);
      });
  };
  const deleteClicked = () => {
    if (
      window.confirm(
        "Do you regret this message? We get it. Let's delete this."
      )
    ) {
      fetch(`http://localhost:3002/chat/${props.index}`, {
        method: "DELETE",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          props.setMessages(data.messages);
        });
    }
  };

  return (
    <div className="row message">
      <div className="col-2"></div>
      <div className="col-10 text-end">
        <div className="buttons">
          <span onClick={editClicked}>edit</span> |{" "}
          <span onClick={deleteClicked}>delete</span>
        </div>
        <span className="messageText">{props.message.content}</span>
        <div className="timestamp">{props.message.timestamp.toString()}</div>
      </div>
    </div>
  );
};

const ReceivedMessage = ({ content, timestamp }) => {
  return (
    <div className="row message">
      <div className="col-10">
        <span className="messageText userMessageText">{content}</span>
        <div className="timestamp">{timestamp.toString()}</div>
      </div>
    </div>
  );
};
