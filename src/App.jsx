import { useState } from 'react'

import initialContacts from './contacts';
import SearchIcon from './assets/icons/search-icon.svg?react';

import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import Input from './components/shared/Input/Input'
import './App.css'

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  let contactItems = null;
  if(contacts.length) {
    contactItems = contacts.map(contact =>
      <Contact key={contact.id} contact={contact} />
    );
  }

  return ( 
    <div className="wrapper">
      <aside>
        <Profile/>
        <Input
          placeholder="Search Here..."
          name="search"
          iconBefore={SearchIcon}
        />
        {contactItems && (
          <div className="contacts">
            {contactItems}
          </div>
        )}

      </aside>
      <main>
        {/* <span>Select a conversation</span> */}

        <div className="chat">asdf</div>
        <div className="new-message"></div>
      </main>
    </div>
  )
}

export default App;