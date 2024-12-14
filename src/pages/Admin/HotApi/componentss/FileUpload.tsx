import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Upload
    listType=".xlsx, .xls"
    name={'file'}
    action={''}
    // onChange={
    // async (file) => {
    //   if (file.file.status === 'done') {
    //     try {
    //       const res = await excelAddUsingPost({
    //         file: file.file,
    //       });
    //       if (res.code === 0) {
    //         message.success('添加成功');
    //       }
    //     } catch (e) {
    //       message.error('添加失败，' + e.message);
    //     }
    //   }
    // }}

    // }}
  >
    <Button type="primary" icon={<UploadOutlined />}>
      exel导入
    </Button>
  </Upload>
);

export default App;
