import SearchIcon from './assets/icons/search-icon.svg?react';

import Profile from './components/Profile/Profile'
import Input from './components/shared/Input/Input'
import './App.css'

function App() {
  return ( 
    <div className="wrapper">
      <aside>
        <Profile/>
        <Input
          placeholder="Search Here..."
          name="search"
          iconBefore={SearchIcon}
        />
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