import { Divider, Modal, Skeleton } from 'antd';
import React from 'react';

const App: React.FC<{
  title: string;
  open: boolean;
  loading: boolean;
  onCancel: () => void;
  values: Map<string, string>;
}> = ({ title, open, loading, onCancel, values }) => {
  return (
    <>
      <Modal
        width={800}
        title={<p>{title}</p>}
        loading={loading}
        open={open}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        {values.size === 0 && <Skeleton />}

        {values.has('editing_1') && (
          <>
            <Divider orientation="left">文章1</Divider>
            <p>{values.get('editing_1')}</p>
          </>
        )}

        {values.has('editing_2') && (
          <>
            <Divider>文章2</Divider>
            <p>{values.get('editing_2')}</p>
          </>
        )}

        {values.has('editing_3') && (
          <>
            <Divider orientation="right">文章3</Divider>
            <p>{values.get('editing_3')}</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default App;
