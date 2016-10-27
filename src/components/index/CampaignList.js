import React, { Component, PropTypes } from 'react';
// 采用antd的UI组件
import { Table, message, Popconfirm } from 'antd';
import { Link } from 'dva/router';
import moment from 'moment'
// 采用 stateless 的写法
const CampaignList = ({
    loading,
    dataSource,
}) => {
    const columns = [{
        title: '推广计划',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={`/campaign/${record.id}`}>{text}</Link>,
    }, {
        title: '有效期',
        dataIndex: 'startTime',
        key: 'startTime',
        render: (startTime, record) => `${moment(startTime).format('YYYY-MM-DD')}至${moment(record.endTime).format('YYYY-MM-DD') || '不限'}`,

    }, {
        title: '日预算',
        dataIndex: 'dayBudgetStr',
        key: 'dayBudgetStr',
    }, {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
            <p>
                <a onClick={()=>{}}>编辑</a>
                &nbsp;
                <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
                    <a>删除</a>
                </Popconfirm>
            </p>
        ),
    }];

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            rowKey={record => record.id}
        />
    );
}

export default CampaignList;
