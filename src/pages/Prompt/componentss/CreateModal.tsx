import { promptTemplateUtils } from '@/pages/Utils/utils';
import { addUsingPost2 } from '@/services/hot-news/aitishici';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { message, Modal } from 'antd';
import React from 'react';

interface Props {
  visible: boolean;
  columns: ProColumns<API.PromptVO>[];
  onSubmit: (values: API.PromptAddReq) => void;
  onCancel: () => void;
}

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.PromptAddReq) => {
  const hide = message.loading('正在添加');
  try {
    await addUsingPost2({
      promptName: fields.promptName,
      promptTemplate: promptTemplateUtils(fields?.promptTemplate),
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('添加失败，' + error.message);
    return false;
  }
};

/**
 * 创建弹窗
 * @param props
 * @constructor
 */
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onSubmit, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title={'创建'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
      maskClosable={false}
    >
      <ProTable
        type="form"
        columns={columns}
        onSubmit={async (values: API.PromptAddReq) => {
          const success = await handleAdd(values);
          if (success) {
            onSubmit?.(values);
          }
        }}
      />
    </Modal>
  );
};
export default CreateModal;
