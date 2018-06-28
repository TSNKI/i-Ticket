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
        items: []
      },
      {
        id: 1,
        name: 'sport',
        displayName: '体育',
        items: []
      },
      {
        id: 2,
        name: 'movie',
        displayName: '电影',
        items: []
      },
      {
        id: 3,
        name: 'show',
        displayName: '综艺',
        items: []
      },
      {
        id: 4,
        name: 'opera',
        displayName: '戏剧',
        items: []
      },
      {
        id: 5,
        name: 'dance',
        displayName: '舞蹈',
        items: []
      },
    ];
    return categories;
  }
}
