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
    items: any[]
  }[];
  searchlist = [
    {
      id: 1,
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
      items: []
    },
  ];

  getsearchlist(selectedCity: string, selectedCategory: string, selectedType: string): Observable<any[]> {
    if (selectedCity === '' && selectedCategory === '' && selectedType) {
    }
    return of(this.searchlist).pipe(delay(this.delay));
  }

}
