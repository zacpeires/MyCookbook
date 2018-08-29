import React from 'react'
import { Navbar } from './components'
import Routes from './routes'
import { withRouter } from "react-router";

const App = () => {
  return (
    <div id="app-container">
      <Navbar />
      <Routes />
    </div>
  )
}

export default withRouter(App)
