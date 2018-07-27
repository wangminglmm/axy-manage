import React, { Component } from 'react';
import { Button } from 'antd';
import './index.scss'
export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const data = this.state.data;
    return (
      <div className={this.props.className ? this.props.className : ''}>
        <div className="overview">
          <table className="overview-table">
            <thead>
              <tr>
                <th>设备数量（台）</th>
                <th>1,000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>已启用设备（台）</td>
                <td>900</td>
              </tr>
              <tr>
                <td>已还款（元）</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>最近还款金额</td>
                <td>1,000
                  <Button type="primary" className="btn-pay">去付款</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


