import ArticleModal from '@/components/ArticleModal';
import { hotNewsMap, platFormAccountMap, statusMap } from '@/pages/Utils/utils';
import { productionArticleUsingPost } from '@/services/hot-news/aiwenzhangshengcheng';
import {
  deleteUsingPost1,
  hotNewsQueryArticlesUsingPost,
  listUsingGet5,
} from '@/services/hot-news/renwuzhongxin';
import { getThirdPartyAccountListUsingGet } from '@/services/hot-news/zhanghaozhongxin';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, message, Tag } from 'antd';
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
        {
          title: '平台',
          dataIndex: 'platForm',
          valueType: 'text',
          render: (text, record) => {
            return platFormAccountMap[record.platForm].text;
          },
        },
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
                const res = await editUsingPost6({
                  id: task.id,
                  platFormAccount: record.account,
                  platForm: record.platForm,
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
      valueType: 'select',
      width: 200,
      valueEnum: platFormAccountMap, // 使用 valueEnum 进行筛选

      render: (text, record) => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const matchedItem = thirdPartyAccount.find(
          (item) => item.account === record.platFormAccount,
        );
        if (matchedItem) {
          return matchedItem.userName;
        }
        return '-'; // 或者你可以返回一个默认值
      },
    },
    {
      title: '账号平台',
      ellipsis: true,
      search: false,
      render: (text, record) => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const matchedItem = thirdPartyAccount.find(
          (item) => item.account === record.platFormAccount,
        );
        if (matchedItem) {
          return platFormAccountMap[matchedItem.platForm].text;
        }
        return '-'; // 或者你可以返回一个默认值
      },
    },
    {
      title: '任务名称',
      dataIndex: 'taskName',
      ellipsis: true,
      search: false,
    },
    {
      title: '标题',
      dataIndex: 'hotNewTitle',
      ellipsis: true,
      search: false,
    },
    {
      title: '热点平台',
      dataIndex: 'hotPlatForm',
      search: false,

      render: (text, record) => {
        if (!record.hotPlatForm) {
          return '-';
        }
        return hotNewsMap[record.hotPlatForm];
      },
    },

    {
      disable: true,
      title: '状态',
      dataIndex: 'taskStatus',
      onFilter: true,
      ellipsis: true,
      valueType: 'select',
      width: 100,
      // statusMap[((Math.floor(record.taskStatus * 10) % 5) + '') as '0']
      render: (_, record) => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        <Tag color={statusMap[record.taskStatus].color}>
          {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
          {statusMap[record.taskStatus].text}
          {/*{statusMap[(Math.floor(record.taskStatus * 10) % 5) + ''].text}*/}
        </Tag>
      ),
      valueEnum: statusMap,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (text, record: API.TaskVO, _, action) => [
        // eslint-disable-next-line react/jsx-key
        <Button type="primary">
          <a
            onClick={async () => {
              const map = new Map<string, string>();
              try {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                setOpen(true);
                const hotNewTitle: any = record?.hotNewTitle;
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                setArtidleTitle(hotNewTitle);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const res = await hotNewsQueryArticlesUsingPost({
                  title: record.hotNewTitle,
                  hotURL: record.hotUrl,
                  platformName: record.hotPlatForm,
                } as API.ProductionArticleAddReq1);
                if (res.code === 0) {
                  const data = res.data;
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
              } catch (e) {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                setLoading(false);
              }
            }}
          >
            查 看
          </a>
        </Button>,
        // eslint-disable-next-line react/jsx-key
        <Button type="primary" disabled={record.taskStatus === 1}>
          <a
            onClick={async () => {
              if (record.platFormAccount === null) {
                message.error('请先选择平台账号');
              }
              const matchedItem = thirdPartyAccount.find(
                (item) => item.account === record.platFormAccount,
              );
              let thirdPartyFormName;
              if (matchedItem) {
                thirdPartyFormName = platFormAccountMap[matchedItem.platForm].values;
              }
              try {
                const res = await productionArticleUsingPost({
                  aiPlatForm: 'zhipu',
                  hotURL: record.hotUrl,
                  taskId: record.id,
                  thirdPartyFormName: thirdPartyFormName + 'Chrome',
                  title: record.hotNewTitle,
                  userIdStr: record.platFormAccount,
                  thirdHotPartyFormName: record.hotPlatForm,
                } as API.ProductionArticleAddReq);
                if (res.code === 0) {
                  message.success('生成成功');
                  action?.reload();
                }
              } catch (e) {
                message.error('生成失败');
              }
            }}
          >
            生 成
          </a>
        </Button>,
        // eslint-disable-next-line react/jsx-key
        <Button type="primary" danger disabled={record.taskStatus === 1}>
          <a
            onClick={async () => {
              const res = await deleteUsingPost1({
                id: record.id,
              } as API.deleteUsingPOSTParams);
              if (res.code === 0) {
                message.success('已取消');
                action?.reload();
              }
            }}
          >
            取 消
          </a>
        </Button>,
      ],
    },
  ];

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
      <PageContainer>
        <ConfigProvider>
          <ProTable<API.TaskVO>
            columns={columns}
            actionRef={actionRef}
            pagination={{
              showSizeChanger: true,
              defaultPageSize: 10,
            }}
            request={async (params) => {
              const res = await listUsingGet5({
                pageSize: params.pageSize,
                current: params.current,
                platForm: params.platFormAccount,
                taskStatus: params.taskStatus,
              } as API.listUsingGET5Params);
              const records = res.data?.records;
              return {
                data: records,
                success: true,
                total: res.data?.total,
              };
            }}
            expandable={{
              expandedRowRender(record) {
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
      </PageContainer>
    </div>
  );
};
