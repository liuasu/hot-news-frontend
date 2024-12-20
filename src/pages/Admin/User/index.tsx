import CreateModal from '@/pages/Admin/User/componentss/CreateModal';
import { userRolesMap } from '@/pages/Utils/utils';
import {
  deleteUserUsingPost,
  listUserByPageUsingPost,
  updateUserUsingPost,
} from '@/services/hot-news/userController';
import { useModel } from '@@/plugin-model';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Tag } from 'antd';
import React, { useRef } from 'react';

export default () => {
  const columns: ProColumns<API.UserVO>[] = [
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
      title: '账号',
      dataIndex: 'userAccount',
      valueType: 'text',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '头像',
      dataIndex: 'userAvatar',
      valueType: 'text',
      hideInSearch: true,
      hideInForm: true,
      render: (dom, record) => {
        return (
          <>
            <img src={record.userAvatar} alt="头像" style={{ width: '50px', height: '50px' }} />
          </>
        );
      },
    },
    {
      title: '角色',
      dataIndex: 'userRole',
      valueType: 'text',
      render: (_, record) => {
        return (
          <>
            <Tag color={userRolesMap[record.userRole].color}>
              {userRolesMap[record.userRole].text}
            </Tag>
          </>
        );
      },
      valueEnum: userRolesMap,
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      valueType: 'date',
      hideInForm: true,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (dom, record, _, action) => {
        return [
          <Button type={'primary'} key="edit" disabled={currentUser.id === record.id}>
            <a
              onClick={async () => {
                const res = await updateUserUsingPost({
                  id: record.id,
                  userRole: record.userRole === 'ban' ? 'user' : 'ban',
                });
                if (res.code === 0) {
                  message.success('操作成功');
                  action?.reload();
                } else {
                  message.error('操作失败');
                }
              }}
            >
              {record.userRole === 'ban' ? '拉出小黑屋' : '拉进小黑屋'}
            </a>
          </Button>,
          <Button type={'primary'} danger key="delete" disabled={currentUser.id === record.id}>
            <a
              onClick={async () => {
                const res = await deleteUserUsingPost({
                  id: record.id,
                });
                if (res.code === 0) {
                  message.success('操作成功');
                  action?.reload();
                } else {
                  message.error('操作失败');
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
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser;
  const actionRef = useRef<ActionType>();
  const [createModalVisible, setCreateModalVisible] = React.useState(false);

  return (
    <PageContainer>
      <ProTable<API.UserVO>
        rowKey="id"
        columns={columns}
        actionRef={actionRef}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: 10,
        }}
        request={async (params) => {
          const res = await listUserByPageUsingPost({
            userAccount: params.userAccount,
            userName: params.userName,
            userRole: params.userRole,
            createTime: params.createTime,
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
    </PageContainer>
  );
};
