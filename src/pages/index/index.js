import React, { Component } from 'react'
import Header from '@/components/header'
import SideBar from '@/components/sidebar'
class Index extends React.Component {
  render () {
    return (
      <div>
        <Header></Header>
        <div className="main">
          <SideBar></SideBar>
        </div>
      </div>
    )
  }
}
export default Index
