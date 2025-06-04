import { useState } from 'react'

import initialConverations from './converations';
import SearchIcon from './assets/icons/search-icon.svg?react';

import Converation from './components/Converation/Converation'
import Profile from './components/Profile/Profile'
import Input from './components/shared/Input/Input'
import './App.css'

function App() {
  const [converations, setConverations] = useState(initialConverations);
  // const [current]

  let converationItems = null;
  if(converations.length) {
    converationItems = converations.map(converation =>
      <Converation key={converation.id} converation={converation} />
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
        {/* <span>Select a conversation</span> */}

        <div className="chat">asdf</div>
        <div className="new-message"></div>
      </main>
    </div>
  )
}

export default App;