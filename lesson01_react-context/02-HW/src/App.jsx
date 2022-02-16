import React from 'react';
import Header from './Header';
import { userData } from './userMenu-context.js';

class App extends React.Component {
  state = {
    userData: userData.teslaUser,
  };

  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default App;
