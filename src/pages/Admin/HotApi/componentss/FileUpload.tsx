import { excelAddUsingPost } from '@/services/hot-news/redianxinxijiekoude';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import React from 'react';

interface FileUploadProps {
  onSuccess?: () => void; // 上传成功后的回调函数
}

const FileUpload: React.FC<FileUploadProps> = ({ onSuccess }) => {
  // 校验文件内容
  const validateFile = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        // 检查文件是否为空
        if (!reader.result || reader.result.toString().length === 0) {
          message.error('文件内容不能为空！');
          resolve(false);
          return;
        }
        resolve(true);
      };

      reader.onerror = () => {
        message.error('文件读取失败！');
        resolve(false);
      };

      reader.readAsText(file);
    });
  };

  // 处理文件上传
  const handleUpload: UploadProps['onChange'] = async (info) => {
    const { file } = info;

    if (file.status === 'uploading') {
      return;
    }

    if (file.status === 'done') {
      try {
        // 先校验文件内容
        const isValid = await validateFile(file.originFileObj as File);
        if (!isValid) {
          return;
        }

        // 调用上传接口
        const res = await excelAddUsingPost({}, file.originFileObj as File);
        if (res.code === 0) {
          message.success('Excel导入成功');
          onSuccess?.(); // 调用成功回调，刷新表格
        } else {
          message.error(res.message || '导入失败');
        }
      } catch (e: any) {
        message.error('导入失败，' + e.message);
      }
    }
  };

  return (
    <Upload
      accept=".xlsx,.xls"
      showUploadList={false}
      maxCount={1}
      onChange={handleUpload}
      customRequest={({ onSuccess }) => {
        // 直接调用成功回调，实际上传在 onChange 中处理
        onSuccess?.({});
      }}
    >
      <Button type="primary" icon={<UploadOutlined />}>
        Excel导入
      </Button>
    </Upload>
  );
};

export default FileUpload;
