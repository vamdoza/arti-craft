import React, { Component } from 'react'

import './app.css'
import logo from './logo.png'
import StatsTable from './StatsTable.js'

class App extends Component {
  renderStatsTable() {
    return <StatsTable> </StatsTable>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Arti-Craft</h1>
          <div>{ this.renderStatsTable() }</div>
        </header>
      </div>
    )
  }
}

export default App
