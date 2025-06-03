import NoUnreadIcon from './../../assets/icons/no-unread-icon.svg?react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <img src="/public/images/avatars/contact1.png" alt="Lisa Roy" />
      <div className="contact__details-container">
        <div className="contact__details">
          <span className="contact__name">Lisa Roy</span>
          <span className="contact__last-msg-time">10:35 AM</span>
        </div>
        <div className="contact__details">
          <span className="contact__last-msg">Hi, are you Available Tomorrow?</span>
          <div className="contact__msg-status"><NoUnreadIcon/></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;