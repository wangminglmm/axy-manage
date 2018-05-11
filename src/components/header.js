import React, { Component } from 'react'
import { Menu, Dropdown, Icon, message } from 'antd';
import { connect } from 'react-redux'
import { signOut } from '@/redux/action'
console.log(signOut)
@connect(state=>({user:state.user}),{signOut})
class Header extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick({key}){
    console.log(key)
    switch(key){
      case '1':
      this.props.signOut();
      default:
      break;
    }
  }
  render () {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <header className='header'>
        <div className='left'>
        </div>
        <div className='right'>
          <ul className='clearfix'>
            <li className="fl">
              <Dropdown overlay={menu}>
                <a className='ant-dropdown-link' href='javascript:;'>{this.props.user.userName} <Icon type='down' /></a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header
