import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

// const PrivateRoute = ({component: Component,...rest})=>{
//   return (
//     <Route {...rest} render={(props)=>{
//       return isLogin ? (<Component {...props} />) : (
//         <Redirect to={{
//           pathname: `/login`,
//           state: { from: props.location }
//         }} />
//       )
//     }}></Route>
//   )
// }

class PrivateRoute extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin: false
    }
  }
  render(){
    let { component: Component, ...rest} = this.props;
    console.log(this.props.user)
    let isLogin = this.props.user.userName
    console.log(isLogin)
    return <Route {...rest} render={(props)=>{
      return isLogin ? (<Component {...props} />) : (
        <Redirect to={{
          pathname: `/login`,
          state: { from: props.location }
        }} />
      )
    }}></Route>
  }
}

export default connect(state=>({user:state.user}),{})(PrivateRoute)
