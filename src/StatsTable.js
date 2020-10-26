import React, { Component } from 'react'

class StatsTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      stats: [
        { id: 1, name: 'ATK', value: 0},
        { id: 2, name: 'DEF', value: 0}
      ]
    }
  }

  renderTableData(){
    return this.state.stats.map((stat, index) => {
      const { id, name, value} = stat
      return(
        <tr key={id}>
          <td>{name}</td>
          <td>{value}</td>
        </tr>
      )
    })
  }

  render(){
    return (
      <div>
        <table id='stats'>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}


export default StatsTable
