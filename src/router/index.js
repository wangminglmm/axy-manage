import React, { Component } from 'react'
import asyncComponentFun from '@/components/asynComponent'
import { Route } from 'react-router-dom'
const AgentOverView = asyncComponentFun(()=>import('@/pages/overview/index'))
const DevList = asyncComponentFun(()=>import('@/pages/devlist/index'))
const TransactionList = asyncComponentFun(()=>import('@/pages/transaction/index'))
class RouterControl extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <Route path="/index/agent/overview" render={()=>(<AgentOverView className={this.props.className || ''} />)}></Route>
        <Route path="/index/agent/devlist" render={()=>(<DevList className={this.props.className || ''} />)}></Route>
        <Route path="/index/agent/transaction" render={()=>(<TransactionList className={this.props.className || ''} />)}></Route>
      </div>
    )
  }
}
export default RouterControl