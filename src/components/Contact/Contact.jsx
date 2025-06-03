import NoUnreadIcon from './../../assets/icons/no-unread-icon.svg?react';
import './Contact.css';

function Contact({ contact }) {
  return (
    <div className="contact">
      <img src={`/public/images/avatars/${contact.avatarUrl}`} alt={contact.name} />
      <div className="contact__details-container">
        <div className="contact__details">
          <span className="contact__name">{contact.name}</span>
          <span className="contact__last-msg-time">{contact.lastMessageTime}</span>
        </div>
        <div className="contact__details">
          <span className="contact__last-msg">{contact.lastMessage}</span>
          <div
            className={
              "contact__msg-status" +
              (contact.unreadMessages ? " contact__msg-status_has-unread" : "")
          }>
            {
              contact.unreadMessages ?
              contact.unreadMessages :
              <NoUnreadIcon/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;