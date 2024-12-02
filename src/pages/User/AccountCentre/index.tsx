import {
  addThirdPartyAccountListUsingPost,
  delThirdPartyAccountUsingPost,
  getThirdPartyAccountListByAccountCentreUsingGet,
  queryThirdPartyAccountUsingGet,
} from '@/services/hot-news/zhanghaozhongxin';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, message, Spin } from 'antd';
import React, { useRef, useState } from 'react';

const expandedRowRender = (data: API.AccountCentreVO[], actionRef: React.RefObject<ActionType>) => {
  return (
    <ProTable
      columns={[
        { title: '昵称', dataIndex: 'userName', valueType: 'text' },
        { title: '账号', dataIndex: 'account', valueType: 'text' },
        { title: '平台', dataIndex: 'platForm', valueType: 'text' },
        {
          title: '是否过期',
          dataIndex: 'isDisabled',
          valueType: 'text',
          render: (text, record) => {
            return record.isDisabled ? '未过期' : '已过期';
          },
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',

          render: (text, record, index) => [
            // eslint-disable-next-line react/jsx-key
            <Button
              type="primary"
              onClick={async () => {
                await queryThirdPartyAccountUsingGet({
                  userIdStr: record.account,
                  thirdPartyFormName: data.name,
                });
              }}
            >
              查看数据
            </Button>,
            // eslint-disable-next-line react/jsx-key
            <Button
              type="primary"
              danger
              onClick={async () => {
                console.log(record, data, index);
                const res = await delThirdPartyAccountUsingPost({
                  index: index,
                  account: record.account,
                  thirdPartyFormName: data.name,
                });
                if (res.code === 0) {
                  message.success('账号移除成功');
                  actionRef.current?.reset?.();
                }
              }}
            >
              删除账号
            </Button>,
          ],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data.thirdPartyAccountVOList}
      pagination={false}
    />
  );
};

export default () => {
  const columns: ProColumns<API.AccountCentreVO>[] = [
    {
      title: '平台',
      dataIndex: 'name',
      valueType: 'text',
      render: (text, record) => {
        if (record.name === 'toutiao') {
          return '今日头条';
        } else if (record.name === 'baijia') {
          return '百家';
        }
      },
    },
    {
      title: '账号数量',
      dataIndex: 'count',
      valueType: 'number',
    },
    {
      dataIndex: 'thirdPartyAccountVOList',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      valueType: 'option',
      width: 200,
      render: (text, record, index) => [
        <Button
          type="primary"
          onClick={async () => {
            try {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              setSpinning(true);
              const res = await addThirdPartyAccountListUsingPost({
                thirdPartyFormName: record.name,
              });
              if (res.code === 0 && res.data) {
                message.success('账号添加成功');
              } else {
                message.error('账号添加失败');
              }
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              setSpinning(false);
            } catch (e) {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              setSpinning(false);
              message.success(e.message);
            }
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            actionRef.current?.reset?.();
          }}
        >
          添加账号
        </Button>,
      ],
    },
  ];

  // <Button onClick={}>Display a loading indicator</Button>

  const actionRef = useRef<ActionType>();

  const [spinning, setSpinning] = useState(false);
  return (
    <div
      style={{
        backgroundColor: 'hsl(218,22%,7%)',
      }}
    >
      <ConfigProvider>
        <ProTable<API.AccountCentreVO>
          columns={columns}
          actionRef={actionRef}
          // cardBordered
          request={async () => {
            const res = await getThirdPartyAccountListByAccountCentreUsingGet();
            return {
              data: res.data,
              success: true,
            };
          }}
          expandable={{
            expandedRowRender(record) {
              if (record.thirdPartyAccountVOList.length > 0) {
                return expandedRowRender(record, actionRef);
              }
            },
          }}
          search={false}
          rowKey={'name'}
          options={{
            setting: {
              listsHeight: 400,
            },
          }}
          dateFormatter="string"
        />
      </ConfigProvider>
      <Spin spinning={spinning} fullscreen />
    </div>
  );
};
