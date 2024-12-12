import { resStatusMap } from '@/pages/Utils/utils';
import { listUsingGet2 } from '@/services/hot-news/caozuorizhiji';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Tag } from 'antd';
import dayjs from 'dayjs';
import React, { useRef } from 'react';

const Index: React.FC = () => {
  const columns: ProColumns<API.OperLog>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '类名',
      dataIndex: 'className',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '方法名称',
      dataIndex: 'method',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '请求方式',
      dataIndex: 'requestMethod',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '操作人员',
      dataIndex: 'operUser',
      valueType: 'text',
    },
    {
      title: '请求URL',
      dataIndex: 'operUrl',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '主机地址',
      dataIndex: 'operIp',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '请求参数',
      dataIndex: 'operParam',
      valueType: 'text',
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '返回参数',
      dataIndex: 'jsonResult',
      valueType: 'text',
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '操作状态',
      dataIndex: 'status',
      valueType: 'text',
      hideInSearch: true,
      render: (text, record) => {
        // (0正常 1异常)
        return (
          <>
            <Tag color={resStatusMap[Number(record.status)].color}>
              {resStatusMap[Number(record.status)].text}
            </Tag>
          </>
        );
      },
    },
    {
      title: '错误消息',
      dataIndex: 'errorMsg',
      valueType: 'text',
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '操作时间',
      key: 'dateRange',
      dataIndex: 'operTime',
      valueType: 'dateRange',
      render: (_, record) => {
        if (!record.operTime) return '-';
        return dayjs(record.operTime).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '耗时(ms)',
      dataIndex: 'costTime',
      valueType: 'text',
      hideInSearch: true,
    },
  ];

  const actionRef = useRef<ActionType>();

  return (
    <div>
      <PageContainer>
        <ProTable<API.OperLog>
          rowKey="id"
          columns={columns}
          actionRef={actionRef}
          request={async (params) => {
            const res = await listUsingGet2({
              userName: params.operUser,
              startTime: params.operTime?.[0],
              endTime: params.operTime?.[1],
              pageSize: params.pageSize,
              current: params.current,
            });
            const records = res.data?.records;
            return {
              data: records,
              success: true,
              total: res.data?.total,
            };
          }}
        />
      </PageContainer>
    </div>
  );
};
export default Index;
