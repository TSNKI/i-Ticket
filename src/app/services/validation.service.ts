import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  isVip(value: string) {
    const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return reg.test(value);
  }

  isVen(value: string) {
    const reg = /^[0-9]{7}$/;
    return reg.test(value);
  }

  isMgr(value: string) {
    const reg = /^M[0-9]{7}$/;
    return reg.test(value);
  }

  constructor() {
  }
}
