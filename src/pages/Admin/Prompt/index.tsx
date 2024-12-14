import CreateModal from '@/pages/Admin/Prompt/componentss/CreateModal';
import UpdateModal from '@/pages/Admin/Prompt/componentss/UpdateModal';
import { deleteUsingPost, getByIdUsingGet, listUsingGet3 } from '@/services/hot-news/aitishici';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message } from 'antd';
import React, { useRef } from 'react';

export default () => {
  const columns: ProColumns<API.PromptVO>[] = [
    // createTime
    // userAvatar
    // userName
    // userRole
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInSearch: true,
      hideInTable: true,
      hideInForm: true,
    },
    {
      title: '提示词名称',
      dataIndex: 'promptName',
      valueType: 'text',
      hideInSearch: true,
      width: 300,
    },
    {
      title: '提示词模板',
      dataIndex: 'promptTemplate',
      valueType: 'text',
      tooltip: '建议复制后进行查看',
      ellipsis: true,
      copyable: true,
      hideInSearch: true,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      width: 300,
      render: (dom, record, _, action) => {
        return [
          <Button type={'primary'} key="edit">
            <a
              onClick={async () => {
                const res = await getByIdUsingGet({
                  id: record.id,
                } as API.getByIdUsingGETParams);
                if (res.code === 0) {
                  setUpdateModalVisible(true);
                  setUpdateModalData(res?.data);
                }
              }}
            >
              编 辑
            </a>
          </Button>,
          <Button type={'primary'} danger key="delete">
            <a
              onClick={async () => {
                const res = await deleteUsingPost({
                  id: record.id,
                } as API.deleteUsingPOSTParams);
                if (res.code === 0) {
                  message.success('编辑成功');
                  action?.reload();
                } else {
                  message.error('编辑失败,' + res.message);
                }
              }}
            >
              删 除
            </a>
          </Button>,
        ];
      },
    },
  ];
  const actionRef = useRef<ActionType>();
  const [createModalVisible, setCreateModalVisible] = React.useState(false);
  const [updateModalVisible, setUpdateModalVisible] = React.useState(false);
  const [updateModalData, setUpdateModalData] = React.useState<API.PromptVO>();

  return (
    <PageContainer>
      <ProTable<API.PromptVO>
        rowKey="id"
        columns={columns}
        actionRef={actionRef}
        search={false}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: 10,
        }}
        request={async (params) => {
          const res = await listUsingGet3({
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
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => setCreateModalVisible(true)}
          >
            新建
          </Button>,
        ]}
      />
      <CreateModal
        visible={createModalVisible}
        columns={columns}
        onSubmit={() => {
          setCreateModalVisible(false);
          actionRef.current?.reload();
        }}
        onCancel={() => {
          setCreateModalVisible(false);
        }}
      />
      <UpdateModal
        visible={updateModalVisible}
        columns={columns}
        oldData={updateModalData}
        onSubmit={() => {
          setUpdateModalVisible(false);
          actionRef.current?.reload();
        }}
        onCancel={() => {
          setUpdateModalVisible(false);
        }}
      />
    </PageContainer>
  );
};
