import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchlistService {
  private delay = 750;

  constructor() {
  }

  item: {
    id: number,
    src: string,
    name: string,
    state: number,   // 012 预定中,售票中,已售罄
    displayName: string,
    price: string,
    description: string,
    vuene: string,
    vuenename: string,
    location: string,
    city: string,     // 排序之城市/类型/时间
    types: string,
    begintime: string,
    endtime: string,
    hasseats: boolean, // 三种图标
    hascode: boolean,
    hassafety: boolean,
    buytype: number,   // 012 预定,订票,缺票登记
    datetochoose: string [],
    pricetochoose: number [],
    priceavailabliy: boolean [],
  } [];
  searchlist = [
    {
      id: 1,
      src: '../../../assets/images/searchlist/zjych.jpg',
      name: '张杰2018“未·LIVE”巡回演唱会-深圳站',
      state: 1,   // 012 预定中,售票中,已售罄
      displayName: '张杰2018“未·LIVE”巡回演唱会-深圳站',
      price: '198,298,398',
      description: '破碎虚空，不畏浮云遮望眼；尽观蓝图，上下求索踏新征。过去成曲，未来已来。张杰2018未·LIVE巡回演唱会正式启动！这一次，听张杰 把未来唱给你听。',
      vuene: '华润深圳湾体育中心＂春茧＂体育场',
      vuenename: '华润深圳湾体育中心＂春茧＂体育场',
      location: '华润深圳湾体育中心＂春茧＂体育场',
      city: '深圳',     // 排序之城市/类型/时间
      types: '演唱会',
      begintime: '2018-09-08',
      endtime: '2018-09-09',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-09-08', '2018-09-09' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 2,
      src: '../../../assets/images/searchlist/wlhych.jpg',
      name: '王力宏“龙的传人2060”巡回演唱会-杭州站',
      state: 1,   // 012 预定中,售票中,已售罄
      displayName: '王力宏“龙的传人2060”巡回演唱会-杭州站',
      price: '198,298,398,698',
      description: '王力宏“龙的传人2060”巡回演唱会-杭州站演出将于2018-7-28在黄龙体育中心（体育场）开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '南京',     // 排序之城市/类型/时间
      types: '演唱会',
      begintime: '2018-7-28',
      endtime: '2018-7-28',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-7-28' ],
      pricetochoose: [ 198, 298, 398, 698 ],
      priceavailabliy: [ true, true, true, true ],
    },
    {
      id: 3,
      src: '../../../assets/images/searchlist/zshych.jpg',
      name: '2018张韶涵“旅程”世界巡回演唱会--天津',
      state: 1,   // 012 预定中,售票中,已售罄
      displayName: '2018张韶涵“旅程”世界巡回演唱会--天津',
      price: '198,298,398',
      description: '2018张韶涵“旅程”世界巡回演唱会--天津站演出将于2018-11-01在天津体育馆开场演出。',
      vuene: '天津体育馆',
      vuenename: '天津体育馆',
      location: '天津体育馆',
      city: '天津',     // 排序之城市/类型/时间
      types: '演唱会',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 4,
      src: '../../../assets/images/searchlist/dzqych.jpg',
      name: 'G.E.M.邓紫棋【Queen of Hearts】 2018世界巡回演唱会-上海站',
      state: 1,   // 012 预定中,售票中,已售罄
      displayName: 'G.E.M.邓紫棋【Queen of Hearts】 2018世界巡回演唱会-上海站',
      price: '198,298,398',
      description: 'G.E.M.邓紫棋【Queen of Hearts】 2018世界巡回演唱会-上海站演出将于2018-11-01在梅赛德斯-奔驰文化中心开场演出。',
      vuene: '梅赛德斯-奔驰文化中心',
      vuenename: '梅赛德斯-奔驰文化中心',
      location: '梅赛德斯-奔驰文化中心',
      city: '上海',     // 排序之城市/类型/时间
      types: '演唱会',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },

    {
      id: 5,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)南京站',
      state: 1,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)南京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)南京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '南京',     // 排序之城市/类型/时间
      types: '演唱会',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 6,
      src: '../../../assets/images/searchlist/mnyyy.jpg',
      name: '百老汇经典音乐剧《美女与野兽》中文版',
      state: 1,   // 012 预定中,售票中,已售罄
      displayName: '百老汇经典音乐剧《美女与野兽》中文版',
      price: '198,298,398',
      description: '百老汇经典音乐剧《美女与野兽》中文版演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: false, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 7,
      src: '../../../assets/images/searchlist/wlsbj.jpg',
      name: '开心麻花经典爆笑舞台剧《乌龙山伯爵》第54轮',
      state: 2,   // 012 预定中,售票中,已售罄
      displayName: '开心麻花经典爆笑舞台剧《乌龙山伯爵》第54轮',
      price: '198,298,398',
      description: '开心麻花经典爆笑舞台剧《乌龙山伯爵》第54轮演出将于2018-11-01在华特迪士尼大剧院开场演出。',
      vuene: '华特迪士尼大剧院',
      vuenename: '华特迪士尼大剧院',
      location: '华特迪士尼大剧院',
      city: '南京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: false,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 8,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 0,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: false, // 三种图标
      hascode: false,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 9,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 0,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: false, // 三种图标
      hascode: false,
      hassafety: false,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 10,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 0,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 11,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 0,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 12,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 2,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 13,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 2,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 14,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 0,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
    {
      id: 15,
      src: '../../../assets/images/searchlist/zjg.jpg',
      name: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      state: 0,   // 012 预定中,售票中,已售罄
      displayName: '百老汇原版音乐剧《芝加哥》(Chicago)北京站',
      price: '198,298,398',
      description: '百老汇原版音乐剧《芝加哥》(Chicago)北京站演出将于2018-11-01在天桥艺术中心开场演出。',
      vuene: '天桥艺术中心',
      vuenename: '天桥艺术中心',
      location: '天桥南大街9号楼',
      city: '北京',     // 排序之城市/类型/时间
      types: '戏剧',
      begintime: '2018-11-01',
      endtime: '2018-11-18',
      hasseats: true, // 三种图标
      hascode: true,
      hassafety: true,
      buytype: 1,   // 012 预定,订票,缺票登记
      datetochoose: [ '2018-11-01', '2018-11-02', '2018-11-18' ],
      pricetochoose: [ 198, 298, 398 ],
      priceavailabliy: [ false, true, true ],
    },
  ];

  getsearchlist(selectedCity: string, selectedCategory: string, selectedType: string): Observable<any> {
    return of(this.searchlist).pipe(delay(this.delay));
  }

  getSingleTicket(id: number): Observable<any []> {
    const res = [];
    for (const i of this.searchlist) {
      if (i.id === id) {
        res.push(i);
        return of(res).pipe(delay(this.delay));
      }
    }
    return of(this.searchlist).pipe(delay(this.delay));
  }

}
