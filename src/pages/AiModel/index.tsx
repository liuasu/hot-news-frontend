import { editUsingPost, listUsingGet } from '@/services/hot-news/aimiyaopei';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, message } from 'antd';
import { useEffect, useRef, useState } from 'react';

export default () => {
  const columns: ProColumns<API.AiConfigVO>[] = [
    {
      dataIndex: 'id',
      title: 'ID',
      hideInTable: true,
    },
    {
      title: '模型平台',
      dataIndex: 'aiPlatFormName',
      readonly: true,
      width: '10%',
    },
    {
      dataIndex: 'aiPlatForm',
      hideInTable: true,
    },
    {
      title: '模型id',
      dataIndex: 'appId',
      ellipsis: true,
      editable: (text, record) => {
        return record.aiPlatForm === 'xinghuo';
      },
    },
    {
      title: 'apiKey',
      dataIndex: 'apiKey',
      ellipsis: true,
    },
    {
      title: 'apiSecret',
      dataIndex: 'apiSecret',
      ellipsis: true,
      editable: (text, record) => {
        return record.aiPlatForm === 'xinghuo';
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 250,
      render: (text, record, _, action) => [
        <Button key="editable">
          <a
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
          >
            编 辑
          </a>
        </Button>,
        <Button key="create" disabled={selectedAiModel === record.aiPlatForm}>
          <a
            onClick={() => {
              if (
                record.aiPlatForm === 'xinghuo' &&
                !record.appId &&
                !record.apiKey &&
                !record.apiSecret
              ) {
                message.error('请先填写appId、apiKey、apiSecret');
                return;
              }
              if (record.aiPlatForm !== 'xinghuo' && !record.apiKey) {
                message.error('请先填写apiKey');
                return;
              }
              // 设置值
              setSelectedAiModel(record.aiPlatForm as string);
              // 刷新表格
              action?.reload();
            }}
          >
            选择该模型生产
          </a>
        </Button>,
      ],
    },
  ];

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const actionRef = useRef<ActionType>();
  const [selectedAiModel, setSelectedAiModel] = useState<string>('');

  useEffect(() => {
    if (!selectedAiModel) {
      setSelectedAiModel(localStorage.getItem('selectedAiModel')); // 设置全局状态
    } else {
      localStorage.setItem('selectedAiModel', selectedAiModel);
    }
  }, [selectedAiModel]);

  return (
    <div
      style={{
        backgroundColor: 'hsl(218,22%,7%)',
      }}
    >
      <PageContainer>
        <ConfigProvider>
          <ProTable<API.AiConfigVO>
            rowKey="id"
            // 关闭默认的新建按钮
            recordCreatorProps={false}
            actionRef={actionRef}
            search={false}
            columns={columns}
            request={async () => {
              const res = await listUsingGet();
              return {
                data: res.data,
              };
            }}
            // onChange={setDataSource}
            editable={{
              type: 'multiple',
              editableKeys,
              onSave: async (rowKey, data) => {
                const res = await editUsingPost({
                  id: rowKey,
                  aiPlatForm: data.aiPlatForm,
                  apiKey: data.apiKey,
                  apiSecret: data.apiSecret,
                  appId: data.appId,
                } as API.AiConfigEditReq);
                if (res.code === 0) {
                  message.success('修改成功');
                } else {
                  message.error(res.message);
                }
              },
              onChange: setEditableRowKeys,
              actionRender: (row, config, dom) => [dom.save, dom.cancel],
            }}
          />
        </ConfigProvider>
      </PageContainer>
    </div>
  );
};
