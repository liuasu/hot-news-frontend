import CreateModal from '@/pages/Admin/Prompt/componentss/CreateModal';
import UpdateModal from '@/pages/Admin/Prompt/componentss/UpdateModal';
import { deleteUsingPost1, getByIdUsingGet, listUsingGet5 } from '@/services/hot-news/aitishici';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message } from 'antd';
import { useEffect, useRef, useState } from 'react';

export default () => {
  const columns: ProColumns<API.PromptVO>[] = [
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
          <Button
            type={'primary'}
            key="creat"
            disabled={promptLocalStorage === record.promptName}
            onClick={() => {
              {
                setPromptLocalStorage(record.promptName as string);
              }
            }}
          >
            <a>选择该提示词</a>
          </Button>,
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
                const res = await deleteUsingPost1({
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
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [updateModalData, setUpdateModalData] = useState<API.PromptVO>();
  const maxPromptCount = 3; // 最大提示词数量
  const [promptSize, setPromptSize] = useState(0);
  const promptCount = () => {
    const number = promptSize - 2;
    if (number === maxPromptCount) {
      return '提示词数量已达到最大限制';
    } else {
      return '可创建的提示词为' + (maxPromptCount - number) + '个';
    }
  };

  const [promptLocalStorage, setPromptLocalStorage] = useState<string>('');

  useEffect(() => {
    if (!promptLocalStorage) {
      setPromptLocalStorage(localStorage.getItem('promptLocalStorage')); // 设置全局状态
    } else {
      localStorage.setItem('promptLocalStorage', promptLocalStorage);
    }
  }, [promptLocalStorage]);

  return (
    <PageContainer>
      <ProTable<API.PromptVO>
        headerTitle={promptCount()}
        rowKey="id"
        columns={columns}
        actionRef={actionRef}
        search={false}
        request={async () => {
          const res = await listUsingGet5();
          setPromptSize(res.data.length);
          return {
            data: res.data,
            success: true,
          };
        }}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            disabled={promptSize - 2 === maxPromptCount}
            onClick={() => {
              if (promptSize - 2 === maxPromptCount) {
                message.error('提示词数量已达到最大限制');
                return;
              }
              setCreateModalVisible(true);
            }}
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
