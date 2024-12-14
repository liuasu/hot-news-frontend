import { promptTemplateUtils } from '@/pages/Utils/utils';
import { editUsingPost4 } from '@/services/hot-news/aitishici';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';

interface Props {
  oldData?: API.PromptVO;
  visible: boolean;
  columns: ProColumns<API.PromptEditReq>[];
  onSubmit: (values: API.HotApiEditReq) => void;
  onCancel: () => void;
}

/**
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields: API.PromptEditReq) => {
  const hide = message.loading('正在更新');
  try {
    await editUsingPost4(fields);
    hide();
    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('更新失败，' + error.message);
    return false;
  }
};

/**
 * 更新弹窗
 * @param props
 * @constructor
 */
const UpdateModal: React.FC<Props> = (props) => {
  const { oldData, visible, columns, onSubmit, onCancel } = props;

  if (!oldData) {
    return <></>;
  }

  return (
    <Modal
      destroyOnClose
      title={'更新'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
    >
      <ProTable
        type="form"
        columns={columns}
        form={{
          initialValues: oldData,
        }}
        onSubmit={async (values: API.PromptEditReq) => {
          const success = await handleUpdate({
            id: oldData?.id as any,
            promptName: values.promptName,
            promptTemplate: promptTemplateUtils(values?.promptTemplate),
          });
          if (success) {
            onSubmit?.(values);
          }
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
