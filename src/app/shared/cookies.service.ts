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
    document.cookie = name + '=' + value + ';expires=' + d.toUTCString();
    console.log(name + '=' + value + ';expires=' + d.toUTCString());
  }

  getCookie(name: string): string {
    const arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[ i ].split('='); // ['abc','cba']
      if (arr2[ 0 ] === name) {
        return arr2[ 1 ];
      }
    }
    return '';

  }
}
