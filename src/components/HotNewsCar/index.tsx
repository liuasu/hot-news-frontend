import { Card, Image, List } from 'antd';
import React from 'react';
import HotNewsVO = API.HotNewsVO;

export const HotNewsCar: React.FC<{
  title: string;
  index: number;
  desc: string;
  hotList: HotNewsVO[];
}> = ({ title, href, index, desc }) => {
  return (
    <div>
      <Card
        title={
          <>
            <Image
              preview={false}
              style={{ width: 30, height: 30 }}
              src={
                'https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg'
              }
            />
            <span>BiliBili</span>
          </>
        }
        extra={'热门榜'}
        style={{ width: 300 }}
      >
        <List>
          <VirtualList data={bilibiliHotList} itemHeight={47} itemKey="email" height={400}>
            {(item: HotNewsVO) => (
              <List.Item key={item.biId}>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.hotDesc}
                />
                <div>Content</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
      </Card>
    </div>
  );
};
