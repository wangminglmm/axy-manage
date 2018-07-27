import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '@/components/header'
import SideBar from '@/components/sidebar'
import RouteControl from '@/router/index'
class Index extends React.Component {
  render () {
    return (
      <div>
        <Header></Header>
        <div className="main">
          <SideBar></SideBar>
          <div className="main-container">
            <RouteControl className="main-content"></RouteControl>
          </div>
        </div>
      </div>
    )
  }
}
export default Index
