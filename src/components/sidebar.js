import React, { Component } from 'react'
import { Menu, Icon, Switch } from 'antd'
import { connect } from 'react-redux'
const { SubMenu } = Menu
@connect(state=>(
  {user:state.user}
),{})
class SideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'inline',
      theme: 'light'
    }
    this.menuItemClick = this.menuItemClick.bind(this)
  }
  componentWillMount(){
    this.MenuList = [
      {
        key: 'overView',
        url: '/index/admin/overiew',
        power: 'admin',
        name: '总览',
      },
      {
        key: 'list',
        url: '/index/admin/list',
        power: 'admin',
        name: '运营商列表'
      },
      {
        key: 'detail',
        url: '/index/admin/detail',
        power: 'admin',
        name: '运营商详情'
      },
      {
        key: 'account',
        url: '/index/admin/account',
        power: 'admin',
        name: '账户管理'
      },
      {
        key: 'transaction',
        url: '/index/admin/transaction',
        power: 'admin',
        name: '交易记录'
      },
      {
        key: 'overView',
        url: '/idnex/agent/overView',
        power: 'agent',
        name: '总览'
      },
      {
        key: 'list',
        url: '/idnex/agent/list',
        power: 'agent',
        name: '设备列表'
      },
      {
        key: 'pay',
        url: '/idnex/agent/pay',
        power: 'agent',
        name: '支付'
      },
      {
        key: 'transaction',
        url: '/index/admin/transaction',
        power: 'agent',
        name: '交易记录'
      },
    ]
    const currentPower = this.props.user.power
    const filterMenu = this.MenuList.filter((item)=>{
      return item.power == currentPower
    })
    this.filterMenu = filterMenu
  }
  renderMenu(menuList){
    return menuList.map((menuItem)=>{
      if(!menuItem.children){
        return (
          <Menu.Item key={menuItem.key}>
            <Icon type={menuItem.icon} /> {menuItem.name}
          </Menu.Item>
        )
      }else{
        return (
          <SubMenu key={menuItem.key} title={<span><Icon type={menuItem.icon} /><span>{menuItem.name}</span></span>}>
            {
              menuItem.children.length > 0 ? this.renderMenu(menuItem.children) : null
            }
          </SubMenu>
        )
      }
    })
  }
  menuItemClick({item,key,keyPath}){
    console.log(key)
  }
  render () {
    return (
      <div className='side-bar'>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
          onClick={this.menuItemClick}>
          {
            this.renderMenu(this.filterMenu || [])
          }
        </Menu>
      </div>
    )
  }
}
export default SideBar
