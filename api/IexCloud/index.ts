import axios from 'axios';
import BaseClient from '../BaseClient';

export default class IexCloudClient extends BaseClient {

  static create(
    token: string
  ) {
    return new IexCloudClient(token);
  }

  getCompanyInfomation(sc: string) {
    return this._axios.get(`${sc}/company?token=${this._token}`)
  }
}
