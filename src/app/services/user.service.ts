import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  vipCheck(username: string): boolean {
    return username === 'mock@sample.com';
  }

  venCheck(username: string): boolean {
    return username === '0000001';
  }

  mgrCheck(username: string): boolean {
    return username === 'M0000001';
  }

  vipLogin(username: string, password: string): boolean {
    return username === 'mock@sample.com' && password === '123456';
  }

  venLogin(username: string, password: string): boolean {
    return username === '0000001' && password === '123456';
  }

  mgrLogin(username: string, password: string): boolean {
    return username === 'M0000001' && password === '123456';
  }
}
