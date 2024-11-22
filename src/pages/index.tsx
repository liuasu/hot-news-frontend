import { HotNewsCar } from '@/components/HotNewsCar';
import {
  biLiBiLiHotNewsUsingGet,
  dyHotNewsUsingGet,
  touTiaoHotNewsUsingGet,
} from '@/services/hot-news/pingtairedian';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
  // bilibili 热门新闻
  const [bilibiliHotList, setBilibiliHotList] = useState<API.HotNewsVO[]>([]);
  const [bilibiliDateTime, setBilibiliDateTime] = useState<Date>();
  const bilibiliHosts = async () => {
    const res = await biLiBiLiHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      // bilibiliHotList = res.data;
      setBilibiliHotList(res.data);
      setBilibiliDateTime(res.updateDateTime);
      console.log('bilibiliDateTime', bilibiliDateTime);
    }
  };

  // douyin 热门新闻
  const [dyHotList, setDyHotList] = useState<API.HotNewsVO[]>([]);
  const [dyDateTime, setDyDateTime] = useState<Date>();
  const dyHosts = async () => {
    const res = await dyHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setDyHotList(res.data);
      setDyDateTime(res.updateDateTime);
    }
  };

  // toutiao 热门新闻
  const [touTiaoHotList, setTouTiaoHotList] = useState<API.HotNewsVO[]>([]);
  const [touTiaoDateTime, setTouTiaoDateTime] = useState<Date>();
  const touTiaoHosts = async () => {
    const res = await touTiaoHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setTouTiaoHotList(res.data);
      setTouTiaoDateTime(res.updateDateTime);
    }
  };
  useEffect(() => {
    bilibiliHosts();
    dyHosts();
    touTiaoHosts();
  }, []);

  return (
    <PageContainer>
      <div
        style={{
          backgroundPosition: '100% -30%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '274px auto',
          backgroundImage:
            "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <HotNewsCar
            platFormName={'bilibili'}
            platFormURL={
              'https://s1.aigei.com/prevfiles/63af4c866bbf47c0a1d35ba709a6fd66.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:bpWjbRBO6xnoCBxVTEYFWewma_c='
            }
            hotList={bilibiliHotList}
            updateTime={bilibiliDateTime as Date}
          />
          <HotNewsCar
            platFormName={'抖音'}
            platFormURL={
              'https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg'
            }
            hotList={dyHotList}
            updateTime={dyDateTime as Date}
          />
          <HotNewsCar
            platFormName={'今日头条'}
            platFormURL={
              'https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg'
            }
            hotList={touTiaoHotList}
            updateTime={touTiaoDateTime as Date}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;
