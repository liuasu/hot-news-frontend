import { RedoOutlined } from '@ant-design/icons';
import { Button, Card, Image, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React from 'react';

export const HotNewsCar: React.FC<{
  platFormName: string;
  platFormURL: string;
  hotList: API.HotNewsVO[];
}> = ({ platFormName, platFormURL, hotList }) => {
  return (
    <div>
      <Card
        title={
          <>
            <Image preview={false} style={{ width: 30, height: 30 }} src={platFormURL} />
            <span>{platFormName}</span>
          </>
        }
        extra={'热门榜'}
        style={{ width: 350 }}
        actions={[
          // eslint-disable-next-line react/jsx-key
          <span>刚刚更新</span>,
          // eslint-disable-next-line react/jsx-key
          <Button type="primary" shape="circle" icon={<RedoOutlined />} />,
        ]}
        bordered={true}
      >
        <List>
          <VirtualList data={hotList} height={250} itemHeight={40} disabled={true}>
            {(item: API.HotNewsVO, index) => (
              <List.Item key={item.id !== null ? item.id : item.biId}>
                <List.Item.Meta
                  title={
                    <>
                      <span>{index + 1}、</span>
                      <a href="">{item.title}</a>
                    </>
                  }
                />
              </List.Item>
            )}
          </VirtualList>
        </List>
      </Card>
    </div>
  );
};
