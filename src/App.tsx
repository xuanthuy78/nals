import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes_not_auth, routes_auth } from './routers/routers'
import MasterLayout from './components/layout/MasterLayout'
import { connect } from 'react-redux'

function App(props: any) {
  return (
    <>
      <Router>
        <Switch>
          {routes_not_auth.map((route, index) => {
            return <Route key={`not-auth-${index}`} exact={route.exact} path={route.path} component={route.main} />
          })}
          {props.auth && (
            <Route path={routes_auth.map((item) => item.path)}>
              <MasterLayout>
                <Switch>
                  {routes_auth.map((route, index) => {
                    return <Route key={`auth-${index}`} exact={route.exact} path={route.path} component={route.main} />
                  })}
                </Switch>
              </MasterLayout>
            </Route>
          )}
        </Switch>
      </Router>
    </>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth.token,
})

export default connect(mapStateToProps, null)(App)
