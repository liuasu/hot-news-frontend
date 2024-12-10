import { Divider, Modal, Result, Skeleton } from 'antd';
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
        open={open}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
        maskClosable={false}
      >
        {loading ? (
          // 加载状态显示骨架屏
          <Skeleton active paragraph={{ rows: 4 }} />
        ) : (
          // 非加载状态显示内容
          Array.from(values.keys()).map((key) => (
            <div key={key}>
              {values.get(key) != null ? (
                <>
                  <Divider orientation="left">文章1</Divider>
                  <h3>《{values.get(key)?.title}》</h3>
                  <p>{values.get(key)?.conText}</p>
                </>
              ) : (
                <Result status="success" title="暂无相关文章" />
              )}
            </div>
          ))
        )}
      </Modal>
    </>
  );
};

export default App;
