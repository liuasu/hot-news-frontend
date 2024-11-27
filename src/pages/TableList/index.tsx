import ArticleModal from '@/components/ArticleModal';
import {
  editUsingPost2,
  listUsingGet1,
  modelGenerationInTouTiaoUsingPost,
} from '@/services/hot-news/renwuzhongxin';
import { getThirdPartyAccountListUsingGet } from '@/services/hot-news/zhanghaozhongxin';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, Tag } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const expandedRowRender = (
  data: API.ThirdPartyAccountVO[],
  task: API.TaskVO,
  actionRef: React.RefObject<ActionType>,
) => {
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
          render: (text, record) => [
            // eslint-disable-next-line react/jsx-key
            <a
              onClick={async () => {
                console.log(record);
                const res = await editUsingPost2({
                  id: task.id,
                  platFormAccount: record.account,
                });
                if (res.code === 0) {
                  actionRef.current?.reload(); // 使用 actionRef 刷新表格
                }
              }}
            >
              选择该账号
            </a>,
          ],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
    />
  );
};

export default () => {
  const columns: ProColumns<API.TaskVO>[] = [
    {
      dataIndex: 'id',
      valueType: 'number',
      hideInTable: true,
      hideInSearch: true,
    },
    {
      title: '账号',
      dataIndex: 'platFormAccount',
      filters: true,
      tooltip: '标题过长会自动收缩',
      valueType: 'select',
      valueEnum: {
        all: { text: '超长'.repeat(50) },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
          disabled: true,
        },
        processing: {
          text: '解决中',
          status: 'Processing',
        },
      },
    },
    {
      title: '任务名称',
      dataIndex: 'taskName',
      ellipsis: true,
      search: false,
      tooltip: '标题过长会自动收缩',
    },
    {
      title: '标题',
      dataIndex: 'hotNewTitle',
      ellipsis: true,
      search: false,
      tooltip: '标题过长会自动收缩',
    },
    {
      title: '热点平台',
      dataIndex: 'hotPlatForm',
      search: false,
      tooltip: '标题过长会自动收缩',
    },

    {
      disable: true,
      title: '状态',
      dataIndex: 'taskStatus',
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: 'select',
      // statusMap[((Math.floor(record.taskStatus * 10) % 5) + '') as '0']
      render: (_, record) => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        <Tag color={statusMap[((Math.floor(record.taskStatus * 10) % 5) + '') as '0'].color}>
          {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
          {statusMap[((Math.floor(record.taskStatus * 10) % 5) + '') as '0'].text}
        </Tag>
      ),
      valueEnum: {
        all: { text: '超长'.repeat(50) },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
          disabled: true,
        },
        processing: {
          text: '解决中',
          status: 'Processing',
        },
      },
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (text, record: API.TaskVO, _, action) => [
        // eslint-disable-next-line react/jsx-key
        <Button
          type="primary"
          onClick={async () => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            setOpen(true);
            const hotNewTitle = record?.hotNewTitle;
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            setArtidleTitle(hotNewTitle);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const res = await modelGenerationInTouTiaoUsingPost({
              title: record.hotNewTitle,
              hotURL: record.hotUrl,
            });
            if (res.code === 0) {
              const data = res.data;
              const map = new Map<string, string>();
              map.set('hotNewsTitle', data?.hotNewsTitle);
              map.set('editing_1', data?.editing_1);
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              if (data?.editing_2) {
                map.set('editing_2', data?.editing_2);
              }
              if (data?.editing_3) {
                map.set('editing_3', data?.editing_3);
              }
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              setArticle(map);
            }
            setTimeout(() => {
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              setLoading(false);
            }, 5000);
          }}
        >
          查 看
        </Button>,
        // eslint-disable-next-line react/jsx-key
        <Button type="primary">生 成</Button>,
        // eslint-disable-next-line react/jsx-key
        <Button type="primary" danger>
          取 消
        </Button>,
      ],
    },
  ];
  const statusMap = {
    0: {
      color: 'blue',
      text: '已配置',
    },
    1: {
      color: 'green',
      text: '已生产',
    },
    2: {
      color: 'volcano',
      text: '处理中',
    },
    3: {
      color: 'red',
      text: '失败',
    },
    4: {
      color: '',
      text: '未完成',
    },
  };

  const actionRef = useRef<ActionType>();
  const [thirdPartyAccount, setThirdPartyAccount] = useState<API.ThirdPartyAccountVO[]>([]);

  //打开对话框
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [article, setArticle] = useState<Map<string, string>>(new Map<string, string>());
  const [articleTitle, setArtidleTitle] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    accountlist();
  }, []);
  const accountlist = async () => {
    const res = await getThirdPartyAccountListUsingGet();
    if (res.code === 0 && res.data) {
      setThirdPartyAccount(res.data);
    }
  };
  return (
    <div
      style={{
        backgroundColor: 'hsl(218,22%,7%)',
      }}
    >
      <ConfigProvider>
        <ProTable<API.TaskVO>
          columns={columns}
          actionRef={actionRef}
          // cardBordered
          request={async (params, sort, filter) => {
            const res = await listUsingGet1({
              pageSize: params.pageSize,
              pageCurrent: params.current,
              ...filter,
            });
            const records = res.data?.records;
            return {
              data: records,
              success: true,
              total: res?.total,
            };
          }}
          expandable={{
            expandedRowRender(record) {
              console.log('record', record);
              if (record.platFormAccount === null || record.platFormAccount === '') {
                return expandedRowRender(thirdPartyAccount, record, actionRef);
              }
            },
          }}
          rowKey="id"
          search={{
            labelWidth: 'auto',
          }}
          options={{
            setting: {
              listsHeight: 400,
            },
          }}
          dateFormatter="string"
        />
      </ConfigProvider>

      <ArticleModal
        title={articleTitle}
        loading={loading}
        open={open}
        onCancel={() => {
          setLoading(false);
          setOpen(false);
          setArtidleTitle('');
          setArticle(new Map<string, string>());
        }}
        values={article}
      />
    </div>
  );
};
