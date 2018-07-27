import React, { Component } from 'react'
import { Table, Button, DatePicker } from 'antd'
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.scss';
moment().lang('zh-cn')
const { MonthPicker } = DatePicker
const columns = [{
  title: '序号',
  dataIndex: 'orderNo',
}, {
  title: '设备ID',
  dataIndex: 'devId',
}, {
  title: '设备类型',
  dataIndex: 'devType',
}, {
  title: '安装位置',
  dataIndex: 'location',
}, {
  title: '是否在线',
  dataIndex: 'isOnline',
}, {
  title: '启用时间',
  dataIndex: 'stime',
}, {
  title: '到期时间',
  dataIndex: 'etime',
}, {
  title: '最近还款日期',
  dataIndex: 'prevTime',
}, {
  title: '操作',
  dataIndex: 'edit',
  render: text => <Button type="primary">支付</Button>,
}];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i + 1,
    orderNo: i + 1,
    devId: 'AX-403A-2017060500016',
    devType: 'AX-403A',
    location: '汇海威视AX-403A摇头机',
    isOnline: i % 2 ? true : false,
    stime: '2017-6-29 11:26:35',
    etime: '2017-6-29 11:26:35',
    prevTime: '2017-6-29 11:26:35',
  });
}
export default class DevList extends Component {
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  constructor(props) {
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
  onPageChange(page, pageSize) {
    console.log(page, pageSize)
  }
  onDateChange(date, dateString) {
    if(!date){
      return
    }
    console.log(date.lang(), dateString);
  }
  disabledDate(date) {
    return date.valueOf() > Date.now();
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const monthFormat = 'YYYY/MM';
    return (
      <div className={this.props.className}>
        <div className="list-header">
          <span>日历查询：</span>
          <MonthPicker
            onChange={this.onDateChange}
            placeholder="全部"
            format={monthFormat}
            locale="zh_CN"
            defaultValue={moment(new Date(), monthFormat)}
            disabledDate={this.disabledDate} />
          <Button type="primary" className="ml30">查询结果</Button>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={this.state.pagination} />
        <div className="list-footer">
          <div className="fr">
            <span>共计（元）：10000</span>
            <Button type="primary" className="ml30">去付款</Button>
          </div>
        </div>
      </div>
    )
  }
}
