import CreateModal from '@/pages/Admin/HotApi/componentss/CreateModal';
import FileUpload from '@/pages/Admin/HotApi/componentss/FileUpload';
import UpdateModal from '@/pages/Admin/HotApi/componentss/UpdateModal';
import { findHotApiByIdUsingGet, listUsingGet1 } from '@/services/hot-news/redianxinxijiekoude';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button } from 'antd';
import { useRef, useState } from 'react';

export default () => {
  const columns: ProColumns<API.HotApiVO>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInSearch: true,
      hideInTable: true,
      hideInForm: true,
    },
    {
      title: '接口名称',
      dataIndex: 'apiName',
      valueType: 'text',
    },
    {
      title: '接口平台',
      dataIndex: 'platform',
      valueType: 'text',
    },
    {
      title: '请求接口地址',
      dataIndex: 'apiURL',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '描述',
      dataIndex: 'apiDescribe',
      valueType: 'text',
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="edit"
          type="primary"
          onClick={async () => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            setUpdateModalVisible(true);
            const res = await findHotApiByIdUsingGet({
              id: record.id,
            } as API.findHotApiByIdUsingGETParams);
            setHotApi(res?.data);
          }}
        >
          编 辑
        </a>,
      ],
    },
  ];
  const actionRef = useRef<ActionType>();
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const [hotApi, setHotApi] = useState<API.HotApiVO>(null);

  return (
    <PageContainer>
      <ProTable<API.HotApiVO>
        rowKey="id"
        columns={columns}
        actionRef={actionRef}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: 10,
        }}
        request={async (params) => {
          const res = await listUsingGet1({
            apiName: params.apiName,
            platform: params.platform,
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
          <FileUpload key="fileupload" />,
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
        oldData={hotApi}
        columns={columns}
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
