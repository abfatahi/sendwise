import { Space } from 'antd';
let self = '';
const user = JSON.parse(sessionStorage.getItem('user'));
if (user) self = user.accountNumber;

export const columns = [
  {
    title: 'S/N',
    render: (item, record, index) => <b>{index + 1}</b>,
  },
  {
    title: 'From',
    dataIndex: 'sender',
    key: 'sender',
    render: (text) => <Space>{text === self ? 'You' : text}</Space>,
  },
  {
    title: 'To',
    dataIndex: 'receiver',
    key: 'receiver',
    render: (text) => <Space>{text === self ? 'You' : text}</Space>,
  },
  {
    title: 'Transaction ID',
    dataIndex: 'transactionId',
    key: 'transactionId',
    render: (text) => <Space>{text}</Space>,
  },
  {
    title: 'Currency',
    dataIndex: 'targetCurrency',
    key: 'targetCurrency',
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
      <Space>{text ? new Date(text).toLocaleDateString() : '------'}</Space>
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
