import {
  delThirdPartyAccountUsingPost,
  getThirdPartyAccountListByAccountCentreUsingGet,
} from '@/services/hot-news/zhanghaozhongxin';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, message } from 'antd';
import React, { useRef } from 'react';

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
            <Button type="primary">查看数据</Button>,
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

export type PlatFormVO = {
  platFormName: string;
  platFormAccountCount: number;
};

export default () => {
  const columns: ProColumns<API.AccountCentreVO>[] = [
    {
      title: '平台',
      dataIndex: 'name',
      valueType: 'text',
    },
    {
      title: '账号数量',
      dataIndex: 'count',
      valueType: 'number',
    },
    {
      dataIndex: 'thirdPartyAccountVOList',
    },
  ];

  const actionRef = useRef<ActionType>();

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
    </div>
  );
};
