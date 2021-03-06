import React, { Component } from 'react'
import MoneyTransferContainer from '../../components/moneyTransfer/MoneyTransferContainer'
import StatusContainer from '../../components/status/StatusContainer'

class Home extends Component {
  render() {
    return(
      <main className="container-fluid pt-2">
        <MoneyTransferContainer/>
        <StatusContainer/>
      </main>
    )
  }
}

export default Home
