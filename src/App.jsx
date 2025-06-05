import { useState } from 'react'

import initialConverations from './converations';
import initialMessages from './messages';

import SearchIcon from './assets/icons/search-icon.svg?react';

import Converation from './components/Converation/Converation'
import Profile from './components/Profile/Profile'
import Participant from './components/Participant/Participant'
import Message from './components/Message/Message'
import Input from './components/shared/Input/Input'
import './App.css'

function App() {
  const [converations, setConverations] = useState(initialConverations);
  const [selectedConveration, setSelectedConveration] = useState(initialConverations[0]);
  const [messages, setMessages] = useState(initialMessages);

  //temporary constant to hold participants' name
  //in reality, the conversations array will contain array with participants, from which the data will be pulled
  const participantName = 'Dianne Johnson';

  //this will come from login and be stored in logged in user data
  const userId = 1;

  let converationItems = null;
  if(converations.length) {
    converationItems = converations.map(converation =>
      <Converation key={converation.id} converation={converation} />
    );
  }

  let messageItems = null;
  if(messages.length) {
    messageItems = messages.map(message =>
      <Message key={message.id} message={message} currentUserId={userId} />
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
        {converationItems && (
          <div className="converations">
            {converationItems}
          </div>
        )}

      </aside>
      <main>
        {selectedConveration ?
        (
          <>
            <div className="chat main-content-padding">
              <Participant
                avatarUrl={selectedConveration.avatarUrl}
                name={participantName}
              />
              <div className="messages">
                {messageItems}
              </div>
            </div>
            <div className="new-message main-content-padding">
              New messages
            </div>
          </>
        ) :
        (
          <div>Select a conversation</div>
        )}
      </main>
    </div>
  )
}

export default App;