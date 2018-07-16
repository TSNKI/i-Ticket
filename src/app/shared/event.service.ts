import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() {
  }

  get getCategories(): any[] {
    const categories = [
      {
        id: 0,
        name: 'concert',
        displayName: '演唱会',
        items: [
          {
            id: 0,
            title: '2018张韶涵「旅程」世界巡回演唱会',
            link: '',
            img: 'assets/images/home/concert/1529981645568_t4z0_m1.jpg',
            date: '2018-09-15',
            venue: '福州海峡奥林匹克体育中心 综合馆',
            price: 380
          },
          {
            id: 1,
            title: '张杰2018“未·LIVE”巡回演唱会-深圳站',
            link: 'ticket?id=5',
            img: 'assets/images/home/concert/155375_n.jpg',
            date: '2018-09-08',
            venue: '华润深圳湾体育中心＂春茧＂体育场',
            price: 280
          },
          {
            id: 2,
            title: '[广州] DUA LIPA 杜娃·黎波 2018广州演唱会',
            link: '',
            img: 'assets/images/home/concert/1531709582381_p2l6-0.jpg',
            date: '2018-09-11',
            venue: '中山纪念堂',
            price: 380
          },
          {
            id: 3,
            title: '[连云港] 2018[A CLASSIC TOUR 学友·经典]世界巡回演唱会 - 连云港站',
            link: '',
            img: 'assets/images/home/concert/1531725781184_a8c2-0.jpg',
            date: '2018-08-30',
            venue: '连云港市体育中心',
            price: 480
          },
          {
            id: 4,
            title: '[广州] 《最美计划》白小白LIVE巡演',
            link: '',
            img: 'assets/images/home/concert/1531706382496_q2h7-0.jpg',
            date: '2018-08-10',
            venue: 'TU凸空间',
            price: 188
          }
        ],
        ranking: [
          {
            id: 0,
            title: '[北京] 金玟岐2018"大七电台"全国巡回演唱会-北京站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 1,
            title: '[深圳] 徐佳莹"是日救星"2018巡回演唱会深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 2,
            title: '[深圳] 玛丽亚·凯莉2018世界巡演深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 3,
            title: '[深圳] 萧敬腾2018"娱乐先生"巡回演唱会--深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 4,
            title: '[上海] 梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
        ]
      },
      {
        id: 1,
        name: 'sport',
        displayName: '体育',
        items: [
          {
            id: 0,
            title: '2018 上海劳力士大师赛 2018 Rolex Shanghai Masters',
            link: '',
            img: 'assets/images/home/sport/1528683247445_m8c9_m1.jpg',
            date: '2018-10-06',
            venue: '上海旗忠森林体育城网球中心',
            price: 128
          },
          {
            id: 1,
            title: '[上海] 2018世锦赛-汇丰冠军赛',
            link: '',
            img: 'assets/images/home/sport/1531530125400_m6o9-0.jpg',
            date: '2018-10-25',
            venue: '上海佘山国际高尔夫俱乐部',
            price: 90
          },
          {
            id: 2,
            title: '[上海] 2018 上海劳力士大师赛 2018 Rolex Shanghai ',
            link: '',
            img: 'assets/images/home/sport/1528683247445_m8c9_m1.jpg',
            date: '2018-10-06',
            venue: '上海旗忠森林体育城网球中心',
            price: 128
          },
          {
            id: 3,
            title: '[上海] 超级企鹅联盟-终极红蓝大战',
            link: '',
            img: 'assets/images/home/sport/1531302494525_w4i6-0.jpg',
            date: '2018-09-15',
            venue: '上海东方体育中心',
            price: 144
          },
          {
            id: 4,
            title: '[宝鸡] 2018"约战太白之巅"羽毛球电视挑战赛',
            link: '',
            img: 'assets/images/home/sport/1528873742606_i6z4-0.jpg',
            date: '2018-08-18',
            venue: '海棠太白度假酒店运动馆',
            price: 138
          }
        ],
        ranking: [
          {
            id: 0,
            title: '[深圳] 2018赛季中国足球协会甲级联赛及足协杯深圳佳兆业主场赛季套票',
            link: '',
            img: 'assets/images/home/sport/1523351621585_z4c9_m1.jpg',
          },
          {
            id: 1,
            title: '[南京] 2018赛季江苏苏宁足球俱乐部会员卡',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 2,
            title: '[上海] 2018 上海劳力士大师赛 2018 Rolex Shanghai Masters',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 3,
            title: '[上海] 2018 赛季上海绿地申花足球俱乐部 半季联票',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 4,
            title: '[深圳] 2018传奇明星赛-深圳站',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
        ]
      },
      {
        id: 2,
        name: 'movie',
        displayName: '电影',
        items: [
          {
            id: 0,
            title: '张杰2018“未·LIVE”巡回演唱会-深圳站',
            link: '',
            img: 'assets/images/home/concert/155375_n.jpg',
            date: '2018-09-08',
            venue: '华润深圳湾体育中心＂春茧＂体育场',
            price: 280
          },
          {
            id: 1,
            title: '2018张韶涵「旅程」世界巡回演唱会',
            link: '',
            img: 'assets/images/home/concert/1529981645568_t4z0_m1.jpg',
            date: '2018-09-15',
            venue: '福州海峡奥林匹克体育中心 综合馆',
            price: 380
          },
          {
            id: 2,
            title: '[广州] DUA LIPA 杜娃·黎波 2018广州演唱会',
            link: '',
            img: 'assets/images/home/concert/1531709582381_p2l6-0.jpg',
            date: '2018-09-11',
            venue: '中山纪念堂',
            price: 380
          },
          {
            id: 3,
            title: '[连云港] 2018[A CLASSIC TOUR 学友·经典]世界巡回演唱会 - 连云港站',
            link: '',
            img: 'assets/images/home/concert/1531725781184_a8c2-0.jpg',
            date: '2018-08-30',
            venue: '连云港市体育中心',
            price: 480
          },
          {
            id: 4,
            title: '[广州] 《最美计划》白小白LIVE巡演',
            link: '',
            img: 'assets/images/home/concert/1531706382496_q2h7-0.jpg',
            date: '2018-08-10',
            venue: 'TU凸空间',
            price: 188
          }
        ],
        ranking: [
          {
            id: 0,
            title: '[北京] 金玟岐2018"大七电台"全国巡回演唱会-北京站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 1,
            title: '[深圳] 徐佳莹"是日救星"2018巡回演唱会深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 2,
            title: '[深圳] 玛丽亚·凯莉2018世界巡演深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 3,
            title: '[深圳] 萧敬腾2018"娱乐先生"巡回演唱会--深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 4,
            title: '[上海] 梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
        ]
      },
      {
        id: 3,
        name: 'show',
        displayName: '综艺',
        items: [
          {
            id: 0,
            title: '[上海] 2018 上海劳力士大师赛 2018 Rolex Shanghai ',
            link: '',
            img: 'assets/images/home/sport/1528683247445_m8c9_m1.jpg',
            date: '2018-10-06',
            venue: '上海旗忠森林体育城网球中心',
            price: 128
          },
          {
            id: 1,
            title: '2018 上海劳力士大师赛 2018 Rolex Shanghai Masters',
            link: '',
            img: 'assets/images/home/sport/1528683247445_m8c9_m1.jpg',
            date: '2018-10-06',
            venue: '上海旗忠森林体育城网球中心',
            price: 128
          },
          {
            id: 2,
            title: '[上海] 2018世锦赛-汇丰冠军赛',
            link: '',
            img: 'assets/images/home/sport/1531530125400_m6o9-0.jpg',
            date: '2018-10-25',
            venue: '上海佘山国际高尔夫俱乐部',
            price: 90
          },
          {
            id: 3,
            title: '[上海] 超级企鹅联盟-终极红蓝大战',
            link: '',
            img: 'assets/images/home/sport/1531302494525_w4i6-0.jpg',
            date: '2018-09-15',
            venue: '上海东方体育中心',
            price: 144
          },
          {
            id: 4,
            title: '[宝鸡] 2018"约战太白之巅"羽毛球电视挑战赛',
            link: '',
            img: 'assets/images/home/sport/1528873742606_i6z4-0.jpg',
            date: '2018-08-18',
            venue: '海棠太白度假酒店运动馆',
            price: 138
          }
        ],
        ranking: [
          {
            id: 0,
            title: '[深圳] 2018赛季中国足球协会甲级联赛及足协杯深圳佳兆业主场赛季套票',
            link: '',
            img: 'assets/images/home/sport/1523351621585_z4c9_m1.jpg',
          },
          {
            id: 1,
            title: '[南京] 2018赛季江苏苏宁足球俱乐部会员卡',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 2,
            title: '[上海] 2018 上海劳力士大师赛 2018 Rolex Shanghai Masters',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 3,
            title: '[上海] 2018 赛季上海绿地申花足球俱乐部 半季联票',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 4,
            title: '[深圳] 2018传奇明星赛-深圳站',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
        ]
      },
      {
        id: 4,
        name: 'opera',
        displayName: '戏剧',
        items: [
          {
            id: 0,
            title: '[广州] 《最美计划》白小白LIVE巡演',
            link: '',
            img: 'assets/images/home/concert/1531706382496_q2h7-0.jpg',
            date: '2018-08-10',
            venue: 'TU凸空间',
            price: 188
          },
          {
            id: 1,
            title: '2018张韶涵「旅程」世界巡回演唱会',
            link: '',
            img: 'assets/images/home/concert/1529981645568_t4z0_m1.jpg',
            date: '2018-09-15',
            venue: '福州海峡奥林匹克体育中心 综合馆',
            price: 380
          },
          {
            id: 2,
            title: '张杰2018“未·LIVE”巡回演唱会-深圳站',
            link: '',
            img: 'assets/images/home/concert/155375_n.jpg',
            date: '2018-09-08',
            venue: '华润深圳湾体育中心＂春茧＂体育场',
            price: 280
          },
          {
            id: 3,
            title: '[广州] DUA LIPA 杜娃·黎波 2018广州演唱会',
            link: '',
            img: 'assets/images/home/concert/1531709582381_p2l6-0.jpg',
            date: '2018-09-11',
            venue: '中山纪念堂',
            price: 380
          },
          {
            id: 4,
            title: '[连云港] 2018[A CLASSIC TOUR 学友·经典]世界巡回演唱会 - 连云港站',
            link: '',
            img: 'assets/images/home/concert/1531725781184_a8c2-0.jpg',
            date: '2018-08-30',
            venue: '连云港市体育中心',
            price: 480
          }
        ],
        ranking: [
          {
            id: 0,
            title: '[北京] 金玟岐2018"大七电台"全国巡回演唱会-北京站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 1,
            title: '[深圳] 徐佳莹"是日救星"2018巡回演唱会深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 2,
            title: '[深圳] 玛丽亚·凯莉2018世界巡演深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 3,
            title: '[深圳] 萧敬腾2018"娱乐先生"巡回演唱会--深圳站',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 4,
            title: '[上海] 梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱',
            link: '',
            img: 'assets/images/home/concert/1517364598889_l1g6_m1.jpg',
          },
        ]
      },
      {
        id: 5,
        name: 'dance',
        displayName: '舞蹈',
        items: [
          {
            id: 0,
            title: '[上海] 超级企鹅联盟-终极红蓝大战',
            link: '',
            img: 'assets/images/home/sport/1531302494525_w4i6-0.jpg',
            date: '2018-09-15',
            venue: '上海东方体育中心',
            price: 144
          },
          {
            id: 1,
            title: '[上海] 2018世锦赛-汇丰冠军赛',
            link: '',
            img: 'assets/images/home/sport/1531530125400_m6o9-0.jpg',
            date: '2018-10-25',
            venue: '上海佘山国际高尔夫俱乐部',
            price: 90
          },
          {
            id: 2,
            title: '[上海] 2018 上海劳力士大师赛 2018 Rolex Shanghai ',
            link: '',
            img: 'assets/images/home/sport/1528683247445_m8c9_m1.jpg',
            date: '2018-10-06',
            venue: '上海旗忠森林体育城网球中心',
            price: 128
          },
          {
            id: 3,
            title: '2018 上海劳力士大师赛 2018 Rolex Shanghai Masters',
            link: '',
            img: 'assets/images/home/sport/1528683247445_m8c9_m1.jpg',
            date: '2018-10-06',
            venue: '上海旗忠森林体育城网球中心',
            price: 128
          },
          {
            id: 4,
            title: '[宝鸡] 2018"约战太白之巅"羽毛球电视挑战赛',
            link: '',
            img: 'assets/images/home/sport/1528873742606_i6z4-0.jpg',
            date: '2018-08-18',
            venue: '海棠太白度假酒店运动馆',
            price: 138
          }
        ],
        ranking: [
          {
            id: 0,
            title: '[深圳] 2018赛季中国足球协会甲级联赛及足协杯深圳佳兆业主场赛季套票',
            link: '',
            img: 'assets/images/home/sport/1523351621585_z4c9_m1.jpg',
          },
          {
            id: 1,
            title: '[南京] 2018赛季江苏苏宁足球俱乐部会员卡',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 2,
            title: '[上海] 2018 上海劳力士大师赛 2018 Rolex Shanghai Masters',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 3,
            title: '[上海] 2018 赛季上海绿地申花足球俱乐部 半季联票',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
          {
            id: 4,
            title: '[深圳] 2018传奇明星赛-深圳站',
            link: '',
            img: 'assets/images/home/sport/1517364598889_l1g6_m1.jpg',
          },
        ]
      },
    ];
    return categories;
  }
}
