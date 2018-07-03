import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private delay = 750;

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

  vipLogin(username: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(username === 'mock@sample.com' && password === '123456');
      }, 500);
    });
  }

  venLogin(username: string, password: string): boolean {
    return username === '0000001' && password === '123456';
  }

  mgrLogin(username: string, password: string): boolean {
    return username === 'M0000001' && password === '123456';
  }

  getUserInfo(username: string): { username: string, nickname: string } | null {
    if (this.vipCheck(username)) {
      const info = {
        username,
        nickname: 'CBBAmazing'
      };
      return info;
    } else {
      return null;
    }
  }

  getUserDetail(): Observable<User> {
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(user), 2000);
    // });
    return of(user).pipe(delay(this.delay));
  }

  updateUserPassowrd(password: string): Observable<string> {
    const oldPassword = user.info.password;
    const newPassword = Object.assign(oldPassword, password);

    return of(newPassword).pipe(delay(this.delay));
  }

  updateUserInfo(info: User['info']): Observable<User['info']> {
    const oldUserInfo = user.info;
    const newUserInfo = Object.assign(oldUserInfo, info);

    return of(newUserInfo).pipe(delay(this.delay));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(newUserInfo), this.delay);
    // });
  }

  updateUserQuestions(questions: SecurityQuestions): Observable<SecurityQuestions> {
    const oldQuestions = user.security.securityQuestions;
    const newQuestions = Object.assign(oldQuestions, questions);

    return of(newQuestions).pipe(delay(this.delay));
  }
}

const user: User = {
  info: {
    email: 'mock@sample.com',
    password: '123456',
    nickname: 'CBBAmazing',
    phone: '+8613771104099',
    birth: '1981-03-29',
    motto: '解走点切思效导转决亲，律新5华变克。 构设质族员子住向志，北么每头使性五，' +
    '传角J许实位园。由南志前议毛需界证决，合思十世又由叫快时，声二K音般X变坟' +
    '。战定度全那队第，头且真中术，群C际维奋。式道据线众，新M。',
  },
  social: {
    backupEmail: '151250007@smail.nju.edu.cn',
    qq: '929509707',
    tencentWeibo: '929509707',
    sinaWeibo: 'woyebuzhidao',
  },
  payment: {
    bankCards: [
      {
        type: '储蓄卡',
        bank: '中国工商银行',
        id: '6222****1919',
        expire: '2028-08-01',
        personName: '*步兵'
      },
      {
        type: '储蓄卡',
        bank: '广东发展银行',
        id: '6222****1919',
        expire: '2022-03-04',
        personName: '*步兵'
      },
      {
        type: '信用卡',
        bank: '中国农业银行',
        id: '6222****1919',
        expire: '2024-07-06',
        personName: '*步兵'
      }
    ],
    shippingAddresses: [
      {
        name: '陈步兵',
        phone: '13771104099',
        country: '中国',
        province: '江苏省',
        city: '南京市',
        address: '南京大学（鼓楼校区）',
        zipCode: '210009',
      },
      {
        name: '陈步兵',
        phone: '13771104099',
        country: '中国',
        province: '江苏省',
        city: '南京市',
        address: '南京大学（鼓楼校区）',
        zipCode: '210009',
      },
      {
        name: '陈步兵',
        phone: '13771104099',
        country: '中国',
        province: '江苏省',
        city: '南京市',
        address: '南京大学（鼓楼校区）',
        zipCode: '210009',
      }
    ],
  },
  security: {
    securityQuestions: [
      {
        question: '你的父亲叫什么名字？',
        answer: '曹利航'
      },
      {
        question: '你家乡的名称是什么？',
        answer: '白蒲'
      },
      {
        question: '你最喜欢的格言是什么？',
        answer: '哦好的'
      }
    ],
    realName:
      {
        name: '',
        id: ''
      },
  },
};

export interface User {
  // Personal info
  info: {
    email: string,
    password: string,
    nickname: string,
    phone: string | null | undefined,
    birth: string | null | undefined,
    motto: string | null | undefined,
  };

  // Social accounts
  social: {
    backupEmail: string | null | undefined,
    qq: string | null | undefined,
    tencentWeibo: string | null | undefined,
    sinaWeibo: string | null | undefined,
  };

  // Payment
  payment: {
    bankCards: BankCard[] | null | undefined,
    shippingAddresses: ShippingAddress[] | null | undefined,
  };

  // Security
  security: {
    securityQuestions: SecurityQuestions,
    realName: RealName | null | undefined,
  };
}

export interface BankCard {
  type: bankCardType;
  bank: string;
  id: string;
  expire: string;
  personName: string;
}

export interface ShippingAddress {
  name: string;
  phone: string;
  country: string;
  province: string;
  city: string;
  address: string;
  zipCode: string;
}

export interface SecurityQuestion {
  question: string;
  answer: string;
}

export type SecurityQuestions = [ SecurityQuestion, SecurityQuestion, SecurityQuestion ] | null | undefined;

export interface RealName {
  name: string;
  id: string;
}

export type bankCardType = '储蓄卡' | '信用卡';

// const user
