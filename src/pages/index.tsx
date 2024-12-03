import { HotNewsCar } from '@/components/HotNewsCar';
import {
  biLiBiLiHotNewsUsingGet,
  dyHotNewsUsingGet,
  thePaPerHotNewsUsingGet,
  thirtySixKrHotNewsUsingGet,
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
      setBilibiliDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };

  // douyin 热门新闻
  const [dyHotList, setDyHotList] = useState<API.HotNewsVO[]>([]);
  const [dyDateTime, setDyDateTime] = useState<Date>();
  const dyHosts = async () => {
    const res = await dyHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setDyHotList(res.data);
      setDyDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };

  // toutiao 热门新闻
  const [touTiaoHotList, setTouTiaoHotList] = useState<API.HotNewsVO[]>([]);
  const [touTiaoDateTime, setTouTiaoDateTime] = useState<Date>();
  const touTiaoHosts = async () => {
    const res = await touTiaoHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setTouTiaoHotList(res.data);
      setTouTiaoDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };
  // 澎湃 热门新闻
  const [thePaPerHotList, setThePaPerHotList] = useState<API.HotNewsVO[]>([]);
  const [thePaPerDateTime, setThePaPerDateTime] = useState<Date>();
  const thePaPerHosts = async () => {
    const res = await thePaPerHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setThePaPerHotList(res.data);
      setThePaPerDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };

  // 36ke 热门新闻
  const [thirtySixHotList, setThirtySixHotList] = useState<API.HotNewsVO[]>([]);
  const [thirtySixDateTime, sethirtySixDateTime] = useState<Date>();
  const thirtySixHosts = async () => {
    const res = await thirtySixKrHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      setThirtySixHotList(res.data);
      sethirtySixDateTime(res.currentDateTime);
      return res;
    }
    return [] as API.HotNewsVO[];
  };
  useEffect(() => {
    bilibiliHosts();
    dyHosts();
    touTiaoHosts();
    thePaPerHosts();
    thirtySixHosts();
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
            gap: 20,
            padding: '0 6vw 0',
          }}
        >
          <HotNewsCar
            platFormName={'bilibili'}
            platFormURL={
              'https://s1.aigei.com/prevfiles/63af4c866bbf47c0a1d35ba709a6fd66.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:bpWjbRBO6xnoCBxVTEYFWewma_c='
            }
            hotList={bilibiliHotList}
            updateTime={bilibiliDateTime as Date}
            fetchData={bilibiliHosts}
          />

          <HotNewsCar
            platFormName={'抖音'}
            platFormURL={
              'https://s1.aigei.com/src/img/png/5b/5b26e982f0b34c47817d3b40c9bf2d1f.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:YCO6IvUtFIqf6x1hmy82VctIElo='
            }
            hotList={dyHotList}
            updateTime={dyDateTime as Date}
            fetchData={dyHosts}
          />

          <HotNewsCar
            platFormName={'今日头条'}
            platFormURL={
              'https://s1.aigei.com/src/img/png/bf/bf15b494f6a1443f938ba50e1e48c0e8.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:2ak54TXknIhA5_J-9eqx5kPH19A='
            }
            hotList={touTiaoHotList}
            updateTime={touTiaoDateTime as Date}
            fetchData={touTiaoHosts}
          />
          <HotNewsCar
            platFormName={'澎湃新闻'}
            platFormURL={
              'https://s1.aigei.com/src/img/png/25/25c51ce70f264a30a54ada7b2618ef99.png?imageMogr2/auto-orient/thumbnail/!132x132r/gravity/Center/crop/132x132/quality/85/%7CimageView2/2/w/132&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:W7Qm1G5Hw3RE-MgRhEHTd110t2w='
            }
            hotList={thePaPerHotList}
            updateTime={thePaPerDateTime as Date}
            fetchData={thePaPerHosts}
          />

          <HotNewsCar
            platFormName={'36氪'}
            platFormURL={
              'https://s1.aigei.com/src/img/png/25/25c51ce70f264a30a54ada7b2618ef99.png?imageMogr2/auto-orient/thumbnail/!132x132r/gravity/Center/crop/132x132/quality/85/%7CimageView2/2/w/132&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:W7Qm1G5Hw3RE-MgRhEHTd110t2w='
            }
            hotList={thirtySixHotList}
            updateTime={thirtySixDateTime as Date}
            fetchData={thirtySixHosts}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;
