import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() {
  }

  setCookie(name: string, value: any, timeout: number): void {
    const d = new Date();
    d.setDate(d.getDate() + timeout);
    document.cookie = name + '=' + value + ';expires=' + d;
    console.log(name + '=' + value + ';expires=' + d);
  }

  getCookie(name: string): string {
    const arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[ i ].split('='); // ['abc','cba']
      if (arr2[ 0 ] === name) {
        console.log(arr2[ 1 ]);
        return arr2[ 1 ];
      }
    }
    return '';

  }
}
