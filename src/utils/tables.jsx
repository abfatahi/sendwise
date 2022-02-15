import { Space } from 'antd';

export const columns = [
  {
    title: 'S/N',
    render: (item, record, index) => <b>{index + 1}</b>,
  },
  {
    title: 'Beneficiary',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Space>{text}</Space>,
  },
  {
    title: 'Bank Name',
    dataIndex: 'bank_name',
    key: 'bank_name',
    render: (text) => <Space>{text}</Space>,
  },
  {
    title: 'Beneficiary Number',
    dataIndex: 'account_number',
    key: 'account_number',
    render: (text) => <Space>{text}</Space>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <Space>#{text.toLocaleString()}</Space>,
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>
        {text ? new Date(text).toLocaleDateString() : '------'}
      </Space>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Space
        style={{
          fontSize: 13,
          letterSpacing: '0.07rem',
          textAlign: 'center',
          textTransform: 'capitalize',
          color:
            text === 'success'
              ? '#19B729'
              : text === 'pending'
              ? '#FFAD33'
              : text === 'rejected'
              ? '#FF8282'
              : '',
        }}
      >
        <b>{text}</b>
      </Space>
    ),
  },
];

