import React, { Component } from 'react'
import { Piece, Set, StatType, Artifact, Stat, Stats } from 'Articraft'

class StatsTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stats: [
        { name: 'ATK', value: 0 },
        { name: 'DEF', value: 0 },
        { name: 'HP', value: 0 },
        { name: 'ATK %', value: 0 },
        { name: 'DEF %', value: 0 },
        { name: 'HP %', value: 0 },
      ]
    };
    // This binding is necessary to make `this` work in the callback
    //this.fillTable = this.fillTable.bind(this)
  }

  fillTable() {
    let s = Stats.create();
    let a = new Artifact(Piece.FEATHER, Set.BERSERK, 1,
      { statType: "ATK", value: 4 },
      [
        { statType: "HP", value: 120 },
        { statType: "HP %", value: 0.045 }
      ])
    s.addArtifact(a)
    s.calculateStats()
    console.log(s)
    this.setState(state => ({
      stats: [
        { name: 'ATK', value: s.atk },
        { name: 'DEF', value: s.def },
        { name: 'HP', value: s.hp },
        { name: 'ATK %', value: (s.atk_percent * 100).toFixed(1) },
        { name: 'DEF %', value: (s.def_percent * 100).toFixed(1) },
        { name: 'HP %', value: (s.hp_percent * 100).toFixed(1) },
      ]
    })
    );
  }

  renderTableData() {
    return this.state.stats.map((stat, index) => {
      const { name, value } = stat
      return (
        <tr>
          <td>{ name }</td>
          <td>{ value }</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table id='stats'>
          <tbody>
            { this.renderTableData() }
          </tbody>
        </table>
        <button onClick={ () => this.fillTable() }> Calculate stats</button>
      </div>
    );
  }
}

export default StatsTable
