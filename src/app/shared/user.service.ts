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
    return of(user).pipe(delay(this.delay));
  }

  updateUserInfo(info: User['info']): Observable<User['info']> {
    const oldUserInfo = user.info;
    const newUserInfo = Object.assign(oldUserInfo, info);

    return of(newUserInfo).pipe(delay(this.delay));
  }

  updateUserSocialAccounts(accounts: User['social']): Observable<User['social']> {
    const oldAccounts = user.social;
    const newAccounts = Object.assign(oldAccounts, accounts);

    return of(newAccounts).pipe(delay(this.delay));
  }

  updateUserBankCards(cards: BankCard[]): Observable<BankCard[]> {
    const oldCards = user.payment.bankCards;
    const newCards = Object.assign(oldCards, cards);

    return of(newCards).pipe(delay(this.delay));
  }

  updateUserAddresses(addresses: ShippingAddress[]): Observable<ShippingAddress[]> {
    const oldAddresses = user.payment.shippingAddresses;
    const newAddresses = Object.assign(oldAddresses, addresses);

    return of(newAddresses).pipe(delay(this.delay));
  }

  updateUserPassword(password: string): Observable<string> {
    const oldInfo = user.info;
    const saveInfo = {
      email: oldInfo.email,
      password,
      nickname: oldInfo.nickname,
      phone: oldInfo.phone,
      birth: oldInfo.birth,
      motto: oldInfo.motto
    };
    const newInfo = Object.assign(oldInfo, saveInfo);

    const newPassword = newInfo.password;

    return of(newPassword).pipe(delay(this.delay));
  }

  updateUserQuestions(questions: SecurityQuestions): Observable<SecurityQuestions> {
    const oldQuestions = user.security.securityQuestions;
    const newQuestions = Object.assign(oldQuestions, questions);

    return of(newQuestions).pipe(delay(this.delay));
  }

  updateUserRealName(realName: RealName): Observable<RealName> {
    const oldRealName = user.security.realName;
    const newRealName = Object.assign(oldRealName, realName);

    return of(newRealName).pipe(delay(this.delay));
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
        bank: '中国工商银行',
        id: '5678909876543212345',
        expire: '2028/08',
        personName: '*步兵'
      },
      {
        bank: '广东发展银行',
        id: '2345678909876543212',
        expire: '2022/03',
        personName: '*步兵'
      },
      {
        bank: '中国农业银行',
        id: '1234567890987654321',
        expire: '2024/07',
        personName: '*步兵',
        billing: {
          country: '中国',
          province: '江苏省',
          city: '南京市',
          address: '南京大学（鼓楼校区）',
          zipCode: '210009'
        }
      }
    ],
    shippingAddresses: [
      {
        name: '陈步兵',
        phone: '+86 137 7110 4099',
        country: 'CN',
        province: '江苏省',
        city: '南京市',
        address: '南京大学（鼓楼校区）',
        zipCode: '210009',
      },
      {
        name: '陈步兵',
        phone: '+86 137 7110 4099',
        country: 'CN',
        province: '江苏省',
        city: '南京市',
        address: '南京大学（仙林校区）',
        zipCode: '210009',
      },
      {
        name: '陈步兵',
        phone: '+86137 7110 4099',
        country: 'CN',
        province: '江苏省',
        city: '南京市',
        address: '汉口路小学',
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
        name: '陈步兵',
        id: '320***********3518'
        // name: '',
        // id: ''
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

export interface CreditCard {
  bank: string;
  id: string;
  expire: string;
  personName: string;
  billing: {
    country: string;
    province: string;
    city: string;
    address: string;
    zipCode: string;
  };
}

export interface DebitCard {
  bank: string;
  id: string;
  expire: string;
  personName: string;
}

export type BankCard = CreditCard | DebitCard;

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
