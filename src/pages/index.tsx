import { HotNewsCar } from '@/components/HotNewsCar';
import { biLiBiLiHotNewsUsingGet } from '@/services/hot-news/pingtairedian';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
  // let bilibiliHotList = [];
  const [bilibiliHotList, setBilibiliHotList] = useState<API.HotNewsVO[]>([]);
  const bilibiliHosts = async () => {
    const res = await biLiBiLiHotNewsUsingGet();
    if (res.code === 0 && res.data) {
      // bilibiliHotList = res.data;
      setBilibiliHotList(res.data);
    }
  };

  useEffect(() => {
    bilibiliHosts();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // setBilibiliHotList(dataSource);
  }, []);

  const dataSource = [
    {
      id: null,
      biId: 'BV1omUfYRE8F',
      title: '逐句解析！为什么最爱的人会说出最伤人的话？深度解读《花束般的恋爱》',
      hotURL: 'https://b23.tv/BV1omUfYRE8F',
      imageURL: 'http://i1.hdslb.com/bfs/archive/eab111a60ef7e1f6dfda765810b1cc8a959e178b.jpg',
      hotDesc:
        '这是一部先甜后狠的电影\n有人说千万别看\n因为情侣看完会马上分手\n单身看完则会爱情观崩塌\n有人说一定要看\n只有看完，才能真正了解爱情的真相\n\n今天，我们继续逐帧解析\n这部被71万人打出8.6分\n却又几乎没人完全看懂的佳作\n《花束般的恋爱》\n\n每一期《25格》都要花费很多心血\n还请大家多多点赞、投币、收藏\n并将它分享给你同样爱电影的朋友\n谢谢你们的支持！~',
    },
    {
      id: null,
      biId: 'BV1WeUfYvERr',
      title: '俄罗斯女生的花期都短吗？',
      hotURL: 'https://b23.tv/BV1WeUfYvERr',
      imageURL: 'http://i0.hdslb.com/bfs/archive/8d3d1ab6aebb81b0d0235e56499e5732904c4834.jpg',
      hotDesc: '-',
    },
    {
      id: null,
      biId: 'BV13Lm8YwExR',
      title: '乔迪婚礼，今天终于把乔迪“嫁”出去了，看我怎么用中式震撼炸街',
      hotURL: 'https://b23.tv/BV13Lm8YwExR',
      imageURL: 'http://i1.hdslb.com/bfs/archive/696e7a68f7c4ac5623645fe7b39427b0281b2d01.jpg',
      hotDesc: '',
    },
    {
      id: null,
      biId: 'BV1omUfYRE8F',
      title: '逐句解析！为什么最爱的人会说出最伤人的话？深度解读《花束般的恋爱》',
      hotURL: 'https://b23.tv/BV1omUfYRE8F',
      imageURL: 'http://i1.hdslb.com/bfs/archive/eab111a60ef7e1f6dfda765810b1cc8a959e178b.jpg',
      hotDesc:
        '这是一部先甜后狠的电影\n有人说千万别看\n因为情侣看完会马上分手\n单身看完则会爱情观崩塌\n有人说一定要看\n只有看完，才能真正了解爱情的真相\n\n今天，我们继续逐帧解析\n这部被71万人打出8.6分\n却又几乎没人完全看懂的佳作\n《花束般的恋爱》\n\n每一期《25格》都要花费很多心血\n还请大家多多点赞、投币、收藏\n并将它分享给你同样爱电影的朋友\n谢谢你们的支持！~',
    },
    {
      id: null,
      biId: 'BV1WeUfYvERr',
      title: '俄罗斯女生的花期都短吗？',
      hotURL: 'https://b23.tv/BV1WeUfYvERr',
      imageURL: 'http://i0.hdslb.com/bfs/archive/8d3d1ab6aebb81b0d0235e56499e5732904c4834.jpg',
      hotDesc: '-',
    },
    {
      id: null,
      biId: 'BV13Lm8YwExR',
      title: '乔迪婚礼，今天终于把乔迪“嫁”出去了，看我怎么用中式震撼炸街',
      hotURL: 'https://b23.tv/BV13Lm8YwExR',
      imageURL: 'http://i1.hdslb.com/bfs/archive/696e7a68f7c4ac5623645fe7b39427b0281b2d01.jpg',
      hotDesc: '',
    },
    {
      id: null,
      biId: 'BV184SAYdELT',
      title: '黑神话随机罐子挑战赛！#3',
      hotURL: 'https://b23.tv/BV184SAYdELT',
      imageURL: 'http://i1.hdslb.com/bfs/archive/c197304d2fb652701bba4054cb4a844ba81b54e1.jpg',
      hotDesc:
        '纯属娱乐，切勿当真！图个乐子，别吵架哦！\n感谢参演大佬们：\n@智能路障 @南云鸟羽 @尾巴尾巴啊 @村头卡师傅 @Shi咪 @楚天明c    \n@疾风华莱士 @洛恩佐Lorenzo @直言trigger @UCYU @寨子Jazz    \n@孤独音符 @Tdogegg @威尔木木 @逗比的预言家 \n感谢MOD制作者：@禽兽-云轩 @风魔小姐姐    \n感谢摄影后期：@拇指曙光    \n感谢部分后期：@安藤清歌 @什肆是十四',
    },
    {
      id: null,
      biId: 'BV1m6STYYEGb',
      title: '跟无穷小亮游北京什么体验？狐：今天形象管理过了【互联网脚替12】',
      hotURL: 'https://b23.tv/BV1m6STYYEGb',
      imageURL: 'http://i2.hdslb.com/bfs/archive/00475a32364f3ce733a9006ae466e0e154db601f.jpg',
      hotDesc:
        '如果你听不懂我的科普，那我也略通一些拳脚！\n这期互联网脚替由小亮老师带大家来游北京啦哈哈哈，量大管饱，不一样的小亮老师和北京～希望大家喜欢的话多多三连呀',
    },
    {
      id: null,
      biId: 'BV19UUpYEEkq',
      title: '太好了是状元九族没救了',
      hotURL: 'https://b23.tv/BV19UUpYEEkq',
      imageURL: 'http://i0.hdslb.com/bfs/archive/7cf52f362516f569bf304465e2759771bf7935d0.jpg',
      hotDesc: '',
    },
    {
      id: null,
      biId: 'BV1VqSFYpE8Z',
      title: '影视飓风开车去罗马｜第3期',
      hotURL: 'https://b23.tv/BV1VqSFYpE8Z',
      imageURL: 'http://i1.hdslb.com/bfs/archive/f8085ec3d3e68150681e5dc53cb7d11a4d6056d7.jpg',
      hotDesc:
        '2024年夏天，我们决定驾驶15000多公里，把车从中国开到罗马，开启一段漫长的旅程。上一期节目中影视飓风小分队驱车从拉脱维亚里加一路驾车行驶到了捷克布拉格。这一次我们将穿越德国慕尼黑、瑞士因特拉肯、意大利比萨，直到抵达最后的终点——罗马。这一路上我们又会遇到哪些壮丽的风景与新奇的体验呢？欢迎收看开车去罗马第三期。',
    },
    {
      id: null,
      biId: 'BV1CgUWYPEBv',
      title: '我不要这样成名啊！！！',
      hotURL: 'https://b23.tv/BV1CgUWYPEBv',
      imageURL: 'http://i2.hdslb.com/bfs/archive/cdb986e5f84fd60374aed2e983d55b96c58d3555.jpg',
      hotDesc: '-',
    },
    {
      id: null,
      biId: 'BV1P6SNYREo8',
      title:
        '【原神一条龙全收集】纳塔5.2(成就数202/火神瞳54/石盒59)镜璧山+翘枝崖+奥奇卡纳塔/宝箱/摩拉堆/玉帛/火之印/探索度/原神5.2一条龙',
      hotURL: 'https://b23.tv/BV1P6SNYREo8',
      imageURL: 'http://i1.hdslb.com/bfs/archive/97a61674fbcaaa0d002bfa89959d911bf403b46b.jpg',
      hotDesc:
        '本视频包含以下任务：\n龙的归巢、事件总是突如其来、向前冲!冲!冲!、来自烟谜主的使命、换羽时节、勇士的每一面、为我敞开心扉、名为夜的孤岛、扭曲的延伸\n宝箱成就总数：202\n12个幻写灵，11个限时挑战\n54火神瞳+57石盒+2金属盒+4摩拉盒+7玉帛\n火之印供奉30级后剩余266(5.0+5.1一个都不缺并且只跟本视频的情况下)\n5.2任务副本火之印：4个(来自烟谜主的使命[本视频有带]3+枪与翼4)\n5.2必做前置任务：\n5.2开图主线①：BV1ikSKYGEMw\n5.2开图主线②：BV15wSKY6E',
    },
    {
      id: null,
      biId: 'BV1DoUfYUEUr',
      title: '第一次正面冲突！',
      hotURL: 'https://b23.tv/BV1DoUfYUEUr',
      imageURL: 'http://i0.hdslb.com/bfs/archive/ec638f6145c2535c8b88b61678361ede7b434e10.jpg',
      hotDesc: '-',
    },
    {
      id: null,
      biId: 'BV1zZUWYwEyJ',
      title: '如果地球上的所有人向月球照射激光会发生什么？',
      hotURL: 'https://b23.tv/BV1zZUWYwEyJ',
      imageURL: 'http://i1.hdslb.com/bfs/archive/641cc4b0e47331859eb439160488c615db4b4978.jpg',
      hotDesc: '改编自《xkcd’s What if》',
    },
    {
      id: null,
      biId: 'BV1DkUtYZE8f',
      title: '【半佛】B站财报，充满社会毒打',
      hotURL: 'https://b23.tv/BV1DkUtYZE8f',
      imageURL: 'http://i1.hdslb.com/bfs/archive/f4dccfe19d1d4d96d80510575efb5390d4fd3f42.jpg',
      hotDesc: '阿B真的是不容易',
    },
    {
      id: null,
      biId: 'BV1wqUfYYEwg',
      title: '懒人葱油拌面，从微波炉熬猪油开始，十几分钟搞定',
      hotURL: 'https://b23.tv/BV1wqUfYYEwg',
      imageURL: 'http://i0.hdslb.com/bfs/archive/82a013ca6a8c5d536484ed58810f56449821f1bd.jpg',
      hotDesc: '懒人葱油拌面，从微波炉熬猪油开始，十几分钟搞定',
    },
    {
      id: null,
      biId: 'BV1oZUhY5EDt',
      title: '小砍之死',
      hotURL: 'https://b23.tv/BV1oZUhY5EDt',
      imageURL: 'http://i2.hdslb.com/bfs/archive/6c0987c0d1f77b8e05f2a9eef1d237b3adc96d7e.jpg',
      hotDesc:
        '俄罗斯轮盘赌联机版终于来了，也是迅速叫上马哥他们来一场男人之间的较量。\n以下是每个道具的作用（一定要看彩蛋）\n刀具：可以割断枪管使子弹的伤害翻倍\n手机：预知未来事件\n啤酒：弹出枪膛内当前子弹\n干扰器：可以指定一个玩家跳过一回合\n肾上腺素：可以使用别人一个道具（除了肾上腺素）\n放大镜：查看枪里子弹的真假\n香烟：可以恢复一格生命值\n逆转器：切换枪膛内当前子弹为实弹或空包弹\n远程遥控器：交换回合顺序\n感谢点开这个视频，看完觉得不错的话就点个赞！\n投币分享收藏这个视频可以让更多观众看到我！',
    },
  ];

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
              'https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg'
            }
            hotList={bilibiliHotList}
          />{' '}
          <HotNewsCar
            platFormName={'bilibili'}
            platFormURL={
              'https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg'
            }
            hotList={bilibiliHotList}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;
