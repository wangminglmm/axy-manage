import React, { Component } from 'react'
import { Table, Button, DatePicker } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.scss'
moment().lang('zh-cn')
const { MonthPicker } = DatePicker
const columns = [{
  title: '交易日期',
  dataIndex: 'time'
}, {
  title: '交易金额（元）',
  dataIndex: 'money'
}, {
  title: '支付银行卡',
  dataIndex: 'bankNo'
}, {
  title: '支付方',
  dataIndex: 'payWay'
}, {
  title: '状态',
  dataIndex: 'state'
}]
const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i + 1,
    time: '2017-6-29 11:26:35',
    money: '1111',
    bankNo: '35554543454544',
    payWay: 'xxx运营商',
    state: '已结清'
  })
}
export default class TransactionList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      pagination: {
        pageSizeOptions: ['10', '20', '40'],
        showSizeChanger: false,
        total: 300,
        onChange: this.onPageChange.bind(this)
      }
    }
    this.onDateChange = this.onDateChange.bind(this)
  }
  onPageChange (page, pageSize) {
    console.log(page, pageSize)
  }
  onDateChange (date, dateString) {
    console.log(date.lang(), dateString)
  }
  disabledDate (date) {
    return date.valueOf() > Date.now()
  }
  render () {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const hasSelected = selectedRowKeys.length > 0
    const monthFormat = 'YYYY/MM'
    return (
      <div className={this.props.className}>
        <div className='list-header'>
          <span>日历查询：</span>
          <MonthPicker
            onChange={this.onDateChange}
            placeholder='全部'
            format={monthFormat}
            locale='zh_CN'
            defaultValue={moment(new Date(), monthFormat)}
            disabledDate={this.disabledDate} />
          <Button type='primary' className='ml30'>
            查询结果
          </Button>
        </div>
        <Table columns={columns} dataSource={data} pagination={this.state.pagination} />
      </div>
    )
  }
}
