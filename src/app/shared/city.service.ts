import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() {
  }


  get getCities(): any[] {
    const categories = [
      {
        id: 0,
        name: 'all',
        displayName: '全部',
        items: []
      },
      {
        id: 1,
        name: 'BJ',
        displayName: '北京',
        items: []
      },
      {
        id: 2,
        name: 'SH',
        displayName: '上海',
        items: []
      },
      {
        id: 3,
        name: 'GZ',
        displayName: '广州',
        items: []
      },
      {
        id: 4,
        name: 'SZ',
        displayName: '深圳',
        items: []
      },
      {
        id: 5,
        name: 'NJ',
        displayName: '南京',
        items: []
      },
      {
        id: 6,
        name: 'CD',
        displayName: '成都',
        items: []
      },
      {
        id: 7,
        name: 'CQ',
        displayName: '重庆',
        items: []
      },
      {
        id: 8,
        name: 'XA',
        displayName: '西安',
        items: []
      },
      {
        id: 9,
        name: 'WH',
        displayName: '武汉',
        items: []
      },
      {
        id: 10,
        name: 'CS',
        displayName: '长沙',
        items: []
      },
      {
        id: 11,
        name: 'HH',
        displayName: '合肥',
        items: []
      },
      {
        id: 11,
        name: 'QT',
        displayName: '其他城市',
        items: []
      },
    ];
    return categories;
  }

}
