import React from 'react';

import './App.css';
import CounterGroup from './Component/CounterGroup'
import store from './store'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <CounterGroup />
          
        </header>
      </div>
    )
  }
}

export default App;
