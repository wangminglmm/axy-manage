import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from '@/components/private-router'
import { Provider } from 'react-redux'
import Login from './pages/login'
import Index from './pages/index'
import  'antd/dist/antd.css'
import '@/assets/css/layout.scss'
import store from '@/redux/index'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path="/index" component={Index} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
