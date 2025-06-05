import './Message.css'

function Message({ message, currentUserId }) {
  return (
    <div className={message.userId == currentUserId ? "message message_current-user" : "message"}>
      <img
        className="message__avatar"
        src={`/images/avatars/user${message.userId}.png`}
        alt={`${message.authorName}`}
      />
      <div className="message__box">
        {message.text}
      </div>
    </div>
  );
}

export default Message;