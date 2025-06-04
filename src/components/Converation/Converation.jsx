import NoUnreadIcon from './../../assets/icons/no-unread-icon.svg?react';
import './Converation.css';

function Converation({ converation }) {
  return (
    <div className="converation">
      <img src={`/images/avatars/${converation.avatarUrl}`} alt={converation.name} />
      <div className="converation__details-container">
        <div className="converation__details">
          <span className="converation__name">{converation.name}</span>
          <span className="converation__last-msg-time">{converation.lastMessageTime}</span>
        </div>
        <div className="converation__details">
          <span className="converation__last-msg">{converation.lastMessage}</span>
          <div
            className={
              "converation__msg-status" +
              (converation.unreadMessages ? " converation__msg-status_has-unread" : "")
          }>
            {
              converation.unreadMessages ?
              converation.unreadMessages :
              <NoUnreadIcon/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converation;