import { platFormAccountMap } from '@/pages/Utils/utils';
import { getThirdPartyAccountListByAccountCentreUsingGet } from '@/services/hot-news/zhanghaozhongxin';
import { CloseOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, ConfigProvider, FloatButton, message, Modal, Spin, Table } from 'antd';
import { useEffect, useRef, useState } from 'react';

export default () => {
  const [editedValues] = useState<Map<string, { status?: string; taskCount?: number }>>(() => {
    const savedValues = localStorage.getItem('editedValues');
    if (savedValues) {
      return new Map(JSON.parse(savedValues));
    }
    return new Map();
  });

  const saveToLocalStorage = (account: string, values: { status?: string; taskCount?: number }) => {
    editedValues.set(account, values);
    localStorage.setItem('editedValues', JSON.stringify(Array.from(editedValues.entries())));
  };

  const columns: ProColumns<API.ThirdPartyAccountVO>[] = [
    {
      title: '昵称',
      dataIndex: 'userName',
      valueType: 'text',
      editable: false,
    },
    {
      title: '账号',
      dataIndex: 'account',
      valueType: 'text',
      editable: false,
    },
    {
      title: '平台',
      dataIndex: 'platForm',
      valueType: 'text',
      editable: false,
      render: (text, record) => {
        return platFormAccountMap[record.platForm].text;
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      initialValue: 'inactive',
      valueEnum: {
        active: { text: '激活', status: 'Success' },
        inactive: { text: '未激活', status: 'Error' },
        pending: { text: '待处理', status: 'Processing' },
      },
    },
    {
      title: '任务数',
      dataIndex: 'taskCount',
      valueType: 'digit',
      ellipsis: true,
      fieldProps: {
        min: 1,
        max: 15,
      },
      initialValue: 15,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <Button
          key="edit"
          onClick={() => {
            setEditableKeys([record.account]);
          }}
        >
          编辑
        </Button>,
        editableKeys.includes(record.account) && (
          <Button
            key="save"
            type="primary"
            onClick={() => {
              action?.cancelEditable?.(record.account);
              saveToLocalStorage(record.account, {
                status: record.status,
                taskCount: record.taskCount,
              });
              setEditableKeys([]);
              message.success('保存成功');
            }}
          >
            保存
          </Button>
        ),
      ],
    },
  ];

  // <Button onClick={}>Display a loading indicator</Button>

  const actionRef = useRef<ActionType>();
  const [spinning, setSpinning] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [accountList, setAccountList] = useState<API.ThirdPartyAccountVO[]>([]);
  const [showFloatButton, setShowFloatButton] = useState(false);
  const [editableKeys, setEditableKeys] = useState<React.Key[]>([]);

  const handleTrusteeship = (selectedRows: API.ThirdPartyAccountVO[]) => {
    const trusteeshipData = selectedRows.map((row) => {
      const editedValue = editedValues.get(row.account);
      return {
        account: row.account,
        userName: row.userName,
        platForm: row.platForm,
        status: editedValue?.status || row.status,
        taskCount: editedValue?.taskCount || row.taskCount || 15,
      };
    });

    console.log('托管数据:', trusteeshipData);
    setShowFloatButton(true);
  };

  const getValueFromStorage = (account: string) => {
    const savedValues = localStorage.getItem('editedValues');
    if (savedValues) {
      const valuesMap = new Map(JSON.parse(savedValues));
      return valuesMap.get(account);
    }
    return null;
  };
  // 页面加载时检查localStorage中的状态
  useEffect(() => {
    const savedState = localStorage.getItem('aiTrusteeshipState');
    if (savedState) {
      const {
        spinning: savedSpinning,
        modal2Open: savedModal2Open,
        showFloatButton: savedShowFloatButton,
      } = JSON.parse(savedState);
      setSpinning(savedSpinning);
      setModal2Open(savedModal2Open);
      setShowFloatButton(savedShowFloatButton);
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'hsl(218,22%,7%)',
      }}
    >
      <PageContainer>
        <ConfigProvider>
          <ProTable<API.ThirdPartyAccountVO>
            columns={columns}
            actionRef={actionRef}
            // cardBordered
            search={false}
            rowKey={'account'}
            options={{
              setting: {
                listsHeight: 400,
              },
            }}
            dateFormatter="string"
            rowSelection={{
              type: 'checkbox',
              // 注释该行则默认不显示下拉选项
              selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
              onChange: (selectedRowKeys, selectedRows) => {
                setAccountList(selectedRows);
              },
            }}
            toolBarRender={() => [
              <Button
                key="create"
                type="primary"
                onClick={() => {
                  if (accountList.length === 0) {
                    message.error('请选择托管账号');
                    return;
                  }
                  handleTrusteeship(accountList);
                }}
              >
                开始托管
              </Button>,
            ]}
            request={async () => {
              const res = await getThirdPartyAccountListByAccountCentreUsingGet();
              let list = [];
              res.data.forEach((item) => {
                item.thirdPartyAccountVOList.forEach((record: API.ThirdPartyAccountVO) => {
                  const savedValue = getValueFromStorage(record.account);
                  list.push({
                    ...record,
                    status: savedValue?.status || 'inactive',
                    taskCount: savedValue?.taskCount || 15,
                  });
                });
              });
              return {
                data: list,
                success: true,
              };
            }}
            editable={{
              type: 'single',
              editableKeys,
              onChange: setEditableKeys,
              onSave: async (rowKey, data, row) => {
                console.log('保存行数据:', data);
                saveToLocalStorage(rowKey as string, {
                  status: data.status,
                  taskCount: data.taskCount,
                });
                return true;
              },
            }}
            recordCreatorProps={false}
            form={{
              initialValues: {
                taskCount: 15,
                status: 'inactive',
              },
            }}
          />
        </ConfigProvider>

        {showFloatButton && (
          <FloatButton
            onClick={() => {
              setSpinning(true);
              setModal2Open(true);
              // 保存状态到 localStorage
              localStorage.setItem(
                'aiTrusteeshipState',
                JSON.stringify({
                  spinning: true,
                  modal2Open: true,
                  showFloatButton: true,
                }),
              );
            }}
          />
        )}

        <Modal
          title="托管中!(取消请关闭该窗口)"
          centered
          open={modal2Open}
          closeIcon={
            <CloseOutlined
              onClick={() => {
                setModal2Open(false);
                setSpinning(false);
                setShowFloatButton(false);
                // 清除状态
                localStorage.removeItem('aiTrusteeshipState');
              }}
            />
          }
          onCancel={(e) => {
            if (e?.target === e?.currentTarget) {
              setModal2Open(false);
              // setModal2Open(false);
              // setSpinning(false);
              // setShowFloatButton(false);
              // // 清除状态
              // localStorage.removeItem('aiTrusteeshipState');
            }
          }}
          maskClosable={true}
          footer={null}
        >
          <Spin spinning={spinning} />
        </Modal>
      </PageContainer>
    </div>
  );
};
