import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes_not_auth } from './routers/routers'

function App() {
  return (
    <>
      <Router>
        <Switch>
          {routes_not_auth.map((route, index) => {
            return <Route key={`not-auth-${index}`} exact={route.exact} path={route.path} component={route.main} />
          })}
        </Switch>
      </Router>
    </>
  )
}

export default App
